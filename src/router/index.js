import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import FlightSearchView from "@/views/FlightSearchView.vue";
import TrainSearchView from "@/views/TrainSearchView.vue";
import DetailView from "@/views/DetailView.vue";
// import RegisteView from "@/views/RegisteView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    // {
    //     path: "/register",
    //     name: "register",
    //     component: RegisteView,
    // },

    {
        path: "/login",
        name: "login",
        component: LoginView,
    },

    {
        path: "/flights",
        name: "flights",
        component: FlightSearchView,
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/trains",
        name: "trains",
        component: TrainSearchView,
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/details/:type/:code",
        name: "details",
        component: DetailView,
        meta: {
            requiresAuth: true,
        },
    },
    ],
});

router.beforeEach((to) => {
    const token = localStorage.getItem("token");

    if (to.meta.requiresAuth && !token) {
        return "/login";
    }
});

export default router;