<template>
  <div>
    <div class="relative bg-blueGray-100">
      <index-navbar />
      <div class="lg:px-10 md:px-12 py-40 mx-auto w-full">
        <router-view />
      </div>
      <footer-component />
    </div>
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
export default {
  name: "creator-layout",
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
