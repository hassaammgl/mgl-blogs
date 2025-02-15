import { getUserData } from "@/actions/blog.action";
import { create } from "zustand";

export const useUserStore = create((set) => ({
    data: {},
}));


export const useBlogStore = create((set) => ({
    blog: {},
    getBlogData: () => set((state) => ({ data: state.data })),
}));