import React from "react";
import { Link } from "wouter";

export default function Home() {
    // Placeholder feed items
    const dummyFeed = [
        { id: 1, user: "Alex", ride: "Morning ride 🚴‍♂️ - 25km" },
        { id: 2, user: "Jamie", ride: "Climbed Namhansanseong 🏔️" },
        { id: 3, user: "Soojin", ride: "Night spin 🌙 - 15km" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-4">피드 (Feed)</h1>

            <div className="space-y-4">
                {dummyFeed.map((post) => (
                    <div
                        key={post.id}
                        className="rounded-2xl shadow-md bg-white p-4 border"
                    >
                        <p className="font-semibold">{post.user}</p>
                        <p className="text-gray-700">{post.ride}</p>
                    </div>
                ))}
            </div>

            {/* Simple bottom nav placeholder */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around p-2">
                <Link href="/home">
                    <a className="text-blue-500">홈</a>
                </Link>
                <Link href="/challenges">
                    <a className="text-gray-500">챌린지</a>
                </Link>
                <Link href="/groups">
                    <a className="text-gray-500">그룹라이딩</a>
                </Link>
                <Link href="/profile">
                    <a className="text-gray-500">프로필</a>
                </Link>
            </nav>
        </div>
    );
}
