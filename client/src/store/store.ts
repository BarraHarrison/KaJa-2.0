import { create } from "zustand"

type AppState = {
    user: {
        id: string | null;
        name: string | null;
    };

    setUser: (id: string, name: string) => void;
    clearUser: () => void;
};

