<template>
  <div class="container mx-auto">
    <div class="w-full">
      <h1 class="text-blueGray-700 text-xl font-bold">My Contents</h1>
    </div>

    <div class="w-full p-4">
      <div class="flex flex-wrap justify-content-end">
        <div class="w-full text-right lg:self-center">
          <router-link to="/creator/earnings" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="navigate"
              class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            >
              My Earnings
            </a>
          </router-link>
          &nbsp;
          <router-link to="/uploadcontent" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="navigate"
              class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            >
              Create New
            </a>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full">
      <contents-with-pagination :perPage="6" :items="myContents" />
    </div>
  </div>
</template>
<script>
import ContentsWithPagination from "@/views/creator/ContentsWithPagination.vue";
export default {
  name: "creator-my-contents",
  data() {
    return {
      nftDatas: [
        {
          id: 0,
          nftImg:
            "https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Axim Smith",
          alternet: "@Axim Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 1,
          nftImg:
            "https://lh3.googleusercontent.com/TV5hSXkmQYwyEDrP2ZP5Vmp75Tl5o8xTzTPR_dqLNd-SXkqi0m_7PvpCsJ9wEJeHcHbYl5IuQ1gfhJ9HUm9UQeOA3QHceXSQXYxXo3U=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Jahn Smith",
          alternet: "@jahn Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 2,
          nftImg:
            "https://lh3.googleusercontent.com/Ffhf9Y5d7miWKPr929KqlFZW4EyI8cKF4cF5e7KUloNDilVPpO5Qjb_xPqLkwl3ug2ugPn2KvSknObgoX9_BowbFVB6eU89VhyJ_=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Yelena Smith",
          alternet: "@Yelena Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 3,
          nftImg:
            "https://lh3.googleusercontent.com/Ffhf9Y5d7miWKPr929KqlFZW4EyI8cKF4cF5e7KUloNDilVPpO5Qjb_xPqLkwl3ug2ugPn2KvSknObgoX9_BowbFVB6eU89VhyJ_=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Olga Smith",
          alternet: "@Olga Smith",
          nftType: "Music",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 4,
          nftImg:
            "https://lh3.googleusercontent.com/iSy2loMkenj-FQe5bxHaHVpIgbyYR-ie5c8y38zzrkZs8_deG5UubaynOePYtLv2Kl82gLrn7uaPEM14u2u7t8bG0RJqUkHVZj2V=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Anna Smith",
          alternet: "@Anna Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 5,
          nftImg:
            "https://lh3.googleusercontent.com/139NcWLXFcG-nr8sm0-1rOvrdhkRKcyoVEnKsq26at9RcaN8vsy22dKN5aclNOO-mtoLKVo3YLTM2QpBUrSqQWXMUDVJC7WVHko9=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Jahn Smith",
          alternet: "@jahn Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 6,
          nftImg:
            "https://lh3.googleusercontent.com/iH_rF7E34uRkiP6hhpdI-Bm02gmclt16Svb7VXLfvv8wbHpjuhGJbtjdzhXJE85uoY230eV92OlvzTBN0rIZHMdG4_f9AQVaVxJh=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Jahn Smith",
          alternet: "@jahn Smith",
          nftType: "Music",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 7,
          nftImg:
            "https://lh3.googleusercontent.com/Xb2-6qu3W6EMaDaglNHXhmYcxEccfYbCnUogzAdWZpc7w4JOHSUbnk8AMNyWE6SekIJhF4zHgxdVI9VI_tIhvaKspIs289K8iTbKyQ=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Jahn Smith",
          alternet: "@jahn Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
        {
          id: 8,
          nftImg:
            "https://lh3.googleusercontent.com/EIEoC0ZNdULtqfYKI9dBCK9MM5EJ7evpC0lXWDhkwXgRgmO7V1UX2ppf8rfwX8lsiZ55omoY0K3swoAW84skvhP6AqQtMP9GYMMQCg=s288",
          userAvata: "https://bulma.io/images/placeholders/96x96.png",
          name: "Aahn Smith",
          alternet: "@Aahn Smith",
          nftType: "Article",
          title: "Great for your awesome project",
          detail:
            "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.",
          price: "$44.5",
          likes: 123,
          shares: 24,
          created_date: "03 June 2021",
        },
      ],
      myContents: [],
    };
  },
  components: { ContentsWithPagination },
  mounted() {
    this.myContents = this.nftDatas;
  },
};
</script>
