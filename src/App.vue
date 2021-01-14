<template>
  <div id="app">
    <header class="text-gray-700 bg-white border-t border-b body-font">
      <div
        class="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row "
      >
        <router-link
          to="/"
          class="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <img
            class="h-12 w-12 profile-pic bg-white rounded-xl"
            src="@/assets/Logo.png"
            alt="brand logo"
          />
        </router-link>
        <nav
          class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto"
        >
          <router-link
            to="/about"
            class="mr-5 text-sm font-semibold text-gray-600
            hover:text-gray-800"
          >
            About</router-link
          >
          <router-link
            to="/contact"
            class="mr-5 text-sm font-semibold text-gray-600
            hover:text-gray-800"
          >
            Contact</router-link
          >
          <router-link
            to="/services"
            class="mr-5 text-sm font-semibold text-gray-600
            hover:text-gray-800"
          >
            Services</router-link
          >
          <router-link
            to="/blog"
            class="mr-5 text-sm font-semibold text-gray-600
            hover:text-gray-800"
          >
            Blog</router-link
          >
        </nav>
        <button
          class="items-center px-8 py-3 mt-4 font-semibold text-blue-700 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-blue-700 hover:text-white focus:ring focus:outline-none"
        >
          Log In / Register
        </button>
      </div>
    </header>

    <!-- Content from Vue application -->
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>

    <footer class="mt-6 text-gray-700 bg-white border-t body-font">
      <div class="border-t border-gray-200">
        <div
          class="container flex flex-col flex-wrap items-center p-5 mx-auto "
        >
          <div class="inline-flex items-center py-20">
            <span
              class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
            >
              <a class="text-blueGray-300 hover:text-blueGray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-16 h-16"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="mx-5 text-blueGray-300 hover:text-blueGray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-16 h-16"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class=" text-blueGray-300 hover:text-blueGray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-16 h-16"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-blueGray-900">
          <div
            class="container flex flex-col flex-wrap px-5 py-6 mx-auto lg:px-20 sm:flex-row"
          >
            <div
              class="flex flex-wrap items-center justify-center mx-auto text-base"
            >
              <a
                href="#"
                class="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700"
              >
                Privacy Policy</a
              >
              <a
                href="#"
                class="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700"
              >
                License</a
              >
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center px-5 py-6 mx-auto text-base bg-blueGray-900 "
        >
          <div
            class="flex flex-wrap items-center justify-center mx-auto text-base"
          >
            <p class="mr-5 text-sm text-center text-gray-200">
              © Your Company — 2020
            </p>

            <a
              href="#"
              class="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700"
            >
              All rights Reserves</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 300ms;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
