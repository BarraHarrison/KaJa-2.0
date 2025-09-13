import { create } from "zustand";

interface FeedPost {
    id: number;
    user: string;
    ride: string;
}

interface FeedState {
    posts: FeedPost[];
    addPost: (post: FeedPost) => void;
}

export const useFeedStore = create<FeedState>((set) => ({
    posts: [],
    addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
}));
