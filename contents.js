(() => {
    const isAllowed = () => {
        const { pathname } = window.location;
        return (
            pathname === '/' ||
            pathname === '/watch' ||
            pathname.startsWith('/@')
        );
    };

    // 처음 실행 시점에 허용 페이지 아니면 종료
    if (!isAllowed()) return;

    let scheduled = false;

    const removeDismissible = () => {
        if (!isAllowed()) return;

        document
            .querySelectorAll('#dismissible.ytd-rich-shelf-renderer')
            .forEach(el => el.remove()); // closest 불필요

        document
            .querySelectorAll('#endpoint[title="Shorts"]')
            .forEach(el => el.remove());

        document
            .querySelectorAll('yt-tab-shape[tab-title="Shorts"]')
            .forEach(el => el.remove());

        document
            .querySelectorAll('#scroll-outer-container.yt-horizontal-list-renderer')
            .forEach(container => {
                const hasShorts =
                    container.querySelector('#endpoint[title="Shorts"]') ||
                    container.querySelector('a[href^="/shorts"]') ||
                    container.querySelector('yt-tab-shape[tab-title="Shorts"]') ||
                    container.querySelector('#dismissible.ytd-rich-shelf-renderer');

                if (hasShorts) container.remove();
            });
    };

    const schedule = () => {
        if (!isAllowed()) {
            observer.disconnect();
            return;
        }

        if (scheduled) return;
        scheduled = true;

        requestAnimationFrame(() => {
            scheduled = false;
            removeDismissible();
        });
    };

    const observer = new MutationObserver(schedule);

    // 최초 1회
    removeDismissible();

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
