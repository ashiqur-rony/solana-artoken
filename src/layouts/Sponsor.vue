<template>
  <div>
    <index-navbar/>
           <div class="  py-30">
        <router-view />
    </div>

      
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";

export default {
  name: "sponsor-layout",
  components: {
    IndexNavbar
  }
};
</script>
