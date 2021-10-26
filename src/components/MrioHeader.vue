<template>
  <header class="text-gray-700 bg-white border-t border-b body-font">
    <div
      class="
        container
        flex flex-col flex-wrap
        p-5
        mx-auto
        md:items-center md:flex-row
      "
    >
      <router-link
        to="/"
        class="
          flex
          items-center
          w-40
          mb-4
          font-medium
          text-gray-900
          title-font
          md:mb-0
        "
      >
        <img
          class="h-12 w-12 profile-pic bg-white rounded-xl"
          src="../assets/logo.png"
          alt="brand logo"
        />
      </router-link>
      <nav
        class="
          flex flex-wrap
          items-center
          justify-center
          text-base
          md:ml-auto md:mr-auto
        "
      >
        <router-link
          to="/about"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
        >
          About</router-link
        >
        <router-link
          to="/contact"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
        >
          Contact</router-link
        >
        <router-link
          to="/services"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
        >
          Services</router-link
        >
        <router-link
          to="/blog"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
        >
          Blog</router-link
        >
      </nav>
      <button
        class="
          items-center
          px-8
          py-3
          mt-4
          font-semibold
          text-blue-700
          transition
          duration-500
          ease-in-out
          transform
          bg-white
          border
          rounded-lg
          lg:inline-flex lg:mt-px
          hover:border-blue-800 hover:bg-blue-700 hover:text-white
          focus:ring focus:outline-none
        "
      >
        Log In / Register
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MrioHeader',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
