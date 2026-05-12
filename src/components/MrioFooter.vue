<template>
  <footer class="footer-shell">
    <div class="section-shell footer-grid">
      <div>
        <p class="footer-kicker">
          Mark Ryan
        </p>
        <h2 class="footer-title">
          Trusted for security, engineering leadership, and business-critical delivery.
        </h2>
        <p class="footer-copy">
          I help organizations reduce risk, modernize software delivery, and make better
          technology decisions with executive-level clarity.
        </p>
      </div>

      <div>
        <p class="footer-label">
          Navigate
        </p>
        <div class="footer-links">
          <button class="footer-link" type="button" @click="$emit('navigate', '/')">Home</button>
          <button class="footer-link" type="button" @click="$emit('navigate', '/about')">Profile</button>
          <button class="footer-link" type="button" @click="$emit('navigate', '/services')">Advisory</button>
          <button class="footer-link" type="button" @click="$emit('navigate', '/blog')">Insights</button>
        </div>
      </div>

      <div>
        <p class="footer-label">
          Contact
        </p>
        <div class="footer-contact stack-sm">
          <p>Available for advisory, technical leadership, and transformation engagements.</p>
          <button class="footer-link" type="button" @click="$emit('navigate', '/contact')">
            Start a conversation
          </button>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="section-shell footer-bottom__inner">
        <p>© Mark Ryan. Built for trusted digital leadership.</p>
        <p>Cybersecurity expert • Senior software engineer • Management consultant</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MrioFooter',
  emits: ['navigate'],
};
</script>

<style scoped lang="scss">
.footer-shell {
  background: var(--footer-bg);
  border-top: 1px solid var(--footer-border);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.footer-kicker,
.footer-label {
  color: var(--footer-kicker);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
}

.footer-title {
  max-width: 28rem;
  margin-top: 1rem;
  color: var(--footer-title);
  font-size: 1.5rem;
  line-height: 1.35;
}

.footer-copy,
.footer-contact {
  margin-top: 1rem;
  max-width: 34rem;
  color: var(--footer-copy);
  font-size: 0.95rem;
  line-height: 1.85;
}

.footer-label {
  color: var(--footer-label);
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1rem;
}

.footer-link {
  padding: 0;
  text-align: left;
  color: var(--footer-link);
  transition: color 160ms ease;
}

.footer-link:hover {
  color: var(--brand-blue);
}

.footer-bottom {
  border-top: 1px solid var(--footer-bottom-border);
}

.footer-bottom__inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: var(--footer-meta);
  font-size: 0.95rem;
}

@media (max-width: 980px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom__inner {
    flex-direction: column;
  }
}
</style>
