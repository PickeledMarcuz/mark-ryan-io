<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="`Switch to ${nextThemeLabel} theme`"
    @click="$emit('toggle')"
  >
    <span class="theme-toggle__track">
      <span class="theme-toggle__icon">{{ currentTheme === 'dark' ? 'Dark' : 'Light' }}</span>
      <span class="theme-toggle__thumb" :class="currentTheme === 'dark' ? 'theme-toggle__thumb--dark' : ''" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  props: {
    currentTheme: {
      type: String,
      required: true,
    },
  },
  emits: ['toggle'],
  computed: {
    nextThemeLabel() {
      return this.currentTheme === 'dark' ? 'light' : 'dark';
    },
  },
};
</script>

<style scoped lang="scss">
.theme-toggle {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.theme-toggle__track {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.4rem 0.5rem 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--theme-toggle-border);
  background: var(--theme-toggle-bg);
  color: var(--theme-toggle-text);
}

.theme-toggle__icon {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.theme-toggle__thumb {
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 999px;
  background: var(--theme-toggle-thumb);
  box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.06);
}

.theme-toggle__thumb--dark {
  background: #0f172a;
}
</style>
