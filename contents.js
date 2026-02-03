(() => {
    let scheduled = false;

    const removeDismissible = () => {
        document
            .querySelectorAll('#dismissible')
            .forEach(a => a.closest('#dismissible')?.remove());
        document
            .querySelectorAll('#scroll-outer-container')
            .forEach(a => a.closest('#scroll-outer-container')?.remove())
    };

    const schedule = () => {
        if (scheduled) return;
        scheduled = true;

        requestAnimationFrame(() => {
            scheduled = false;
            removeDismissible();
        });
    };

    // 최초 1회
    removeDismissible();

    new MutationObserver(schedule).observe(document.body, {
        childList: true,
        subtree: true
    });
})();


