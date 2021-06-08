<template>
  <nav
    class="bg-black top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
            href="#pablo"
          >
            <img
              src="../../assets/img/logo.png"
              style="height: 70px; max-height: 70px;"
            />
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li
            class="flex items-center bg-white border border-blueGray-600 border-solid"
          >
            <router-link to="/#">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                target="_blank"
              >
                Marketplace
              </a>
            </router-link>
          </li>
          <li
            class="flex items-center bg-white border border-blueGray-600 border-solid"
          >
            <router-link to="/#">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                target="_blank"
              >
                Help
              </a>
            </router-link>
          </li>

          <li
            v-if="!logged"
            class="flex items-center bg-white border border-blueGray-600 border-solid"
          >
            <router-link to="/auth/login">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                target="_blank"
              >
                Account
              </a>
            </router-link>
          </li>
          <li
            v-if="logged"
            class="flex items-center bg-white border border-blueGray-600 border-solid"
          >
            <IndexDropdown />
          </li>
          <li
            v-if="logged"
            class="flex items-center bg-white border border-blueGray-600 border-solid"
          >
            <router-link to="/" @click="logout">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                target="_blank"
              >
                Logout
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
      logged: false,
    };
  },
  mounted() {
    if (localStorage.getItem("logged") === "yes") {
      this.logged = true;
    } else {
      this.logged = false;
    }
    console.log("logged test->" + this.logged);
  },
  methods: {
    setNavbarOpen: function() {
      this.navbarOpen = !this.navbarOpen;
    },
    logout: function() {
      localStorage.setItem("logged", "logout");
      // this.$router.push('/')
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
