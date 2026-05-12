<template>
  <div class="home-page">
    <section class="section-shell hero-section">
      <div class="hero-grid">
        <div class="hero-copy text-left text-white">
          <p class="eyebrow">Independent Advisor</p>
          <h1 class="hero-title">
            Cybersecurity expertise, senior engineering depth, and consulting discipline in one partner.
          </h1>
          <p class="hero-summary text-gray-300">
            I help leadership teams secure critical systems, modernize software delivery, and
            align technical decisions with real business outcomes.
          </p>
          <div class="hero-actions">
            <button class="primary-button" type="button" @click="$emit('navigate', '/contact')">
              Discuss an engagement
            </button>
            <button class="ghost-button" type="button" @click="$emit('navigate', '/services')">
              Explore advisory services
            </button>
          </div>
        </div>

        <div class="panel-dark hero-panel">
          <p class="hero-panel__label">
            What I bring
          </p>
          <div class="hero-metrics">
            <div
              v-for="metric in heroMetrics"
              :key="metric.label"
              class="metric-card"
            >
              <p class="text-gray-400 metric-card__label">{{ metric.label }}</p>
              <p class="metric-card__title">{{ metric.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell section-spacing-sm">
      <div class="panel positioning-grid">
        <section-intro
          eyebrow="Positioning"
          title="Three disciplines. One coherent operating model."
          :level="2"
          accent
        />
        <div class="stack-md text-left text-gray-600">
          <p>
            Security without engineering context creates friction. Engineering without business
            alignment creates waste.
          </p>
          <p>
            My approach bridges both, so teams can move faster while improving control,
            confidence, and decision quality.
          </p>
        </div>
        <div class="positioning-card">
          <p class="positioning-card__label">
            Best fit engagements
          </p>
          <ul class="positioning-list">
            <li v-for="item in positioningItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-shell site-section">
      <div class="capability-grid">
        <info-card
          v-for="capability in capabilities"
          :key="capability.eyebrow"
          class="capability-card"
          :eyebrow="capability.eyebrow"
          :title="capability.title"
          :body="capability.body"
          :eyebrow-muted="true"
        />
      </div>
    </section>

    <section class="section-shell site-section">
      <div class="proof-block">
        <section-intro
          eyebrow="Why It Resonates"
          title="Built to create confidence with both executives and delivery teams."
          :level="2"
          accent
        />
        <div class="proof-grid">
          <info-card
            v-for="item in proof"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
            :eyebrow-muted="true"
          />
        </div>
      </div>
    </section>

    <section class="section-shell site-section">
      <div class="panel-dark themes-panel">
        <div class="themes-grid">
          <section-intro
            eyebrow="Engagement Themes"
            title="Focused support for high-stakes technology decisions."
            :level="2"
          />
          <div class="themes-cards">
            <info-card
              v-for="theme in engagementThemes"
              :key="theme.title"
              class="theme-card"
              :title="theme.title"
              :body="theme.body"
              tone="dark"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell site-section">
      <div class="audience-block">
        <section-intro
          eyebrow="Who I Help"
          title="Best suited to organizations where technical decisions carry strategic weight."
          :level="2"
        />
        <div class="audience-grid">
          <info-card
            v-for="audience in audiences"
            :key="audience.title"
            :eyebrow="audience.eyebrow"
            :title="audience.title"
            :body="audience.body"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import SectionIntro from '../components/SectionIntro.vue';
import { homeContent } from '../content/siteContent';

export default {
  name: 'Home',
  components: {
    InfoCard,
    SectionIntro,
  },
  emits: ['navigate'],
  data() {
    return {
      ...homeContent,
    };
  },
};
</script>

<style scoped lang="scss">
.home-page {
  padding-bottom: 6rem;
}

.hero-section {
  padding-top: 4rem;
  padding-bottom: 2.5rem;
}

.hero-grid,
.positioning-grid,
.themes-grid {
  display: grid;
  gap: 2rem;
}

.hero-grid {
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: end;
}

.hero-copy {
  max-width: 52rem;
}

.hero-title {
  margin-top: 1.5rem;
  max-width: 56rem;
  font-size: clamp(2.8rem, 7vw, 5.2rem);
  line-height: 1.05;
}

.hero-summary {
  margin-top: 1.5rem;
  max-width: 42rem;
  font-size: 1.125rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-panel,
.themes-panel {
  padding: 2rem;
}

.hero-panel__label,
.positioning-card__label {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #93c5fd;
  letter-spacing: 0.18em;
}

.hero-metrics,
.themes-cards {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.metric-card__label {
  font-size: 0.9rem;
}

.metric-card__title,
.theme-card__title {
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
}

.theme-card__copy {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.7;
}

.section-spacing-sm {
  padding-top: 2.5rem;
}

.positioning-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 2rem;
}

.positioning-title,
.themes-title {
  margin-top: 1rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
}

.positioning-card {
  padding: 1.5rem;
  border-radius: 20px;
  background: var(--surface-gray);
}

.positioning-card__label {
  color: var(--text-muted);
}

.positioning-list {
  padding-left: 1.2rem;
  margin-top: 1rem;
  color: var(--text);
}

.positioning-list li + li {
  margin-top: 0.75rem;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.capability-card {
  padding: 2rem;
  text-align: left;
}

.proof-block,
.audience-block {
  display: grid;
  gap: 2rem;
}

.proof-grid,
.audience-grid {
  display: grid;
  gap: 1.5rem;
}

.proof-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.audience-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.themes-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.themes-cards {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 0;
}

@media (max-width: 980px) {
  .hero-grid,
  .positioning-grid,
  .capability-grid,
  .proof-grid,
  .themes-grid,
  .themes-cards,
  .audience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
