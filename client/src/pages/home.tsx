import React from "react";
import FeedList from "../components/feed/FeedList";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <h1 className="text-2xl font-bold p-6">피드 (Feed)</h1>
            <div className="space-y-4 px-6">
                <FeedList />
            </div>
        </div>
    );
}
