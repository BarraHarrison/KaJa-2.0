import React from "react";
import { User } from "lucide-react";

export default function UserAvatar() {
    return (
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
        </div>
    );
}
