<template>
  <div class="w-full">
    <div class="flex flex-wrap items-center" v-if="items.length > 0">
      <div
        v-for="(nftItem, intexkey) in displayContents"
        :key="intexkey"
        class="w-10/12 md:w-6/12 lg:w-4/12 md:px-12 md:px-4 mr-auto ml-auto"
      >
        <content-card :content="nftItem" />
      </div>
      <div class="w-full">
        <div class="py-2">
          <nav class="block flex justify-center">
            <ul class="flex pl-0 rounded list-none flex-wrap">
              <li v-bind:class="{ disabled: page === 1 }">
                <a
                  href="javascript:void(0);"
                  class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid bg-white"
                  @click="onPrevClicked"
                  v-bind:class="{
                    'bg-emerald-200 text-white disabled': page === 1,
                    'text-emerald-500': page !== 1,
                  }"
                >
                  <i class="fas fa-chevron-left -ml-px"></i>
                </a>
              </li>
              <li v-for="pageNum in pages" :key="pageNum">
                <a
                  href="javascript:void(0);"
                  class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid"
                  v-bind:class="{
                    'text-white bg-emerald-500': pageNum === page,
                    'bg-white text-emerald-500': pageNum !== page,
                  }"
                  @click="onPaginationChanged(pageNum)"
                >
                  {{ pageNum }}
                </a>
              </li>
              <li v-bind:class="{ disabled: page === numPages }">
                <a
                  href="javascript:void(0);"
                  class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid bg-white"
                  @click="onNextClicked"
                  v-bind:class="{
                    'bg-emerald-200 text-white': page === numPages,
                    'text-emerald-500': page !== numPages,
                  }"
                >
                  <i class="fas fa-chevron-right -mr-px"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContentCard from "@/components/Cards/CardContent.vue";
export default {
  name: "creator-my-contents",
  props: ["perPage", "items"],
  data() {
    return {
      page: 1,
      numPages: 1,
      pages: [],
    };
  },
  components: { ContentCard },
  computed: {
    displayContents() {
      return this.paginate();
    },
  },
  watch: {
    items: function() {
      this.numPages = Math.ceil(this.items.length / this.perPage);
      for (let index = 1; index <= this.numPages; index++) {
        this.pages.push(index);
      }
    },
  },
  methods: {
    paginate() {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page - 1) * perPage;
      let to = page * perPage;
      return this.items.slice(from, to);
    },
    onPrevClicked() {
      if (this.page > 1) this.page--;
    },
    onNextClicked() {
      if (this.page < this.numPages) this.page++;
    },
    onPaginationChanged(pageNum) {
      this.page = pageNum;
    },
  },
};
</script>
