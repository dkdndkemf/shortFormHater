(() => {
    let scheduled = false;

    const removeDismissible = () => {
        document
            .querySelectorAll('#dismissible.ytd-rich-shelf-renderer')
            .forEach(a => a.closest('#dismissible.ytd-rich-shelf-renderer')?.remove());
        document
            .querySelectorAll('#endpoint[title="Shorts"]')
            .forEach(el => el.remove());
        document
            .querySelectorAll('yt-tab-shape[tab-title="Shorts"]')
            .forEach(el => el.remove());
        document
            .querySelectorAll('#scroll-outer-container.yt-horizontal-list-renderer')
            .forEach(a => a.closest('#scroll-outer-container.yt-horizontal-list-renderer')?.remove())
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


