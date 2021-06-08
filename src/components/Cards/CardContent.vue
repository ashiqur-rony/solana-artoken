<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500 cursor-pointer"
  >
    <img
      alt="..."
      :src="content.nftImg"
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
        {{ content.title }}
      </h4>
      <div class="mt-2">
        <div class="w-full flex justify-between align-items-center">
          <div>
            <p class="text-sm font-light text-white">
              Likes: {{ content.likes }} | Shares: {{ content.shares }}
            </p>
            <p class="text-sm font-light text-white">
              {{ content.created_date }}
            </p>
          </div>
          <div class="flex flex-wrap">
            <a
              href="javascript:void(0);"
              class="bg-emerald-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-3 py-2 mr-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              @click="onEditClicked"
            >
              <i class="fas fa-edit"></i>
            </a>
            <a
              href="javascript:void(0);"
              class="bg-emerald-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-3 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              @click="onDeleteClicked"
            >
              <i class="fas fa-trash"></i>
            </a>
            <warning-modal
              :show="isOpen"
              modal-classes="modal-dialog-centered modal-lg"
            />
          </div>
        </div>
      </div>
    </blockquote>
  </div>
</template>
<script>
import WarningModal from "@/components/Modals/WarningModal";
export default {
  props: ["content"],
  components: { WarningModal },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onEditClicked: function() {
      alert("You cannot modify the content at this point.");
      this.isOpen = true;
    },
    onDeleteClicked: function() {
      alert("You cannot modify the content at this point.");
      this.isOpen = true;
    },
  },
  mounted: function() {},
};
</script>
