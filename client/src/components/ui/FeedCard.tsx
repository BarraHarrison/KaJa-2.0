import React, { useState } from "react";
import { UserAvatar } from "../components/ui/UserAvatar";


interface FeedCardProps {
    username: string;
    rideTitle: string;
    rideDetails: string;
}

const FeedCard: React.FC<FeedCardProps> = ({ username, rideTitle, rideDetails }) => {
    const [chapeauCount, setChapeauCount] = useState(0);
    const [hasChapeaued, setHasChapeaued] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);

    const toggleChapeau = () => {
        if (hasChapeaued) {
            setChapeauCount((prev) => prev - 1);
            setHasChapeaued(false);
        } else {
            setChapeauCount((prev) => prev + 1);
            setHasChapeaued(true);
        }
    };

    const toggleCommentBox = () => {
        setShowCommentBox((prev) => !prev);
    };

    const handleShare = () => {
        alert("Share feature coming soon! 🚧");
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
                <UserAvatar username={username} />
                <span className="ml-2 font-semibold">{username}</span>
            </div>

            <h3 className="text-lg font-bold">{rideTitle}</h3>
            <p className="text-gray-600">{rideDetails}</p>

            <div className="flex justify-around mt-4 text-gray-700">
                <button
                    onClick={toggleChapeau}
                    className={`flex items-center space-x-1 ${hasChapeaued ? "text-blue-600 font-semibold" : ""
                        }`}
                >
                    <span>🎩 샤포</span>
                    <span>{chapeauCount}</span>
                </button>

                <button onClick={toggleCommentBox} className="flex items-center space-x-1">
                    <span>💬 코멘트</span>
                </button>

                <button onClick={handleShare} className="flex items-center space-x-1">
                    <span>🔗 공유</span>
                </button>
            </div>

            {showCommentBox && (
                <div className="mt-3">
                    <input
                        type="text"
                        placeholder="댓글을 입력하세요..."
                        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}
        </div>
    );
};

export default FeedCard;