document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const content = document.querySelector('.content-wrapper');
    let lastScroll = 0;
    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        document.documentElement.style.setProperty('--scrollY', `${scrollY}px`);

        // Дополнительный эффект для контента
        content.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;

        ticking = false;
    }

    function onScroll() {
        lastScroll = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();
});