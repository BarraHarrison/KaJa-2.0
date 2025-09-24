import React, { useState } from "react";
import { Post, useAppStore } from "../../store/store";

export default function NewPostForm() {
    const addPost = useAppStore((s) => s.addPost);
    const posts = useAppStore((s) => s.posts);

    const [title, setTitle] = useState("");
    const [distance, setDistance] = useState("");
    const [location, setLocation] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        setSubmitting(true);

        const maxId = posts.length ? Math.max(...posts.map((p) => p.id)) : 0;
        const newPost: Post = {
            id: maxId + 1,
            user: "나",
            ride: trimmedTitle,
            distance: distance.trim() || "0 km",
            location: location.trim() || "위치 없음",
            time: "방금 전",
            chapeauCount: 0,
            hasChapeaued: false,
            comments: [],
        };

        addPost(newPost);

        // reset form
        setTitle("");
        setDistance("");
        setLocation("");
        setSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-4">
            <h3 className="text-lg font-semibold mb-2">새 게시물 작성</h3>

            <div className="space-y-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="라이딩 제목 (예: 한강 라이딩)"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <div className="flex gap-2">
                    <input
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        placeholder="거리 (예: 25 km)"
                        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="위치 (예: 한강)"
                        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>
            </div>

            <div className="flex justify-end mt-3">
                <button
                    type="submit"
                    disabled={submitting || title.trim() === ""}
                    className={`px-4 py-2 rounded-lg text-white ${title.trim() === "" ? "bg-gray-300 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"
                        }`}
                >
                    {submitting ? "게시중..." : "게시"}
                </button>
            </div>
        </form>
    );
}
