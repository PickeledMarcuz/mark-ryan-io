<template>
  <div :class="['section-intro', centered ? 'section-intro--centered' : '']">
    <p :class="['eyebrow', accent ? 'eyebrow-accent' : '', muted ? 'eyebrow-muted' : '']">
      {{ eyebrow }}
    </p>
    <h1 v-if="level === 1" class="page-title">
      {{ title }}
    </h1>
    <h2 v-else class="page-title">
      {{ title }}
    </h2>
    <p v-if="copy" class="page-copy">
      {{ copy }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionIntro',
  props: {
    accent: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    copy: {
      type: String,
      default: '',
    },
    eyebrow: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 1,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.section-intro--centered {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
