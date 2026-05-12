<template>
  <section class="section-shell contact-page">
    <div class="contact-grid">
      <div class="panel-dark contact-intro text-left">
        <section-intro
          eyebrow="Contact"
          title="Start with the problem, not the pitch."
          copy="If you are working through cyber risk, delivery issues, architecture decisions, or a broader transformation challenge, this site should make it clear where I fit."
        />
        <p class="contact-kicker">
          Available for advisory, interim leadership, and targeted technical engagements.
        </p>
      </div>

      <div class="panel contact-panel text-left">
        <h2 class="contact-panel__title text-gray-900">Best ways to connect</h2>
        <div class="contact-panel__stack">
          <info-card
            v-for="channel in channels"
            :key="channel.title"
            :title="channel.title"
            :body="channel.body"
          />
        </div>

        <div class="contact-note">
          <p class="contact-note__label">
            Next site enhancement
          </p>
          <p class="contact-note__copy text-gray-700">
            Replace this section with your preferred contact method, calendar link, or a simple
            inquiry form once you’re ready.
          </p>
        </div>
      </div>
    </div>

    <div class="panel contact-models text-left">
      <section-intro
        eyebrow="Good Reasons To Reach Out"
        title="Use the site as a starting point when you need judgment, technical depth, or momentum."
        :level="2"
      />
      <ul class="contact-models__list">
        <li v-for="model in engagementModels" :key="model">{{ model }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import SectionIntro from '../components/SectionIntro.vue';
import { contactContent } from '../content/siteContent';

export default {
  name: 'Contact',
  components: {
    InfoCard,
    SectionIntro,
  },
  data() {
    return {
      ...contactContent,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  padding-top: 4rem;
  padding-bottom: 5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.contact-intro,
.contact-panel {
  padding: 2rem;
}

.contact-kicker,
.contact-note__label {
  display: block;
  margin-top: 1.5rem;
  color: #bfdbfe;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.contact-panel__title {
  font-size: 1.7rem;
}

.contact-panel__stack {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.contact-note {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 20px;
  background: var(--surface-gray);
}

.contact-note__label {
  margin-top: 0;
  color: var(--text-muted);
}

.contact-models {
  margin-top: 2rem;
  padding: 2rem;
}

.contact-models__list {
  margin-top: 1.5rem;
  padding-left: 1.2rem;
  color: var(--text-muted);
  line-height: 1.9;
}

.contact-models__list li + li {
  margin-top: 0.6rem;
}

@media (max-width: 980px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
