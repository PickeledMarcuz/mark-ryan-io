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
  </div>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import SectionIntro from '../components/SectionIntro.vue';

export default {
  name: 'Home',
  components: {
    InfoCard,
    SectionIntro,
  },
  emits: ['navigate'],
  data() {
    return {
      capabilities: [
        {
          eyebrow: 'Cybersecurity Expert',
          title: 'Protecting systems, operations, and trust.',
          body: 'Security reviews, secure architecture guidance, control design, and pragmatic roadmaps that help teams reduce exposure without slowing delivery.',
        },
        {
          eyebrow: 'Senior Software Engineer',
          title: 'Building and modernizing business-critical platforms.',
          body: 'From architecture to implementation, I help teams improve reliability, developer velocity, and maintainability where it matters most.',
        },
        {
          eyebrow: 'Management Consultant',
          title: 'Turning technical complexity into executable decisions.',
          body: 'Stakeholder alignment, prioritization, and transformation plans that give leadership a clear path from analysis to action.',
        },
      ],
      engagementThemes: [
        {
          title: 'Board and executive advisory',
          body: 'Clear guidance on cyber risk, delivery risk, and investment priorities.',
        },
        {
          title: 'Architecture and engineering strategy',
          body: 'Decisions that support secure growth, resilience, and delivery speed.',
        },
        {
          title: 'Transformation planning',
          body: 'Practical roadmaps for legacy modernization, operating model change, and capability uplift.',
        },
        {
          title: 'Technical problem solving',
          body: 'Hands-on support where the details matter and leadership still needs confidence.',
        },
      ],
      heroMetrics: [
        {
          label: 'Cybersecurity',
          title: 'Risk reduction, resilience, and secure-by-design delivery.',
        },
        {
          label: 'Software engineering',
          title: 'Hands-on architecture, modernization, and technical leadership.',
        },
        {
          label: 'Management consulting',
          title: 'Executive alignment, prioritization, and transformation planning.',
        },
      ],
      positioningItems: [
        'Security and delivery transformation',
        'Technical due diligence and remediation planning',
        'Architecture and leadership support for complex products',
      ],
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
  background: #f1f5f9;
}

.positioning-card__label {
  color: #64748b;
}

.positioning-list {
  padding-left: 1.2rem;
  margin-top: 1rem;
  color: #334155;
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
  .themes-grid,
  .themes-cards {
    grid-template-columns: 1fr;
  }
}
</style>
