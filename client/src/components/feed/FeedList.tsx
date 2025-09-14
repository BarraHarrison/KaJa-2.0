import React from "react";
import { useAppStore } from "../../store/store";
import RidePost from "./RidePost"

export default function FeedList() {
    const posts = useAppStore((state) => state.posts);

    return (
        
    )
}