// Run before CSS loads to apply the saved or system theme without a flash.
(() => {
  let saved;
  try {
    saved = localStorage.getItem('kauan-portfolio-theme');
  } catch {
    /* Storage can be disabled. */
  }
  const theme =
    saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia?.('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#f8faf7' : '#111412');
})();
