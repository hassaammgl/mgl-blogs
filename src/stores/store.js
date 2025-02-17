import { getUserData } from "@/actions/blog.action";
import { create } from "zustand";

export const useUserStore = create((set) => ({
    data: null,

    setUserData: async () => {
        const res = await getUserData();
        console.log(res); // Debugging log
        set({ data: res.data });
    },
}));

export const useBlogStore = create((set) => ({
    blog: {},
    getBlogData: () => {
        // Define API call and state update here
    },
}));
