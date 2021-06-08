<template>
  <div>
    <index-navbar/>
    <main class="profile-page">
      <div class="w-full flex">
        <div class="w-2/12">
          <div class="w-full pl-12 pr-4 mt-32">
            <ul class="w-full text-black font-bold text-right" >
              <li class="p-2 text-pink-400 border-b-2 border-gray-300" @click="clickMenu('1')">
                <a>
                  Profile
                </a>
              </li>
              <li class="p-2" @click="clickMenu('2')">
                <a >
                  Wallet
                </a>
              </li>
              <li class="p-2" @click="clickMenu('3')">
                <a >
                  Earn
                </a>
              </li>
              <li class="p-2" @click="clickMenu('4')">
                <a>
                  Sponsor
                </a>
              </li>
              <li class="p-2" @click="clickMenu('5')">
                <a>
                  My Studio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-10/12">
          <section class="relative block h-500-px">
            <div
              class="absolute top-0 w-full h-full bg-center bg-cover"
              style="
                background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
              "
            >
              <span
                id="blackOverlay"
                class="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style="transform: translateZ(0);"
            >
              <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  class="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section class="relative py-16 bg-blueGray-200">
            <div class="container mx-auto px-4">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
              >
                <div class="px-6">
                  <div class="flex flex-wrap justify-center">
                    <div
                      class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                    >
                      <div class="relative">
                        <img
                          alt="..."
                          :src="team2"
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div
                      class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                    >
                      <div class="py-6 px-3 mt-32 sm:mt-0">
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-1">
                      <div class="flex justify-center py-4 lg:pt-4 pt-8">
                        <div class="mr-4 p-3 text-center">
                          <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                          >
                            22
                          </span>
                          <span class="text-sm text-blueGray-400">Photos</span>
                        </div>
                        <div class="mr-4 p-3 text-center">
                          <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                          >
                            10
                          </span>
                          <span class="text-sm text-blueGray-400">Videos</span>
                        </div>
                        <div class="lg:mr-4 p-3 text-center">
                          <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                          >
                            89
                          </span>
                          <span class="text-sm text-blueGray-400">Followers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- profile -->
                  <div v-if="selectedMenu === '1'" class="mt-12 w-10/12 mx-auto mb-12">
                    <h3
                      class="text-4xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                    >
                      Jenna Stones
                    </h3>
                    <!-- <div
                      class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                    >
                      <i
                        class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                      ></i>
                      Los Angeles, California
                    </div> -->
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <span class="text-xl">Full Name: </span>
                      <span class="text-xl font-bold pl-2">Jenna Stones</span>
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-3">
                      <span class="text-xl">Email: </span>
                      <span class="text-xl font-bold pl-2">jstones@mail.com</span>
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-3 flex">
                      <span class="text-xl">Preference: </span>
                      <div class="text-xl font-bold pl-2">
                        <span class="rounded-lg px-2 border-2 border-blueGray-500 ml-3">Pop</span>
                        <span class="rounded-lg px-2 border-2 border-blueGray-500 ml-3">Art</span>
                        <span class="rounded-lg px-2 border-2 border-blueGray-500 ml-3">Music</span>
                      </div>
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-3">
                      <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Edit Profile
                      </button>
                    </div>
                    <!-- <div class="mb-2 text-blueGray-600">
                      <i
                        class="fas fa-university mr-2 text-lg text-blueGray-400"
                      ></i>
                      University of Computer Science
                    </div> -->
                  </div>
                  <!-- wallet -->
                  <div v-if="selectedMenu === '2'" class=" mt-12 w-10/12 mx-auto mb-12">
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <span class="text-xl">Wallet: </span>
                      <span class="text-xl font-bold pl-2">ABcdesd089sesdjfldsaioajg98s9f09sdfklsj</span>
                      <button class="bg-purple-200 rounded-lg text-lg text-indigo-600 px-2 font-semibold float-right">Unlink</button>
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <span class="text-xl">Bllance: </span>
                      <span class="text-xl font-bold pl-2">300 ART</span>
                      <button class="bg-purple-200 rounded-lg text-lg text-indigo-600 px-2 font-semibold float-right" @click="clickMenu('3')">Earn More</button>
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <div class="w-full mb-2">
                        <span class="text-xl font-bold pl-2">Transactions</span>
                      </div>
                     <div class="w-full mt-5 px-24">
                        <table class="table-fixed w-full border-2 border-gray-300">
                          <thead>
                            <tr>
                              <th class="w-1/4 text-lg font-bold border-2 border-gray-300 p-1">Content</th>
                              <th class="w-1/4 text-lg font-bold border-2 border-gray-300 p-1">Action</th>
                              <th class="w-1/2 text-lg font-bold border-2 border-gray-300 p-1">Signature</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-lg border-2 border-gray-300 p-1">Loren Ipsum video</td>
                              <td class="text-lg border-2 border-gray-300 p-1">Like (-0.002ART)</td>
                              <td class="text-lg border-2 border-gray-300 p-1">slflsdjflskdjflksdjflksdj</td>
                            </tr>
                            <tr>
                              <td class="text-lg border-2 border-gray-300 p-1">Loren Ipsum video</td>
                              <td class="text-lg border-2 border-gray-300 p-1">Like (-0.002ART)</td>
                              <td class="text-lg border-2 border-gray-300 p-1">slflsdjflskdjflksdjflksdj</td>
                            </tr>
                          </tbody>
                        </table>
                        <span class="text-lg ">10 rows of transactions like this</span>
                     </div>
                     <div class="w-full mt-5 px-24">
                       <a class="float-right"><span class="text-indigo-600 underline text-lg">View all transactions</span></a>
                     </div>
                    </div>
                  </div>
                  <!-- Earn -->
                  <div v-if="selectedMenu === '3'" class=" mt-12 w-10/12 mx-auto mt-8 mb-12">
                    <div class="w-full flex flex-wrap">
                      <div class="w-1/4 text-center" v-for="index in 12" :key="index">
                        <div class="h-200-px w-200-px rouned-lg border-2 border-gray-300 mx-auto">
                          <img class="max-h-full max-w-full w-full h-full" src="https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288" alt="">
                        </div>
                        <span class="font-bold">30s Video</span>
                        <br>
                        <span class="font-bold">+0.5 ART</span>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-9/12 px-4">
                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                          An artist of considerable range, Jenna the name taken by
                          Melbourne-raised, Brooklyn-based Nick Murphy writes,
                          performs and records all of his own music, giving it a
                          warm, intimate feel with a solid groove structure. An
                          artist of considerable range.
                        </p>
                        <a
                          href="javascript:void(0)"
                          class="font-normal text-emerald-500"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </main>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import team2 from "@/assets/img/user4.png";

export default {
  data() {
    return {
      team2,
      selectedMenu: '1',
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
  methods: {
    clickMenu: function(menuNum){
      switch (menuNum) {
        case '4':
          this.$router.push('/sponsor/ads')
          break;
        case '5':
          this.$router.push('/creator/my-contents')
          break;
        default:
          this.selectedMenu = menuNum;
          break;
      }
    }
  }
};
</script>
