import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Creator from "@/layouts/Creator.vue";
import Auth from "@/layouts/Auth.vue";
import Sponsor from "@/layouts/Sponsor.vue";

// views for Admin layout

import AdminDashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";

// views for Creator Layout
import CreatorDashboard from "@/views/creator/Dashboard.vue";
import CreatorMyContents from "@/views/creator/MyContents.vue";
import CreatorEarnings from "@/views/creator/Earnings.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Forgot from "@/views/auth/Forgot.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Conentdetail from "@/views/ContentDetail.vue";
import UploadContent from "@/views/UploadContent.vue";

import Ads from "@/views/sponsor/Ads.vue";
import Payment from "@/views/sponsor/Payment.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: AdminDashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
    ],
  },
  {
    path: "/creator",
    redirect: "/creator/dashboard",
    component: Creator,
    children: [
      {
        path: "/creator/dashboard",
        component: CreatorDashboard,
      },
      {
        path: "/creator/my-contents",
        component: CreatorMyContents,
      },
      {
        path: "/creator/earnings",
        component: CreatorEarnings,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
      {
        path: "/auth/forgot",
        component: Forgot,
      },
    ],
  },
  {
    path: "/sponsor",
    redirect: "/sponsor/ads",
    component: Sponsor,
    children: [
      {
        path: "/sponsor/ads",
        component: Ads,
      },
      {
        path: "/sponsor/payment",
        component: Payment,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/contentdetail",
    component: Conentdetail,
  },
  {
    path: "/uploadcontent",
    component: UploadContent,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount("#app");
