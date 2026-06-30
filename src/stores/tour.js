import { defineStore } from "pinia";

export const useTourStore = defineStore(
    "tour", {
        state: () => ({
            tours: [],
            loading: false,
        }),
    }
);