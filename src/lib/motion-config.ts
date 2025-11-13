/**
 * Framer Motion Performance Configuration
 * Optimizes animations for mobile devices
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if device is mobile (smaller screen or touch device)
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 'ontouchstart' in window;
};

// Simplified animation variants for mobile
export const getAnimationVariants = () => {
  const shouldReduceMotion = prefersReducedMotion();
  const isMobile = isMobileDevice();

  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.2 },
    };
  }

  if (isMobile) {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    };
  }

  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeInOut' },
  };
};

// Optimized viewport options
export const viewportOptions = {
  once: true,
  amount: isMobileDevice() ? 0.1 : 0.3, // Trigger earlier on mobile
  margin: isMobileDevice() ? '0px 0px -100px 0px' : '0px',
};

// Hover variants with mobile optimization
export const getHoverVariants = (scale = 1.05) => {
  if (isMobileDevice()) {
    return {}; // Disable hover effects on mobile
  }

  return {
    scale,
    transition: { duration: 0.2, ease: 'easeOut' },
  };
};

// Stagger children configuration
export const getStaggerConfig = () => {
  if (isMobileDevice()) {
    return {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    };
  }

  return {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  };
};

// Layout animation configuration
export const layoutTransition = {
  type: 'spring',
  stiffness: isMobileDevice() ? 200 : 100,
  damping: isMobileDevice() ? 20 : 10,
};
