<template>
  <section class="section-shell blog-page">
    <section-intro
      eyebrow="Insights"
      title="Perspective on cyber risk, engineering strategy, and transformation."
      copy="This section can evolve into articles, briefings, and executive notes. For now, it frames the themes your audience should expect from your point of view."
      accent
    />

    <div class="blog-grid">
      <info-card
        v-for="topic in topics"
        :key="topic.eyebrow"
        class="blog-card"
        :eyebrow="topic.eyebrow"
        :title="topic.title"
        :body="topic.body"
        :eyebrow-muted="true"
      />
    </div>
  </section>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import SectionIntro from '../components/SectionIntro.vue';
import { blogContent } from '../content/siteContent';

export default {
  name: 'Blog',
  components: {
    InfoCard,
    SectionIntro,
  },
  data() {
    return {
      ...blogContent,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-page {
  padding-top: 4rem;
  padding-bottom: 5rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.blog-card {
  padding: 2rem;
}

@media (max-width: 980px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
