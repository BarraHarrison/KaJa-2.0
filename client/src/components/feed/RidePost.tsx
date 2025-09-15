import React, { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { useAppStore } from "../../store/store";

interface RidePostProps {
    id: number;
    user: string;
    ride: string;
    distance: string;
    location: string;
    time: string;
    chapeauCount: number;
    hasChapeaued: boolean;
    comments: string[];
}

export default function RidePost({
    id,
    user,
    ride,
    distance,
    location,
    time,
    chapeauCount,
    hasChapeaued,
    comments,
}: RidePostProps) {
    const toggleChapeau = useAppStore((state) => state.toggleChapeau);
    const addComment = useAppStore((state) => state.addComment);

    const [commentInput, setCommentInput] = useState("");
    const [showComments, setShowComments] = useState(false);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (commentInput.trim()) {
            addComment(id, commentInput.trim());
            setCommentInput("");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 border">
            {/* Header */}
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                    {user[0]}
                </div>
                <span className="ml-2 font-semibold">{user}</span>
            </div>

            {/* Ride content */}
            <h3 className="text-lg font-bold">{ride}</h3>
            <p className="text-gray-600">{distance}</p>

            <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{time}</span>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-around mt-4 text-gray-700">
                <button
                    onClick={() => toggleChapeau(id)}
                    className={`flex items-center space-x-1 ${hasChapeaued ? "text-blue-600 font-semibold" : ""
                        }`}
                >
                    <span>🎩 샤포</span>
                    <span>{chapeauCount}</span>
                </button>

                <button
                    onClick={() => setShowComments((prev) => !prev)}
                    className="flex items-center space-x-1"
                >
                    <span>💬 코멘트</span>
                    <span>{comments.length}</span>
                </button>

                <button
                    onClick={() => alert("Share feature coming soon 🚧")}
                    className="flex items-center space-x-1"
                >
                    <span>🔗 공유</span>
                </button>
            </div>

            {/* Comment Section */}
            {showComments && (
                <div className="mt-4">
                    <form onSubmit={handleCommentSubmit} className="flex space-x-2">
                        <input
                            type="text"
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            className="flex-grow border rounded-lg px-3 py-1 text-sm"
                            placeholder="코멘트를 입력하세요..."
                        />
                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                        >
                            게시
                        </button>
                    </form>

                    <ul className="mt-2 space-y-1">
                        {comments.map((c, i) => (
                            <li key={i} className="text-sm text-gray-700">
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}