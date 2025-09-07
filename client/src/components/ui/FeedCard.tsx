import React from "react";

type FeedCardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function FeedCard({ children, className = "" }: FeedCardProps) {
    return (
        <div
            className={`rounded-2xl shadow-md bg-white p-4 border ${className}`}
        >
            {children}
        </div>
    );
}
