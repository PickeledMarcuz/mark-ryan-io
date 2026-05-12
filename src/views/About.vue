<template>
  <section class="section-shell about-page">
    <div class="about-grid">
      <div class="panel-dark about-intro text-left">
        <section-intro
          eyebrow="Profile"
          title="Technical credibility with executive-level judgment."
          copy="My work sits at the intersection of secure systems, software delivery, and strategic decision-making. That combination helps organizations move from fragmented technical conversations to a unified operating agenda."
        />
      </div>

      <div class="panel about-profile text-left">
        <h2 class="about-profile__title">How I show up</h2>
        <div class="about-profile__grid">
          <info-card
            v-for="profile in profiles"
            :key="profile.title"
            :title="profile.title"
            :body="profile.body"
          />
        </div>
      </div>
    </div>

    <div class="panel about-approach text-left">
      <p class="eyebrow eyebrow-accent">Approach</p>
      <div class="about-approach__grid">
        <info-card
          v-for="item in approach"
          :key="item.title"
          :title="item.title"
          :body="item.body"
        />
      </div>
    </div>

    <div class="panel about-credentials text-left">
      <p class="eyebrow">Credentials And Working Style</p>
      <div class="about-credentials__grid">
        <info-card
          v-for="credential in credentials"
          :key="credential.title"
          :eyebrow="credential.eyebrow"
          :title="credential.title"
          :body="credential.body"
          :eyebrow-muted="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import SectionIntro from '../components/SectionIntro.vue';
import { aboutContent } from '../content/siteContent';

export default {
  name: 'About',
  components: {
    InfoCard,
    SectionIntro,
  },
  data() {
    return {
      ...aboutContent,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-page {
  padding-top: 4rem;
  padding-bottom: 5rem;
}

.about-grid,
.about-approach__grid {
  display: grid;
  gap: 2rem;
}

.about-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.about-intro,
.about-profile,
.about-approach {
  padding: 2rem;
}

.about-profile__title {
  color: var(--heading-color);
  font-size: 1.7rem;
}

.about-profile__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.about-approach {
  margin-top: 2rem;
}

.about-credentials {
  margin-top: 2rem;
  padding: 2rem;
}

.about-credentials__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.25rem;
}

.about-approach__grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1.25rem;
}

@media (max-width: 980px) {
  .about-grid,
  .about-profile__grid,
  .about-approach__grid,
  .about-credentials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
