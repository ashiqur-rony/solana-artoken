<template>
<div>
  <ad-form></ad-form>
  <footer-component />
</div>
</template>

<script>
import AdForm from "@/components/AdForm/AdForm.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

export default {

  components:{
      AdForm,
      FooterComponent
    }
}
</script>
