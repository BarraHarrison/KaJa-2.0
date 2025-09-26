import { create } from "zustand";

export interface Post {
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

export type NewPostInput = Omit<Post, "id" | "chapeauCount" | "hasChapeaued" | "comments">;


interface AppState {
    posts: Post[];
    addPost: (post: NewPostInput) => void;
    toggleChapeau: (id: number) => void;
    addComment: (id: number, comment: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    // Seeding some dummy posts
    posts: [
        {
            id: 1,
            user: "Alex",
            ride: "Morning ride 🚴‍♂️",
            distance: "25 km",
            location: "Han River",
            time: "2h ago",
            chapeauCount: 0,
            hasChapeaued: false,
            comments: [],
        },
        {
            id: 2,
            user: "Jamie",
            ride: "Climbed Namhansanseong 🏔️",
            distance: "12 km",
            location: "Namhansanseong",
            time: "5h ago",
            chapeauCount: 0,
            hasChapeaued: false,
            comments: [],
        },
        {
            id: 3,
            user: "Soojin",
            ride: "Night spin 🌙",
            distance: "15 km",
            location: "Gangnam",
            time: "Yesterday",
            chapeauCount: 0,
            hasChapeaued: false,
            comments: [],
        },
    ],

    addPost: (postInput) =>
        set((state) => {
            const newPost: Post = {
                id: Date.now(),
                user: postInput.user,
                ride: postInput.ride,
                distance: postInput.distance,
                location: postInput.location,
                time: postInput.time,
                chapeauCount: 0,
                hasChapeaued: false,
                comments: [],
            };
            return { posts: [newPost, ...state.posts] };
        }),


    toggleChapeau: (id) =>
        set((state) => ({
            posts: state.posts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        chapeauCount: post.hasChapeaued
                            ? post.chapeauCount - 1
                            : post.chapeauCount + 1,
                        hasChapeaued: !post.hasChapeaued,
                    }
                    : post
            ),
        })),

    addComment: (id, comment) =>
        set((state) => ({
            posts: state.posts.map((post) =>
                post.id === id
                    ? { ...post, comments: [...post.comments, comment] }
                    : post
            ),
        })),
}));
