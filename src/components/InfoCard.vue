<template>
  <article :class="[tone === 'dark' ? 'panel-dark' : 'panel', 'info-card', centered ? 'info-card--centered' : '']">
    <p v-if="eyebrow" :class="['eyebrow', eyebrowMuted ? 'eyebrow-muted' : '']">
      {{ eyebrow }}
    </p>
    <component :is="titleTag" class="info-card__title">
      {{ title }}
    </component>
    <p v-if="body" class="info-card__body">
      {{ body }}
    </p>
    <div v-if="$slots.default" class="info-card__slot">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    body: {
      type: String,
      default: '',
    },
    centered: {
      type: Boolean,
      default: false,
    },
    eyebrow: {
      type: String,
      default: '',
    },
    eyebrowMuted: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    titleTag: {
      type: String,
      default: 'h3',
    },
    tone: {
      type: String,
      default: 'light',
    },
  },
};
</script>

<style scoped lang="scss">
.info-card {
  padding: 2rem;
  text-align: left;
}

.info-card--centered {
  text-align: center;
}

.info-card__title {
  margin-top: 1rem;
  color: var(--heading-color);
  font-size: 1.7rem;
  line-height: 1.28;
}

.panel-dark .info-card__title {
  color: #ffffff;
}

.info-card__body {
  margin-top: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.panel-dark .info-card__body {
  color: var(--text-soft);
}

.info-card__slot {
  margin-top: 1rem;
}
</style>
