import React from 'react';

const PLANS = [
  {
    name: 'Silver',
    badge: 'Basic',
    price: '₹3,000',
    period: '/month',
    compareAt: '₹25,000/yr',
    popular: false,
    features: [
      { label: 'Doctor Profile Views', value: '75/month' },
      { label: 'Job Postings', value: '2/month' },
      { label: 'Access to Doctor Preferences', value: true },
      { label: 'Priority Job Listing', value: false },
      { label: 'In-App Contact', value: 'Chat to shortlist' },
      { label: 'Interview Scheduling', value: 'Up to 10/month' },
      { label: 'Support', value: 'Email' },
      { label: 'Candidate Shortlist Limit', value: '20/month' },
      { label: 'Analytics Dashboard', value: 'Basic Reports' },
      { label: 'API Access / Integration', value: false },
      { label: 'Custom Branding', value: false },
    ],
  },
  {
    name: 'Gold',
    badge: 'Most Popular',
    price: '₹7,500',
    period: '/month',
    compareAt: '₹60,000/yr',
    popular: true,
    features: [
      { label: 'Doctor Profile Views', value: '250/month' },
      { label: 'Job Postings', value: '5/month' },
      { label: 'Access to Doctor Preferences', value: true },
      { label: 'Priority Job Listing', value: true },
      { label: 'In-App Contact', value: 'Video + Chat' },
      { label: 'Interview Scheduling', value: 'Up to 30/month' },
      { label: 'Support', value: 'Chat + Email' },
      { label: 'Candidate Shortlist Limit', value: '50/month' },
      { label: 'Analytics Dashboard', value: 'Advanced Reports' },
      { label: 'API Access / Integration', value: false },
      { label: 'Custom Branding', value: false },
    ],
  },
  {
    name: 'Platinum',
    badge: 'Enterprise',
    price: '₹15,000',
    period: '/month',
    compareAt: '₹1,25,000/yr',
    popular: false,
    features: [
      { label: 'Doctor Profile Views', value: 'Unlimited' },
      { label: 'Job Postings', value: 'Unlimited' },
      { label: 'Access to Doctor Preferences', value: true },
      { label: 'Priority Job Listing', value: 'Featured + Priority' },
      { label: 'In-App Contact', value: 'Video + Chat' },
      { label: 'Interview Scheduling', value: 'Unlimited' },
      { label: 'Support', value: 'Dedicated Manager' },
      { label: 'Candidate Shortlist Limit', value: 'Unlimited' },
      { label: 'Analytics Dashboard', value: 'Customizable Reports' },
      { label: 'API Access / Integration', value: true },
      { label: 'Custom Branding', value: true },
    ],
  },
];

const BENEFITS = [
  { emoji: '🎁', text: '7-14 days free trial for new subscribers' },
  { emoji: '💰', text: '10-15% discount for 2+ year subscriptions' },
  { emoji: '🔧', text: 'Add-ons available for extra postings & views' },
  { emoji: '📅', text: 'Flexible monthly or annual payment options' },
];

export default function DrStethosPlans() {
  return (
    <section id="pricing" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            Choose Your{' '}
            <span style={styles.titleAccent}>Plan</span>
          </h2>
          <p style={styles.subtitle}>
            Flexible pricing designed for hospitals and doctors
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch" style={styles.cardsGrid}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...styles.card,
                ...(plan.popular ? styles.cardPopular : {}),
              }}
            >
              {plan.popular && (
                <div style={styles.popularRibbon}>Most Popular</div>
              )}

              {/* Card Header */}
              <div style={styles.cardHeader}>
                <div style={styles.planNameRow}>
                  <h3 style={styles.planName}>{plan.name}</h3>
                  <span
                    style={{
                      ...styles.badge,
                      ...(plan.popular ? styles.badgePopular : {}),
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div style={styles.priceBlock}>
                  <span style={styles.price}>{plan.price}</span>
                  <span style={styles.period}>{plan.period}</span>
                </div>
                <p style={styles.compareAt}>{plan.compareAt}</p>

                <button
                  style={{
                    ...styles.btn,
                    ...(plan.popular ? styles.btnPopular : styles.btnOutline),
                  }}
                >
                  Get Started
                </button>
              </div>

              {/* Divider */}
              <div style={styles.divider} />

              {/* Features */}
              <div style={styles.featuresList}>
                {plan.features.map((feat) => (
                  <div key={feat.label} style={styles.featureRow}>
                    <span style={styles.featureIcon}>
                      {feat.value === true ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89E900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : feat.value === false ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89E900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      )}
                    </span>
                    <span style={styles.featureLabel}>{feat.label}</span>
                    {typeof feat.value === 'string' && (
                      <span style={styles.featureValue}>{feat.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div style={styles.benefitsContainer}>
          <h3 style={styles.benefitsTitle}>Additional Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" style={styles.benefitsGrid}>
            {BENEFITS.map((b) => (
              <div key={b.text} style={styles.benefitCard}>
                <div style={styles.benefitEmoji}>{b.emoji}</div>
                <p style={styles.benefitText}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Inline Styles ============== */

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '120px 0',
    background: '#FAFAFA',
    borderTop: '1px solid #E0E0E0',
    fontFamily: "'Outfit', sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },

  /* ---- Header ---- */
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.2rem)',
    fontWeight: 800,
    color: '#111',
    letterSpacing: '-0.03em',
    marginBottom: '16px',
    lineHeight: 1.15,
  },
  titleAccent: {
    background: 'linear-gradient(135deg, #89E900, #55cc00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: '#777',
    fontWeight: 400,
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: 1.6,
  },

  /* ---- Cards Grid ---- */
  cardsGrid: {
    // Relying on Tailwind className `grid grid-cols-1 md:grid-cols-3 gap-6` in JSX now
  },

  /* ---- Card ---- */
  card: {
    background: '#fff',
    borderRadius: '24px',
    border: '1px solid #E8E8E8',
    padding: '40px 32px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
  },
  cardPopular: {
    border: '2px solid #89E900',
    boxShadow: '0 20px 60px -15px rgba(137, 233, 0, 0.25), 0 0 0 1px rgba(137, 233, 0, 0.1)',
    transform: 'scale(1.04)',
    zIndex: 2,
  },

  /* ---- Popular Ribbon ---- */
  popularRibbon: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(135deg, #89E900, #6ab800)',
    color: '#111',
    textAlign: 'center',
    padding: '8px 0',
    fontWeight: 700,
    fontSize: '0.8rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },

  /* ---- Card Header ---- */
  cardHeader: {
    paddingTop: '8px',
  },
  planNameRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  planName: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#111',
    margin: 0,
  },
  badge: {
    padding: '6px 14px',
    borderRadius: '100px',
    fontSize: '0.75rem',
    fontWeight: 600,
    background: '#F3F3F3',
    color: '#555',
  },
  badgePopular: {
    background: 'rgba(137, 233, 0, 0.15)',
    color: '#3d7a00',
  },

  /* ---- Price ---- */
  priceBlock: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
    marginBottom: '4px',
  },
  price: {
    fontSize: '3rem',
    fontWeight: 800,
    color: '#111',
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },
  period: {
    fontSize: '1rem',
    color: '#999',
    fontWeight: 500,
  },
  compareAt: {
    fontSize: '0.9rem',
    color: '#aaa',
    marginBottom: '24px',
    fontWeight: 400,
  },

  /* ---- Buttons ---- */
  btn: {
    width: '100%',
    padding: '16px 0',
    borderRadius: '14px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    textAlign: 'center',
    fontFamily: "'Outfit', sans-serif",
  },
  btnPopular: {
    background: 'linear-gradient(135deg, #89E900, #6ab800)',
    color: '#111',
    boxShadow: '0 8px 24px rgba(137, 233, 0, 0.35)',
    marginTop: '32px',
  },
  btnOutline: {
    background: '#fff',
    color: '#111',
    border: '2px solid #E0E0E0',
    marginTop: '0',
  },

  /* ---- Divider ---- */
  divider: {
    height: '1px',
    background: '#F0F0F0',
    margin: '32px 0',
  },

  /* ---- Features ---- */
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
  },
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minHeight: '28px',
  },
  featureIcon: {
    flexShrink: 0,
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureLabel: {
    fontSize: '0.9rem',
    color: '#555',
    fontWeight: 500,
    flex: 1,
  },
  featureValue: {
    fontSize: '0.85rem',
    color: '#111',
    fontWeight: 600,
    textAlign: 'right',
    whiteSpace: 'nowrap',
  },

  /* ---- Benefits ---- */
  benefitsContainer: {
    marginTop: '80px',
  },
  benefitsTitle: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#111',
    letterSpacing: '-0.02em',
    marginBottom: '32px',
    textAlign: 'center',
  },
  benefitsGrid: {
    // relying on className `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6` in JSX now
  },
  benefitCard: {
    background: '#fff',
    borderRadius: '20px',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  benefitEmoji: {
    fontSize: '2.5rem',
    marginBottom: '16px',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F8F8F8',
    borderRadius: '20px',
  },
  benefitText: {
    fontSize: '0.9rem',
    color: '#555',
    fontWeight: 600,
    lineHeight: 1.5,
  },
};
