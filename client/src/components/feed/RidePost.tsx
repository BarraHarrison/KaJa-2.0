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


}