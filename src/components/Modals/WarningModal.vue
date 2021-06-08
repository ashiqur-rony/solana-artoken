<template>
  <div
    v-if="showModal"
    class="flex w-full justify-center h-screen z-500 items-center bg-gray-200 antialiased top-0 fixed opacity-25"
    style="background: #0009;"
  >
    <div
      class="overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none justify-center items-center w-6/12"
    >
      <div class="relative my-6 mx-auto max-w-sm">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="relative p-6 flex-auto">
            <div class="flex w-full">
              You cannot modify the content at this point.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "warning-modal",
  data() {
    return {
      showModal: this.show,
    };
  },
  props: {
    show: Boolean,
  },
};
</script>
