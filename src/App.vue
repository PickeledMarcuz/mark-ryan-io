<template>
  <div id="app" :style="{ minHeight: minHeight + 'px' }">
    <mrio-header />

    <!-- Content from Vue application -->
    <main class="flex-grow w-full relative">
      <transition
        name="fade"
        mode="out-in"
        @before-leave="beforeLeave"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <router-view />
      </transition>
    </main>

    <mrio-footer company="MarkRyanIO" />
  </div>
</template>

<script>
import MrioFooter from './components/MrioFooter.vue';
import MrioHeader from './components/MrioHeader.vue';

export default {
  name: 'App',
  components: {
    MrioHeader,
    MrioFooter,
  },
  data() {
    return {
      prevHeight: 0,
      minHeight: 0,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.minHeight = window.innerHeight;
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 300ms;
  transition-property: height, opacity;
  transition-timing-function: ease-out;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
