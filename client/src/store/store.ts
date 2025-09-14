import { create } from "zustand"

type AppState = {
    user: {
        id: string | null;
        name: string | null;
    };

    setUser: (id: string, name: string) => void;
    clearUser: () => void;
};

export const useAppStore = create<AppState>((set) => ({
    user: { id: null, name: null },

    setUser: (id, name) => set({ user: { id, name } }),

    clearUser: () => set({ user: { id: null, name: null } }),
}));