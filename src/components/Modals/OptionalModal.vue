<template>
  <div v-if="showModal" class="flex w-full justify-center h-screen z-500 items-center bg-gray-200 antialiased top-0 fixed opacity-25" style="background: #0009;">
    <div class="overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none justify-center items-center w-6/12">
      <div class="relative my-6 mx-auto max-w-sm">
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div class="relative p-6 flex-auto">
            <div class="flex w-full">
              <div class="w-10/12 md:w-4/12 lg:w-4/12">
                <div class="w-full shadow-lg rounded-lg">
                  <img
                    alt="image"
                    :src="option1"
                    class="w-full align-middle rounded-t-lg"
                    />
                </div>
              </div>
              <div class="w-10/12 md:w-4/12 lg:w-4/12">
                <div class="w-full shadow-lg rounded-lg">
                  <img
                    alt="image"
                    :src="option2"
                    class="w-full align-middle rounded-t-lg"
                    />
                </div>
              </div>
              <div class="w-10/12 md:w-4/12 lg:w-4/12">
                <div class="w-full shadow-lg rounded-lg">
                  <img
                    alt="image"
                    :src="option3"
                    class="w-full align-middle rounded-t-lg"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import option1 from '@/assets/img/option1.jpg'
import option2 from '@/assets/img/option2.jpg'
import option3 from '@/assets/img/option3.jpg'
export default {
  name: "OptionalModal",
  data() {
    return {
      showModal: this.show,
      option1,
      option2,
      option3,
    }
  },
  props: {
    show: Boolean
  }
}
</script>