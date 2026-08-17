// Master Design System Motion Constants — Apple / Anthropic Precision Curve

export const MotionConfig = {
  EASE_APPLE: [0.16, 1, 0.3, 1] as const,

  DURATION: {
    HOVER: 0.18,
    FAST: 0.2,
    MEDIUM: 0.5,
    SECTION: 0.8,
    HERO: 1.2,
  } as const,

  VARIANTS: {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-50px' },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    staggerContainer: {
      initial: {},
      whileInView: {
        transition: {
          staggerChildren: 0.08,
        },
      },
    },
  },
};
