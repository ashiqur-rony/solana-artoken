<template>
  <div>
    <index-navbar/>
    <section class="relative" style="padding: 8rem">
      <div class="container mx-auto">
        <div class="w-full mb-8">
          <h1 class="text-5xl font-bold text-left">Create a new NFT</h1>
        </div>
        <div class="flex">
          <div class="w-4/12">
            <div class="w-full p-3">
              <div
                class="w-300-px h-200-px flex border border-blueGray-500 bg-lightBlue-200 text-center font-bold text-xl items-center justify-center"
                @dragover="dragover"
                @dragleave="dragleave"
                @drop="Coverdrop"
              >
                <img ref="coverImge" v-if="coverfileable" alt="">
                <span v-else>Cover Image Preview <br> Upload/Drop<br>
                (.png, .jpg, .gif, .svg)</span>
                <input
                  type="file"
                  ref="coverfile"
                  class="hidden"
                  name="coverfile"
                  @change="onCoverchange()"
                  accept=".pdf, jpg, .jpeg, .png"
                  >
              </div>
              <button class="w-full bg-lightBlue-500 rounded-lg mt-3 p-3 font-bold text-white" @click="onCoverClick">Upload Cover Image</button>
            </div>
            <div class="w-full p-3 mt-6">
              <div
                class="w-300-px h-200-px flex border border-blueGray-500 bg-lightBlue-200 text-center font-bold text-xl items-center justify-center"
                @dragover="dragover"
                @dragleave="dragleave"
                @drop="Contentdrop"
              >
                <img ref="contentImge" class="max-w-full max-h-full" v-if="contentfileable" alt="">
                <span v-else>Content Image Preview <br> Upload/Drop<br>
                ({{uploadTypestr}})</span>
                <input
                  type="file"
                  ref="contentfile"
                  class="hidden"
                  name="contentfile"
                  @change="onContentchange()"
                  :accept="uploadTypestr"
                  >
              </div>
              <button class="w-full bg-lightBlue-500 rounded-lg mt-3 p-3 font-bold text-white"  @click="onContentClick">Upload Content Image</button>
            </div>
          </div>
          <div class="w-8/12 w-full pl-12">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xl font-bold mb-2"
              >
                Content Title
              </label>
              <input
                type="text"
                v-model="uploadContent.title"
                class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-lg text-sm shadow focus:outline-none focus:ring w-6/12 ease-linear transition-all duration-150"
                placeholder="Content Title"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xl font-bold mb-2"
              >
                NFT Token Name
              </label>
              <input
                type="text"
                v-model="uploadContent.tokenname"
                class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-lg text-sm shadow focus:outline-none focus:ring w-6/12 ease-linear transition-all duration-150"
                placeholder="Content Title"
              />
            </div>
            <div class="relative w-full mb-3">
              <textarea v-model="uploadContent.desciption" class="w-full rounded-lg" placeholder="Description"></textarea>
            </div>
            <div class="relative w-full flex mb-3">
              <div class="md:w-4/12 pr-4">
                <label class="text-blueGray-600 text-xl font-bold mb-2">Content type</label>
                <select class="w-full rounded-lg" v-model="uploadContent.contentType" @change="typeChanged">
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                  <option value="Audio">Audio</option>
                </select>
              </div>
              <div class="md:w-8/12">
                <label class="text-blueGray-600 text-xl font-bold mb-2">Category</label>
                <input type="text" v-model="uploadContent.category" class="w-full rounded-lg" name="categories" placeholder="Categories">
              </div>
            </div>
            <div class="relative w-full flex mb-3">
              <label class="flex items-center">
                <span class="text-xl font-bold">Sell Shares</span>
                <input type="radio" class="ml-2 h-8 w-8" v-model="uploadContent.sellNFTable"  name="sellType" value="false">
              </label>
              <label class="flex items-center ml-5">
                <span class="text-xl font-bold">Sell NFT</span>
                <input type="radio" class="ml-2 h-8 w-8" v-model="uploadContent.sellNFTable" name="sellType" value="true">
              </label>
            </div>
            <div class="relative w-full mb-3">
              <h4 class="text-xl font-bold">Shares available to Sell</h4>
              <div class="flex w-full items-center justify-around pt-2">
                <span>0%</span>
                <input v-model="uploadContent.sellableval" type="range" class="w-10/12" min="0" max="100" >
                <span>100% </span>
                <span class="font-bold ml-2">Now</span>
                <span>: {{uploadContent.sellableval}}%</span>
              </div>
            </div>
            <div class="relative w-full flex mb-3">
              <div class="w-6/12 pr-2">
                <input type="text" v-model="uploadContent.shareToken" class="w-full rounded-lg" name="shareTokenName" placeholder="Share Token Name">
              </div>
            </div>
            <div class="relative w-full flex">
              <label class="flex items-center pr-4">
                <input type="text" v-model="uploadContent.amount"  class="rounded-lg" placeholder="Token amount">
                <span class="pl-2 text-xl font-bold">/10'000</span>
              </label>
              <label class="flex items-center">
                <input type="text" v-model="uploadContent.priceUSDT" class="rounded-lg" placeholder="Price In">
                <span class="pl-2 text-xl font-bold">/ 5.5 USDT</span>
              </label>
            </div>
            <div class="relative w-full flex mb-3 pt-2">
              <div class="w-6/12">
                <div class="w-full flex justify-between items-center mt-2">
                  <span class="text-xl font-bold">List on Serum DEX?</span>
                  <div class="flex">
                    <label class="flex items-center ml-5">
                      <span class="text-xl font-semibold">Y</span>
                      <input type="radio" class="ml-2 h-8 w-8" v-model="uploadContent.dexable" name="dexlisted" value="true">
                    </label>
                    <label class="flex items-center ml-5">
                      <span class="text-xl font-semibold">N</span>
                      <input type="radio" class="ml-2 h-8 w-8" v-model="uploadContent.dexable" name="dexlisted" value="false">
                    </label>
                  </div>
                </div>
                <div class="w-full flex  justify-between items-center mt-2">
                  <span class="text-xl font-bold">Pay per view?</span>
                  <div class="flex">
                    <label class="flex items-center ml-5">
                      <span class="text-xl font-semibold">Y</span>
                      <input type="radio" class="ml-2 h-8 w-8" v-model="uploadContent.payviewable" name="payperview" value="true">
                    </label>
                    <label class="flex items-center ml-5">
                      <span class="text-xl font-semibold">N</span>
                      <input type="radio" class="ml-2 h-8 w-8" v-model="uploadContent.payviewable" name="payperview" value="false">
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-6/12 py-3 px-4 flex items-end justify-end">
                <input type="button" value="Create NFT" class="bg-lightBlue-500 font-bold rounded-lg p-3 float-right">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component/>
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
export default {
  components: {
    IndexNavbar,
    FooterComponent,
  },
  data() {
    return {
      coverfiles: [],
      contentfiles: [],
      coverfileable: false,
      contentfileable: false,
      uploadTypestr: '.png, .jpg, .gif, .svg',
      uploadContent: {
        title: '',
        tokenname: '',
        desciption: '',
        contentType: 'Image',
        category: '',
        sellNFTable: false,
        sellableval: '50',
        shareToken: '',
        amount: '',
        priceUSDT: '',
        dexable: '',
        payviewable: '',
      }
      // coveredImg
    }
  },
  methods: {
    dragover(event){
      event.preventDefault();
      event.currentTarget.classList.remove('bg-lightBlue-200')
      event.currentTarget.classList.add('bg-teal-200')
    },
    dragleave(event){
      event.preventDefault();
      event.currentTarget.classList.remove('bg-teal-200')
      event.currentTarget.classList.add('bg-lightBlue-200')
    },
    Coverdrop(event){
      event.preventDefault();
      this.$refs.coverfile.files = event.dataTransfer.files
      this.onCoverchange()
      console.log(event)
    },
    onCoverchange(){
      let self = this
      this.coverfiles = this.$refs.coverfile.files
      console.log(this.coverfiles)
      this.coverfileable = true
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result
        self.coverfileable = true
        self.$refs.coverImge.src = uril
      }
      reader.readAsDataURL(this.coverfiles[0])
    },
    onCoverClick(){
      this.$refs.coverfile.click()
    },
    Contentdrop(event){
      event.preventDefault();
      this.$refs.contentfile.files = event.dataTransfer.files
      this.onContentchange()
    },
    onContentchange(){
      let self = this
      this.contentfiles = this.$refs.contentfile.files
      this.contentfileable = true
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result
        self.contentfileable = true
        self.$refs.contentImge.src = uril
      }
      reader.readAsDataURL(this.contentfiles[0])
    },
    onContentClick() {
      this.$refs.contentfile.click()
    },
    typeChanged() {
      switch (this.uploadContent.contentType) {
        case 'Image':
          this.uploadTypestr = '.png, .jpg, .gif, .svg'
          break;
        case 'Video':
          this.uploadTypestr = '.avi, .mov, .mp4, .mpg'
          break;
        case 'Audio':
          this.uploadTypestr = '.mp3, .mid, .wav, .ogg'
          break;
        default:
          break;
      }
    }
  }
}
</script>
