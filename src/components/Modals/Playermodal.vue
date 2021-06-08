<template>
  <div>
    <div v-if="modalViewable" class="flex w-full justify-center h-screen z-500 items-center bg-gray-200 antialiased top-0 fixed opacity-25 z-99" style="background: #0009;">
      <div class="overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none justify-center items-center w-6/12">
        <div class="relative my-6 mx-auto max-w-sm">
          <!-- content -->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!-- header -->
            <div class="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Playing the media will cost {{price}} Artoken
            </h3>
          </div>
            <!-- boddy -->
            <div v-if="type === 'Video'" class="relative w-full h-50-vh p-6 flex-auto bg-black flex items-center justify-center">
              <video
                v-if="paid"
                ref="videoEle"
                class="w-full h-50-vh"
                :src="videolink"
                controls
              >
              </video>
            </div>
            <div v-if="type === 'Image'" class="relative w-full h-50-vh p-6 flex-auto bg-black flex items-center justify-center">
              <img v-if="paid && played" class="h-full max-h-full" src="https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288" alt="">
            </div>
            <div v-if="type === 'Audio'" class="relative w-full h-50-vh p-6 flex-auto bg-black items-center justify-center flex items-center justify-center">
              <audio v-if="paid" ref="audioEle" :src="audiolink"></audio>
              <!-- <img v-if="paid" class="h-full max-h-full" src="https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288" alt=""> -->
            </div>
            
            <!-- footer -->
            <div class="flex items-center justify-between p-5 border-t border-solid border-blueGray-200 rounded-b">
              <button
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                @click="hideModal"
              >
                Cancel
              </button>
              <button
                v-if="played"
                @click="pauseBtn"
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Pause
              </button>
              <button
                v-else
                @click="playBtn"
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="alertOpen" class="absolute text-white t-0 px-6 py-4 border-0 rounded mb-4 bg-red-400 z-99">
        <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell"></i>
        </span>
        <span class="inline-block align-middle mr-8">
        <b class="capitalize">Altert!</b> You don’t have enough token
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import videolink from '@/assets/video/first.mp4'
import audiolink from '@/assets/video/testAudio.mp3'

export default {
  data() {
    return {
      videolink,
      audiolink,
      played: false,
      modalViewable: this.show,
      paid: false,
      type: this.mediaType,
      link: this.mediaLink,
      price: this.mediaPrice,
      alertOpen: false,
    }
  },
  props: {
    show: Boolean,
    mediaType: String,
    mediaLink: String,
    mediaPrice: Number,
  },
  mounted() {
    console.log(this.type + "-p-" + this.link +"-p-"+ this.price)
    if(this.price > 3000){
      this.paid = false;
    }else{
       this.paid = true;
    }
  },
  methods: {
    playBtn() {
      if(this.price > 3000){
        this.alertOpen = true;
        setTimeout(this.requirePay, 2000)
      }else{
        switch (this.type) {
          case 'Video':
            this.played = true;
            this.$refs.videoEle.play();    
            break;
          case 'Audio':
            this.played = true;
            this.$refs.audioEle.play();    
            break;
          case 'Image':
            this.played = true;
            break;
          default:
            break;
        }
      }
    },
    requirePay () {
      console.log('wowow')
      this.$router.push('/creator/earnings')
    },
    pauseBtn() {
      switch (this.type) {
        case 'Video':
          this.played = false;
          this.$refs.videoEle.pause();
          break;
        case 'Audio':
          this.played = false;
          this.$refs.audioEle.pause();
          break;
        default:
          break;
      }
    },
    showModal: function(){
      this.modalViewable = true;
    },
    hideModal: function(){
      this.modalViewable = false
    }
  }
}
</script>