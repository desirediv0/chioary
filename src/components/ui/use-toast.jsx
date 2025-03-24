"use client";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const toast = ({ title, description, variant = "default" }) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { id, title, description, variant };
        setToasts((prev) => [...prev, newToast]);

        // Auto dismiss
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={`p-4 rounded-md shadow-md ${t.variant === "destructive" ? "bg-red-500 text-white" : "bg-white"
                            }`}
                    >
                        <div className="font-medium">{t.title}</div>
                        <div className="text-sm">{t.description}</div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
