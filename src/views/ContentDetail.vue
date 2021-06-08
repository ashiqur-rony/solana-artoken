<template>
  <div>
    <index-navbar />
    <section class="relative" style="padding-top: 10rem">
      <div class="container mx-auto">
        <div class="flex w-full">
          <div class="w-4/12 md:w-4/12 lg:w-4/12 sm:w-full">
              <div class="w-full h-450-px relative border-solid rounded-lg border-gray-600 border shadow-lg">
                <img class="w-full h-full" src="https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288" alt="">
                <div
                  class="absolute top-0 w-full h-full bg-black-100 text-20 flex items-center justify-center"
                  @click="viewBtn()"
                >
                  <i class="far fa-play-circle" ></i>
                </div>
              </div>
              
              <div class="w-full py-1">
                <span class="block uppercase text-blueGray-600 text-lg font-bold">
                  File Type : MP3
                </span> 
              </div>
              <div class="w-full py-1">
                <span class="block uppercase text-blueGray-600 text-lg font-bold">
                  Preview
                </span> 
              </div>
              <div class="w-full py-1">
                <span class="block uppercase text-blueGray-600 text-lg font-bold">
                  Views: 2000
                </span> 
              </div>
              <div class="w-full py-1">
                <span class="block uppercase text-blueGray-600 text-lg font-bold">
                  Likes: 23
                </span> 
              </div>
              <div class="w-full flex py-2 justify-between">
                <div class="flex items-center">
                  <img class="rounded-full mr-8" src="https://bulma.io/images/placeholders/96x96.png" alt=""
                    width="60" height="60"
                  >
                  <span class="mx-12 px-3 text-lg font-bold">Jahn Smith</span>
                </div>
                <div class="flex">
                  <button class="bg-lightBlue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                    follow
                  </button>
                </div>
              </div>
          </div>
          <div class="w-8/12 md:w-8/12 lg:w-8/12 sm:w-full px-12">
            <div class="w-full mb-5">
              <h1 class="text-5xl font-bold mb-6">Great for your awesome project</h1>
              <p class="text-xl">Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.</p>
            </div>
            <div class="w-full flex items-center">
              <span class="block uppercase text-blueGray-600 text-lg font-bold">Rating : </span>
              <div class="rating_box px-6">
                <input type="radio" id="rating1" class="raging" name="rating" value="1" @click="rating(1)">
                <label ref="rating1" title="Poor" class="fa fa-star" for="rating1" @click="rating(1)"></label>

                <input type="radio" id="rating2" class="raging" name="rating" value="2" @click="rating(2)">
                <label ref="rating2" title="Average" class="fa fa-star" for="rating2" @click="rating(2)"></label>


                <input type="radio" id="rating3" class="raging" name="rating" value="3" @click="rating(3)">
                <label ref="rating3" title="Average" class="fa fa-star" for="rating3" @click="rating(3)"></label>


                <input type="radio" id="rating4" class="raging" name="rating" value="4" @click="rating(4)">
                <label ref="rating4" title="Good" class="fa fa-star" for="rating4" @click="rating(4)"></label>


                <input type="radio" id="rating5" class="raging" name="rating" value="5" @click="rating(5)">
                <label ref="rating5" title="Awesome" class="fa fa-star" for="rating5" @click="rating(5)"></label>
              </div>
              <div class="flex ">
                <button ref="likeable" class="bg-lightBlue-400 rounded-lg p-2" :disabled="liked" @click="likeBtn">
                  <i class="far fa-thumbs-up"></i>
                  <span class="ml-2 font-bold">Like (0.001 ART)</span>
                </button>
                <button ref="shareable" class="bg-lightBlue-400 rounded-lg p-2 ml-2" :disabled="shared" @click="shareBtn">
                  <i class="fas fa-share-alt"></i>
                  <span class="ml-2 font-bold">Share (0.003 ART)</span>
                </button>
              </div>
            </div>
            <div class="w-full flex pt-6">
              <span class="block uppercase text-blueGray-600 text-lg font-bold">Revenues</span>
              <span class="block uppercase text-blueGray-600 text-lg font-bold px-6">2023 Artoken</span>
            </div>
            <div class="w-full flex pt-6">
              <span class="block uppercase text-blueGray-600 text-lg font-bold">value</span>
              <span class="block uppercase text-blueGray-600 text-lg font-bold px-6">300 USD</span>
            </div>
            <div class="w-full flex pt-6 relative">
              <span class="block uppercase text-blueGray-600 text-lg font-bold">Share Value</span>
              <span class="block uppercase text-blueGray-600 text-lg font-bold px-6">30 USDT per NFTShare demo token</span>
              <button class="bg-teal-500 absolute right-0 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Buy on DEX
              </button>
            </div>
            <div class="w-full flex pt-6">
              <span class="block uppercase text-blueGray-600 text-lg font-bold">Comments</span>
            </div>   
            <div class="w-full flex p-4 mt-4 rounded-lg" style="border: 1px solid #b7b5b5;">
              <div class="w-full flex">
                <div class="block uppercase text-blueGray-600 text-lg font-bold px-3">Boly dylan</div>
                <div class="block uppercase text-blueGray-600 text-md px-3">Greate song and amazing gig!</div>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </section>
    <Playermodal
      ref="playmodal"
      :show="openplayer"
      mediaType="Image"
      mediaLink="working"
      mediaPrice='500'
    />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import Playermodal from "@/components/Modals/Playermodal.vue";
export default {
  components: {
    IndexNavbar,
    Playermodal,
  },
  data() {
    return {
      liked: false,
      shared: false,
      openplayer: false,
    }
  },
  methods: {
    rating(star){
      switch (star) {
        case 1:
          this.$refs.rating1.style.color = "orange"
          this.$refs.rating2.style.color = "#9e9e9e"
          this.$refs.rating3.style.color = "#9e9e9e"
          this.$refs.rating4.style.color = "#9e9e9e"
          this.$refs.rating5.style.color = "#9e9e9e"
          break;
        case 2:
          this.$refs.rating1.style.color = "orange"
          this.$refs.rating2.style.color = "orange"
          this.$refs.rating3.style.color = "#9e9e9e"
          this.$refs.rating4.style.color = "#9e9e9e"
          this.$refs.rating5.style.color = "#9e9e9e"
          break;
        case 3:
          this.$refs.rating1.style.color = "orange"
          this.$refs.rating2.style.color = "orange"
          this.$refs.rating3.style.color = "orange"
          this.$refs.rating4.style.color = "#9e9e9e"
          this.$refs.rating5.style.color = "#9e9e9e"
          break;
        case 4:
          this.$refs.rating1.style.color = "orange"
          this.$refs.rating2.style.color = "orange"
          this.$refs.rating3.style.color = "orange"
          this.$refs.rating4.style.color = "orange"
          this.$refs.rating5.style.color = "#9e9e9e"
          break;
        case 5:
          this.$refs.rating1.style.color = "orange"
          this.$refs.rating2.style.color = "orange"
          this.$refs.rating3.style.color = "orange"
          this.$refs.rating4.style.color = "orange"
          this.$refs.rating5.style.color = "orange"
          break;
      
        default:
          break;
      }
    },
    likeBtn(){
      if(!this.liked){
        this.liked = true
        this.$refs.likeable.classList.remove('bg-lightBlue-400')
        this.$refs.likeable.classList.add('bg-lightBlue-200')
      }
    },
    shareBtn() {
      if(!this.shared){
        this.shared = true
        this.$refs.shareable.classList.remove('bg-lightBlue-400')
        this.$refs.shareable.classList.add('bg-lightBlue-200')
      }
    },
    viewBtn() {
      this.$refs.playmodal.showModal()
    }
  }
}
</script>
<style>
.rating{
display: flex;
color: #9e9e9e;
font-size: 30px;
}
.raging[type=radio]{
display: none;
}
.rating_box label{
margin:0 5px;
}
.rating_box label:hover{
color: orange;
}
[type="submit"]{
border: 2px solid black;
background-color: white;
color: black;
padding: 5px ;
margin-left: 15px;
}
</style>