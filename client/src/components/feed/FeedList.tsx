import React from "react";
import { useAppStore } from "../../store/store";
import RidePost from "./RidePost"

export default function FeedList() {
    const posts = useAppStore((state) => state.posts);

    return (
        <div className="space-y-4 px-6">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <RidePost
                        key={post.id}
                        id={post.id}
                        user={post.user}
                        ride={post.ride}
                        distance={post.distance}
                        location={post.location}
                        time={post.time}
                        chapeauCount={post.chapeauCount}
                        hasChapeaued={post.hasChapeaued}
                        comments={post.comments}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">아직 포스트가 없습니다 🚴</p>
            )}
        </div>
    );
}