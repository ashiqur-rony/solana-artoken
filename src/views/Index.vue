<template>
  <div>
    <index-navbar />
    <section class="relative" style="padding-top: 10rem;">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-6/12 sm:w-full mx-auto">
            <div class="pt-2 w-full relative mx-auto text-gray-600">
              <input
                class="border-2 border-gray-300 bg-white h-10 px-5 w-full pr-16 rounded-lg text-sm focus:outline-none"
                v-model="searchVal"
                type="search"
                name="search"
                placeholder="Search"
              />
              <div class="absolute right-0 top-0 mt-4 mr-4">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background:new 0 0 56.966 56.966;"
                  xml:space="preserve"
                  width="25px"
                  height="25px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-10/12 md:w-6/12 lg:w-6/12 sm:w-full mx-auto">
            <div class="flex pt-2 px-4">
              <div class="w-full md:w-full lg:w-full sm:w-full">
                <div class="flex flex-wrap w-full h-full justify-center items-center">
                  <div class="flex mx-auto">
                    <select v-model="filterval" class=" rounded-lg ">
                      <option value="All">Filter</option>
                      <option value="Article">Article</option>
                      <option value="Music">Music</option>
                    </select>
                  </div>
                  <div class="flex mx-auto">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        v-model="trendingSort"
                        class="form-checkbox"
                      />
                      <span class="ml-2">Trending</span>
                    </label>
                  </div>
                  <div class="flex mx-auto">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        v-model="recentSort"
                        class="form-checkbox"
                      />
                      <span class="ml-2">Recent</span>
                    </label>
                  </div>
                  <div class="flex mx-auto">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        v-model="likedSort"
                        class="form-checkbox"
                      />
                      <span class="ml-2">Most Liked</span>
                    </label>
                  </div>
                  <div class="flex mx-auto">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        v-model="SharedSort"
                        class="form-checkbox"
                      />
                      <span class="ml-2">Most Shared</span>
                    </label>
                  </div>
                  <div class="flex mx-auto">
                    <button
                      class="bg-blueGray-600 text-white hover:bg-blue-400 font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                      @click="nftSearch()"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-40 relative bg-blueGray-100" style="margin-top: 5em;">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center" v-if="liveDatas.length > 0">
          <div
            v-for="(nftItem, intexkey) in liveDatas"
            :key="intexkey"
            class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto"
            @click="clickNft"
          >
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500 cursor-pointer"
            >
              <img
                alt="..."
                :src="nftItem.nftImg"
                class="w-full h-28 max-h-28 align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  {{ nftItem.title }}
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  {{ nftItem.detail }}
                </p>
              </blockquote>
            </div>
          </div>
          <!-- <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/TV5hSXkmQYwyEDrP2ZP5Vmp75Tl5o8xTzTPR_dqLNd-SXkqi0m_7PvpCsJ9wEJeHcHbYl5IuQ1gfhJ9HUm9UQeOA3QHceXSQXYxXo3U=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/Ffhf9Y5d7miWKPr929KqlFZW4EyI8cKF4cF5e7KUloNDilVPpO5Qjb_xPqLkwl3ug2ugPn2KvSknObgoX9_BowbFVB6eU89VhyJ_=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div> -->
        </div>
        <div class="flex flex-wrap items-center" v-else>
          <div class="w-full">
            <h2 class="text-center text-3xl">
              Oops! Couldn't find anything for the search.
            </h2>
          </div>
        </div>
      </div>

      <!-- <div class="container mx-auto mt-48">
        <div class="flex flex-wrap items-center">
          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/iSy2loMkenj-FQe5bxHaHVpIgbyYR-ie5c8y38zzrkZs8_deG5UubaynOePYtLv2Kl82gLrn7uaPEM14u2u7t8bG0RJqUkHVZj2V=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/t0WfHQil3DfcP0gY9vs-1W2TDxRSHz4LPxXC3cDs899othEGV2EA-VajZFgaHe6WWPWRO4JohFG5UXT5NL4zgZSOEf92fCcw0frd=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/139NcWLXFcG-nr8sm0-1rOvrdhkRKcyoVEnKsq26at9RcaN8vsy22dKN5aclNOO-mtoLKVo3YLTM2QpBUrSqQWXMUDVJC7WVHko9=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-48">
        <div class="flex flex-wrap items-center">
          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/iH_rF7E34uRkiP6hhpdI-Bm02gmclt16Svb7VXLfvv8wbHpjuhGJbtjdzhXJE85uoY230eV92OlvzTBN0rIZHMdG4_f9AQVaVxJh=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/Xb2-6qu3W6EMaDaglNHXhmYcxEccfYbCnUogzAdWZpc7w4JOHSUbnk8AMNyWE6SekIJhF4zHgxdVI9VI_tIhvaKspIs289K8iTbKyQ=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/EIEoC0ZNdULtqfYKI9dBCK9MM5EJ7evpC0lXWDhkwXgRgmO7V1UX2ppf8rfwX8lsiZ55omoY0K3swoAW84skvhP6AqQtMP9GYMMQCg=s288"
                  class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div> -->
    </section>
    <footer-component />
    <Videomodal
      :show="firstVideo"
      v-if="invited"
      modal-classes="modal-dialog-centered modal-lg"
    >
    </Videomodal>
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import Videomodal from "@/components/Modals/Videomodal.vue";

import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      invited: false,
      firstVideo: true,
      optionview: true,
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
      searchVal: "",
      filterval: "All",
      trendingSort: false,
      recentSort: false,
      likedSort: false,
      SharedSort: false,
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
        },
      ],
      liveDatas: [],
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
    Videomodal,
  },
  mounted() {
    this.liveDatas = this.nftDatas;
    if (localStorage.getItem("invited") === "yes") {
      console.log("sdsd");
      this.invited = false;
    } else {
      this.invited = true;
      localStorage.setItem("invited", "yes");
    }
  },
  methods: {
    nftSearch() {
      if (this.searchVal !== "") {
        this.liveDatas = this.nftDatas.filter((item) => {
          if (this.searchVal.includes("@")) {
            if (item.alternet.includes(this.searchVal)) {
              return item;
            }
          } else {
            console.log("first");
            if (item.name.includes(this.searchVal)) {
              console.log(item);
              return item;
            }
          }
        });
      }
      if (this.filterval !== "All") {
        this.liveDatas = this.liveDatas.filter((item) => {
          if (item.nftType === this.filterval) {
            return item;
          }
        });
      }
      if (
        this.trendingSort ||
        this.recentSort ||
        this.likedSort ||
        this.SharedSort
      ) {
        this.liveDatas.sort((a, b) => {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    },
    clickNft() {
      this.$router.push("/contentdetail");
    },
  },
};
</script>
