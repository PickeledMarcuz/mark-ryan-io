<template>
  <footer class="mt-32 text-gray-700 bg-black border-t body-font">
    <div class="bg-blueGray-900">
      <div
        class="container flex flex-col flex-wrap px-5 py-6 lg:px-20 sm:flex-row"
      >
        <div class="flex flex-wrap items-center justify-center text-base">
          <p class="mr-5 text-sm text-center text-gray-200">
            © {{ company }} — 2021
          </p>
          <a
            href="#"
            class="
              justify-center
              mr-5
              text-sm text-center text-blueGray-200
              hover:text-blue-700
            "
          >
            Privacy Policy</a
          >
          <a
            href="#"
            class="
              justify-center
              mr-5
              text-sm text-center text-blueGray-200
              hover:text-blue-700
            "
          >
            Terms Of Service</a
          >
        </div>
        <span
          class="
            inline-flex
            justify-center
            mt-2
            sm:ml-auto sm:mt-0 sm:justify-end
          "
        >
          <p class="mr-5 text-sm text-center text-gray-200">
            Working Remote Since 2020
          </p>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MrioFooter',
  props: {
    company: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
