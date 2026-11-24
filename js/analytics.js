{
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (link && link.hostname !== location.hostname) {
            window.umami?.track('Outbound link', { url: link.href });
        }
    });
}
