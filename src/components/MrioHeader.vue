<template>
  <header class="site-header">
    <div class="section-shell site-header__inner">
      <button
        class="site-header__brand"
        type="button"
        @click="$emit('navigate', '/')"
      >
        <span class="brand-mark">
          <img
            class="brand-mark__image"
            src="../assets/logo.png"
            alt="Mark Ryan logo"
          />
        </span>
        <span>
          <span class="brand-kicker">
            Mark Ryan
          </span>
          <span class="brand-subtitle">
            Cybersecurity, Engineering, Advisory
          </span>
        </span>
      </button>

      <nav class="site-header__nav site-header__nav--desktop">
        <button
          v-for="route in routes"
          :key="route.path"
          :class="[
            'nav-button',
            currentPath === route.path ? 'nav-button--active' : 'nav-button--default',
          ]"
          type="button"
          @click="$emit('navigate', route.path)"
        >
          {{ route.label }}
        </button>
      </nav>

      <div class="site-header__actions">
        <theme-toggle :current-theme="theme" @toggle="$emit('toggle-theme')" />
        <button
          class="site-header__cta"
          type="button"
          @click="$emit('navigate', '/contact')"
        >
          Book A Conversation
        </button>
      </div>
    </div>

    <nav class="site-header__nav site-header__nav--mobile">
      <div class="section-shell site-header__nav-list">
        <button
          v-for="route in routes"
          :key="route.path"
          :class="[
            'nav-button',
            currentPath === route.path ? 'nav-button--active' : 'nav-button--mobile',
          ]"
          type="button"
          @click="$emit('navigate', route.path)"
        >
          {{ route.label }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue';

export default {
  name: 'MrioHeader',
  components: {
    ThemeToggle,
  },
  props: {
    currentPath: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    routes: {
      type: Array,
      required: true,
    },
  },
  emits: ['navigate', 'toggle-theme'],
};
</script>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  backdrop-filter: blur(18px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.site-header__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 0;
  background: transparent;
  color: var(--header-brand);
  text-align: left;
  cursor: pointer;
}

.site-header__brand:hover {
  color: var(--header-brand-hover);
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  background: var(--brand-mark-bg);
  border: 1px solid var(--brand-mark-border);
  box-shadow: 0 0 30px var(--brand-mark-shadow);
}

.brand-mark__image {
  width: 2rem;
  height: 2rem;
  border-radius: 0.75rem;
  object-fit: contain;
}

.brand-kicker {
  display: block;
  color: var(--brand-blue);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.28em;
}

.brand-subtitle {
  display: block;
  margin-top: 0.15rem;
  color: var(--header-subtitle);
  font-size: 0.95rem;
}

.site-header__nav {
  display: flex;
}

.site-header__nav--desktop {
  align-items: center;
  gap: 0.5rem;
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.site-header__nav--mobile {
  display: none;
  border-top: 1px solid var(--header-border-strong);
}

.site-header__nav-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.nav-button {
  padding: 0.65rem 1rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 160ms ease;
}

.nav-button--active {
  background: var(--brand-blue);
  color: #111827;
}

.nav-button--default {
  color: var(--header-link);
}

.nav-button--default:hover {
  background: var(--header-link-hover-bg);
  color: var(--header-link-hover-text);
}

.nav-button--mobile {
  background: var(--header-link-hover-bg);
  color: var(--header-link);
}

.site-header__cta {
  padding: 0.8rem 1.3rem;
  border-radius: 999px;
  border: 1px solid var(--header-cta-border);
  background: transparent;
  color: var(--header-cta-text);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 160ms ease;
}

.site-header__cta:hover {
  background: var(--header-cta-hover-bg);
  color: var(--header-cta-hover-text);
}

@media (max-width: 900px) {
  .site-header__nav--desktop {
    display: none;
  }

  .site-header__nav--mobile {
    display: block;
  }

  .site-header__inner {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .site-header__inner {
    align-items: flex-start;
  }
}
</style>
