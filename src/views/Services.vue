<template>
  <section class="section-shell services-page">
    <section-intro
      eyebrow="Advisory Services"
      title="High-value support for organizations navigating technical risk and change."
      copy="Engagements are designed to help leadership teams make confident decisions while giving delivery teams practical, technically grounded direction."
      accent
    />

    <div class="services-grid">
      <info-card
        v-for="service in services"
        :key="service.eyebrow"
        class="service-card"
        :eyebrow="service.eyebrow"
        :title="service.title"
        :body="service.body"
        :eyebrow-muted="true"
      />
    </div>

    <div class="panel-dark service-outcomes">
      <div class="service-outcomes__grid">
        <section-intro
          eyebrow="Common outcomes"
          title="Engagements are structured around measurable progress."
          :level="2"
        />
        <div class="service-outcomes__cards">
          <info-card
            v-for="outcome in outcomes"
            :key="outcome"
            :title="outcome"
            tone="dark"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import SectionIntro from '../components/SectionIntro.vue';

export default {
  name: 'Services',
  components: {
    InfoCard,
    SectionIntro,
  },
  data() {
    return {
      outcomes: [
        'Reduced security and delivery risk',
        'Sharper technical and investment decisions',
        'Clearer modernization priorities',
        'Better alignment between leadership and delivery',
      ],
      services: [
        {
          eyebrow: '01',
          title: 'Cybersecurity advisory',
          body: 'Security posture reviews, secure architecture guidance, risk interpretation, and remediation planning built for real operating environments.',
        },
        {
          eyebrow: '02',
          title: 'Engineering leadership',
          body: 'Architecture reviews, modernization strategy, delivery recovery, and leadership support for complex platforms and product teams.',
        },
        {
          eyebrow: '03',
          title: 'Management consulting',
          body: 'Operating model alignment, transformation roadmaps, stakeholder coordination, and decision support for strategic initiatives.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services-page {
  padding-top: 4rem;
  padding-bottom: 5rem;
}

.services-grid,
.service-outcomes__grid,
.service-outcomes__cards {
  display: grid;
  gap: 1.5rem;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2.5rem;
}

.service-card,
.service-outcomes {
  padding: 2rem;
}

.service-outcomes {
  margin-top: 2rem;
}

.service-outcomes__grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.service-outcomes__cards {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 980px) {
  .services-grid,
  .service-outcomes__grid,
  .service-outcomes__cards {
    grid-template-columns: 1fr;
  }
}
</style>
