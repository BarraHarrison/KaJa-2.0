import React from "react";
import { Clock, MapPin } from "lucide-react";
import FeedCard from "../components/ui/FeedCard";
import UserAvatar from "../components/ui/UserAvatar";

export default function Home() {
    const dummyFeed = [
        { id: 1, user: "Alex", ride: "Morning ride 🚴‍♂️", distance: "25 km", location: "Han River", time: "2h ago" },
        { id: 2, user: "Jamie", ride: "Climbed Namhansanseong 🏔️", distance: "12 km", location: "Namhansanseong", time: "5h ago" },
        { id: 3, user: "Soojin", ride: "Night spin 🌙", distance: "15 km", location: "Gangnam", time: "Yesterday" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <h1 className="text-2xl font-bold p-6">피드 (Feed)</h1>

            <div className="space-y-4 px-6">
                {dummyFeed.map((post) => (
                    <FeedCard key={post.id}>
                        <div className="flex items-center space-x-3 mb-2">
                            <UserAvatar />
                            <p className="font-semibold">{post.user}</p>
                        </div>

                        <p className="text-lg font-medium">{post.ride}</p>
                        <p className="text-gray-600">{post.distance}</p>

                        <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                            <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{post.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.time}</span>
                            </div>
                        </div>
                    </FeedCard>
                ))}
            </div>
        </div>
    );
}
