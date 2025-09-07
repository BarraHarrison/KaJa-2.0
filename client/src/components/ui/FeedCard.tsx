import React from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`rounded-2xl shadow-md bg-white p-4 border ${className}`}
        >
            {children}
        </div>
    );
}
