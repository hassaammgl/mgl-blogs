import { getUserData } from "@/actions/blog.action";
import { create } from "zustand";

export const useUserStore = create((set) => ({
    data: null,

    setUserData: async () => {
        if (this.data === null) {
            const res = await getUserData();
            console.log(res); // Debugging log
            set({ data: res.data });
        }
        else return
    },
}));

export const useBlogStore = create((set) => ({
    blog: {},
    getBlogData: () => {
        // Define API call and state update here
    },
}));

export const useBlogFormStore = create((set) => ({
    step: 1,
    title: "",
    description: "",
    image: "",
    imageId: null,
    category: "",
    content: "",
    imgByAi: null,
    aiLoading: false,
    contentByAi: null,
    setStep: (step) => set({ step }),
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setImgByAi: (imgByAi) => set({ imgByAi }),
    setImage: (image) => set({ image }),
    setCategory: (category) => set({ category }),
    setAiLoading: (bool) => set({ aiLoading: bool }),
    setContentByAi: (bool) => set({ contentByAi: bool }),
    setContent: (content) => set({ content }),
    setImageId: (imageID) => set({ imageId: imageID }),
}));