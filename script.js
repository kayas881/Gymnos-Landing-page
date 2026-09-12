// Sticky top bar gains a background once the hero has scrolled past.
const topbar = document.getElementById('topbar');
const setScrolled = () => {
  topbar.classList.toggle('topbar--scrolled', window.scrollY > 40);
};
setScrolled();
window.addEventListener('scroll', setScrolled, { passive: true });

// Restrained scroll-reveal: fade + small rise, once per element, no bounce.
const revealTargets = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && revealTargets.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
