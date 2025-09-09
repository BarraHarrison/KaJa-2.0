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
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

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

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim() !== "") {
            setComments((prev) => [...prev, newComment]);
            setNewComment("");
        }
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
                    <form onSubmit={handleCommentSubmit} className="flex space-x-2">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="댓글을 입력하세요..."
                            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
                        >
                            등록
                        </button>
                    </form>

                    <div className="mt-3 space-y-2">
                        {comments.map((comment, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700"
                            >
                                {comment}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedCard;