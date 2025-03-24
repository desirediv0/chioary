"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import dynamic from "next/dynamic";

// Import React Quill dynamically to avoid SSR issues
const ReactQuill = dynamic(
    () =>
        import("react-quill").then(mod => {
            // Properly forwarding refs to resolve the warning
            const ForwardedQuill = forwardRef((props, ref) => <mod.default ref={ref} {...props} />);
            ForwardedQuill.displayName = 'ForwardedQuill';
            return { default: ForwardedQuill }
        }),
    {
        ssr: false,
        loading: () => <p>Loading editor...</p>,
    }
);

// We need to import the CSS separately
import "react-quill/dist/quill.snow.css";

export const ReactQuillEditor = ({ value, onChange, config = {} }) => {
    const [editorValue, setEditorValue] = useState(value || "");
    const [mounted, setMounted] = useState(false);
    const quillRef = useRef(null);

    // Ensure the component is mounted client-side
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Handle value changes
    const handleChange = (content) => {
        setEditorValue(content);
        if (onChange) {
            onChange(content);
        }
    };

    // Default modules configuration
    const defaultModules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    // Default formats that will be recognized and retained
    const defaultFormats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        "image",
        "video",
        "color",
        "background",
    ];

    // Merge user config with defaults
    const mergedModules = { ...defaultModules, ...config.modules };
    const mergedFormats = config.formats || defaultFormats;

    if (!mounted) {
        return <div className="border p-4 h-48 bg-gray-50">Loading editor...</div>;
    }

    // Set editor container style with fixed height
    const editorHeight = config.height || 300;
    const containerStyle = {
        height: `${editorHeight}px`,
        display: 'flex',
        flexDirection: 'column'
    };

    // Calculate actual editor height (subtract toolbar height - approx 42px)
    const editorStyle = {
        height: `${editorHeight - 42}px`,
        overflow: 'auto',
        flexGrow: 1
    };

    return (
        <div className="quill-editor-wrapper" style={containerStyle}>
            <ReactQuill
                ref={quillRef}
                theme="snow"
                value={editorValue}
                onChange={handleChange}
                modules={mergedModules}
                formats={mergedFormats}
                placeholder="Write something..."
                style={editorStyle}
            />
        </div>
    );
};
