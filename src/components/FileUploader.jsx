"use client";

import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload } from "lucide-react";
import Image from "next/image";

export const FileUploader = ({
    onFileChange,
    accept = "image/*",
    multiple = false,
    maxFiles = 5,
    maxSize = 20 * 1024 * 1024, // 20MB
    existingFiles = [],
    onRemoveExisting = null,
    fileType = "image" // Now only used for "image"
}) => {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);

    // Handle existing files on component mount
    useEffect(() => {
        if (existingFiles && existingFiles.length > 0 && !multiple && existingFiles[0]) {
            // If single file mode and we have an existing file, we show it
            const existingFile = existingFiles[0];
            setPreviews([{
                id: existingFile.id,
                preview: existingFile.url || existingFile.image,
                isExisting: true
            }]);
        } else if (existingFiles && existingFiles.length > 0 && multiple) {
            // If multiple files mode, we show all existing files
            const existingPreviews = existingFiles.map(file => ({
                id: file.id,
                preview: file.url || file.image,
                isExisting: true
            }));
            setPreviews(existingPreviews);
        }
    }, [existingFiles, multiple]);

    const onDrop = useCallback(
        (acceptedFiles) => {
            // If not multiple and we already have files, replace them
            if (!multiple) {
                const newFiles = [acceptedFiles[0]];

                // Create new previews and clear old ones
                const newFilePreviews = newFiles.map(file => ({
                    file,
                    preview: URL.createObjectURL(file),
                    isExisting: false
                }));

                // Revoke previous URLs to prevent memory leaks
                previews.forEach(preview => {
                    if (!preview.isExisting && preview.preview) {
                        URL.revokeObjectURL(preview.preview);
                    }
                });

                setFiles(newFiles);
                setPreviews(newFilePreviews);
                onFileChange(newFiles[0]);
            } else {
                // In multiple mode, add the new files
                const newFiles = [...files, ...acceptedFiles];
                const newFilePreviews = [
                    ...previews.filter(p => p.isExisting), // Keep existing files
                    ...newFiles.map(file => ({
                        file,
                        preview: URL.createObjectURL(file),
                        isExisting: false
                    }))
                ];

                setFiles(newFiles);
                setPreviews(newFilePreviews);
                onFileChange(newFiles);
            }
        },
        [files, multiple, onFileChange, previews]
    );

    const removeFile = (index) => {
        const preview = previews[index];

        if (preview.isExisting && onRemoveExisting) {
            // Handle removing existing file
            onRemoveExisting(preview.id);

            // Remove from previews
            const newPreviews = [...previews];
            newPreviews.splice(index, 1);
            setPreviews(newPreviews);
        } else {
            // Handle removing new file
            const newFiles = [...files];
            const fileIndex = files.findIndex(f =>
                !preview.isExisting && f === preview.file);

            if (fileIndex !== -1) {
                newFiles.splice(fileIndex, 1);
            }

            // Revoke URL to prevent memory leaks
            if (!preview.isExisting && preview.preview) {
                URL.revokeObjectURL(preview.preview);
            }

            const newPreviews = [...previews];
            newPreviews.splice(index, 1);

            setFiles(newFiles);
            setPreviews(newPreviews);

            if (multiple) {
                onFileChange(newFiles);
            } else {
                onFileChange(newFiles[0] || null);
            }
        }
    };

    // Clean up object URLs when component unmounts
    useEffect(() => {
        return () => {
            previews.forEach(preview => {
                if (!preview.isExisting && preview.preview) {
                    URL.revokeObjectURL(preview.preview);
                }
            });
        };
    }, [previews]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { [accept]: [] },
        multiple,
        maxFiles,
        maxSize,
    });

    return (
        <div className="space-y-4">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                    }`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                    {isDragActive
                        ? "Drop the files here ..."
                        : "Drag & drop images here, or click to select"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    {multiple
                        ? `You can upload up to ${maxFiles} images`
                        : "You can upload one image"}
                </p>
            </div>

            {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previews.map((preview, index) => (
                        <div key={index} className="relative group">
                            <div className="relative h-32 rounded-md overflow-hidden">
                                <Image
                                    src={preview.preview}
                                    alt={`Preview ${index}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
