<template>
  <div id="app" class="site-shell">
    <mrio-header
      :routes="routes"
      :current-path="currentPath"
      :theme="theme"
      @navigate="navigate"
      @toggle-theme="toggleTheme"
    />

    <main class="page-frame">
      <transition name="fade" mode="out-in">
        <component
          :is="currentView"
          :key="currentPath"
          @navigate="navigate"
        />
      </transition>
    </main>

    <mrio-footer @navigate="navigate" />
  </div>
</template>

<script>
import MrioFooter from './components/MrioFooter.vue';
import MrioHeader from './components/MrioHeader.vue';
import { routeMap, routes } from './routes';

export default {
  name: 'App',
  components: {
    MrioHeader,
    MrioFooter,
  },
  data() {
    return {
      currentPath: this.normalizePath(window.location.pathname),
      routes,
      theme: 'light',
    };
  },
  computed: {
    currentView() {
      const route = routeMap[this.currentPath];
      return (route && route.component) || routeMap['/'].component;
    },
  },
  mounted() {
    this.initializeTheme();
    window.addEventListener('popstate', this.handlePopState);
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  },
  methods: {
    initializeTheme() {
      const savedTheme = window.localStorage.getItem('mrio-theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      this.theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', this.theme);
    },
    normalizePath(path) {
      if (!path || path === '') {
        return '/';
      }

      if (path.length > 1 && path.endsWith('/')) {
        return path.slice(0, -1);
      }

      return routeMap[path] ? path : '/';
    },
    handlePopState() {
      this.currentPath = this.normalizePath(window.location.pathname);
    },
    navigate(path) {
      const nextPath = this.normalizePath(path);

      if (nextPath === this.currentPath) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      window.history.pushState({}, '', nextPath);
      this.currentPath = nextPath;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.theme);
      window.localStorage.setItem('mrio-theme', this.theme);
    },
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}

.site-shell {
  background:
    radial-gradient(circle at top left, var(--shell-glow-left), transparent 30%),
    radial-gradient(circle at top right, var(--shell-glow-right), transparent 24%),
    linear-gradient(180deg, var(--shell-top) 0%, var(--shell-top-secondary) 22%, var(--page-bg) 22%, var(--page-bg) 100%);
  color: var(--text);
}

.page-frame {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
