<template>
  <div v-if="showModal" class="flex w-full justify-center h-screen z-500 items-center bg-gray-200 antialiased top-0 fixed opacity-25" style="background: #0009;">
    <div class="overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none justify-center items-center w-8/12">
      <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0 relative my-6 mx-auto max-w-sm">
        <div as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <!-- <ExclamationIcon class="h-6 w-6 text-red-600" aria-hidden="true" /> -->
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h1 as="h1" class="text-lg leading-6 font-medium text-gray-900">
                    Publish Advertisment
                  </h1>
                   <div class="mt-2">
                      <span>Budget:</span>
                      <span>$3000</span>
                   </div>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-center bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <router-link
        to="/sponsor/payment"
      >
        
              <button type="button" class="w-4 mx-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" >
                Publish
              </button>
      </router-link>
              <button @click="$emit('close')" type="button" class="mt-3 mx-4 w-4 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"  ref="cancelButtonRef">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

export default {
  name: "AdPreviewModal",
  data() {
    return {
      showModal: this.show,

    }
  },
  props: {
    show: Boolean,
    budget: String,

  }
}
</script>