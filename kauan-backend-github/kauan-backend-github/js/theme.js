const storageKey = 'kauan-portfolio-theme';

export function setTheme(theme, { persist = true } = {}) {
  const selected = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = selected;
  document.querySelector('#theme-select').value = selected;
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', selected === 'light' ? '#f8faf7' : '#111412');
  if (persist) {
    try {
      localStorage.setItem(storageKey, selected);
    } catch {
      /* Theme still works without storage. */
    }
  }
  return selected;
}

export function initializeTheme() {
  let saved;
  try {
    saved = localStorage.getItem(storageKey);
  } catch {
    /* Use system preference. */
  }
  const preference = window.matchMedia?.('(prefers-color-scheme: light)');
  setTheme(saved === 'light' || saved === 'dark' ? saved : preference?.matches ? 'light' : 'dark', {
    persist: false,
  });
  document
    .querySelector('#theme-select')
    .addEventListener('change', (event) => setTheme(event.target.value));
  preference?.addEventListener('change', (event) => {
    // Respect a manual choice even when the system's theme changes.
    if (!['light', 'dark'].includes(saved))
      setTheme(event.matches ? 'light' : 'dark', { persist: false });
  });
  document.querySelector('#theme-select').addEventListener('change', (event) => {
    saved = event.target.value;
  });
}
