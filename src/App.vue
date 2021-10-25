<template>
  <div id="app">
    <mrio-header />

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
    };
  },
  methods: {
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
