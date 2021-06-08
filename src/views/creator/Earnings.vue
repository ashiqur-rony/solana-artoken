<template>
  <div class="container mx-auto">
    <div class="w-full">
      <h1 class="text-blueGray-700 text-xl font-bold">Earnings</h1>
    </div>
    <div class="w-full p-4">
      <div class="flex flex-wrap align-items-center">
        <h3 class="text-md mr-4">
          Current Balance: <span class="text-red-500 font-bold">50.43 ART</span>
        </h3>
        <router-link to="#" v-slot="{ href, navigate }">
          <a
            :href="href"
            @click="navigate"
            class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          >
            Withdraw
          </a>
        </router-link>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full mt-6 xl:mb-0 px-4">
        <card-earnings :earnings="earnings" />
      </div>
    </div>
  </div>
</template>
<script>
import CardEarnings from "@/components/Cards/CardEarnings.vue";
export default {
  name: "creator-earnings",
  data() {
    return {
      earnings: [
        {
          content: {
            title: "Lorem lpsum video",
            url: "#",
          },
          totalEarning: "0.5 ART",
        },
        {
          content: {
            title: "Lorem lpsum video",
            url: "#",
          },
          totalEarning: "3.5 ART",
        },
        {
          content: {
            title: "Lorem lpsum video",
            url: "#",
          },
          totalEarning: "8.5 ART",
        },
      ],
    };
  },
  components: { CardEarnings },
};
</script>
