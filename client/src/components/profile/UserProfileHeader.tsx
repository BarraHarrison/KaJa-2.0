import React from "react";

export default function UserProfileHeader() {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div>
                <p className="font-semibold">Username</p>
                <p className="text-sm text-gray-500">Cyclist bio goes here</p>
            </div>
        </div>
    );
}
