<template>
  <div v-if="showModal" class="flex w-full justify-center h-screen z-500 items-center bg-gray-200 antialiased top-0 fixed opacity-25 z-99" style="background: #0009;">
    <div class="overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none justify-center items-center w-10/12 md:w-6/12 lg:w-6/12">
      <div class="relative my-6 mx-auto max-w-sm">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl">
              Intro to our application
            </h3>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <video
            v-if="videoable"
            :src="videolink"
            controls
            autoplay
            class="w-full"
            @ended="disableVideo()"
            height="500"></video>
            <div class="flex w-full flex-wrap p-5" v-else>
              <div class="w-1/2 md:w-4/12 lg:w-4/12 sm:w-10/12 p-5 mx-auto">
                <div class="w-full shadow-lg rounded-lg p-3" @click="redirectLogin()">
                  <img
                    alt="image"
                    :src="option1"
                    class="w-full align-middle rounded-t-lg"
                    />
                    <h4 class="text-xl text-center font-semibold">Solana Artoken App</h4>
                </div>
              </div>
              <div class="w-1/2 md:w-4/12 lg:w-4/12 sm:w-10/12 p-5 mx-auto">
                <div class="w-full shadow-lg rounded-lg p-3" @click="redirectLogin()">
                  <img
                    alt="image"
                    :src="option2"
                    class="w-full align-middle rounded-t-lg "
                    />
                    <h4 class="text-xl text-center font-semibold">Solana Music Player</h4>
                </div>
              </div>
              <div class="w-1/2 md:w-4/12 lg:w-4/12 sm:w-10/12 p-5 mx-auto">
                <div class="w-full shadow-lg rounded-lg p-3" @click="redirectLogin()">
                  <img
                    alt="image"
                    :src="option3"
                    class="w-full align-middle rounded-t-lg"
                    />
                    <h4 class="text-xl text-center font-semibold">Solana Video Player</h4>
                </div>
              </div>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              v-if="videoable"
              class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="disableVideo()">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import option1 from '@/assets/img/artoken-icon.png'
import option2 from '@/assets/img/music-player.png'
import option3 from '@/assets/img/video-player.png'
import videolink from '@/assets/video/first.mp4'
export default {
  name: "Videomodal",
  data() {
    return {
      videoable: true,
      showModal: this.show,
      videolink,
      option1,
      option2,
      option3,
    }
  },
  props: {
    show: Boolean,
  },
  methods: {
    disableVideo: function(){
      this.videoable = false
    },
    toggleModal: function(){
      this.showModal = false;
    },
    redirectLogin: function(){
      this.$router.push("auth")
    }
  }
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
