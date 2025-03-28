"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
    useEffect(() => {
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = function () {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,hi", // Restrict to English & Hindi
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            };

            const addScript = document.createElement("script");
            addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            addScript.async = true;
            document.body.appendChild(addScript);
        }
    }, []);

    return <div id="google_translate_element"></div>;
}
