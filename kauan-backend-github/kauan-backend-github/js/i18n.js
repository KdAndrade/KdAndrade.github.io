import { ptBR } from './data/translations.js';

export const supportedLocales = ['en-US', 'pt-BR'];
const storageKey = 'kauan-portfolio-language';
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

export function resolveLocale(locale) {
  return typeof locale === 'string' && /^pt(?:-|$)/i.test(locale) ? 'pt-BR' : 'en-US';
}

export function translateText(text, locale) {
  if (locale !== 'pt-BR') return text;
  const key = text.trim().replace(/\s+/g, ' ');
  if (!Object.hasOwn(ptBR, key)) return text;
  const leadingWhitespace = text.match(/^\s*/)[0];
  const trailingWhitespace = text.match(/\s*$/)[0];
  return `${leadingWhitespace}${ptBR[key]}${trailingWhitespace}`;
}

export function setLanguage(locale, { persist = true } = {}) {
  const language = resolveLocale(locale);
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement.closest('script, style, noscript')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    },
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    node.nodeValue = translateText(originalText.get(node), language);
  }
  document
    .querySelectorAll(
      '[aria-label], title, meta[name="description"], meta[property="og:title"], meta[property="og:description"]',
    )
    .forEach((element) => {
      const attribute =
        element.tagName === 'META' ? 'content' : element.tagName === 'TITLE' ? null : 'aria-label';
      if (!originalAttributes.has(element))
        originalAttributes.set(
          element,
          attribute ? element.getAttribute(attribute) : element.textContent,
        );
      const value = translateText(originalAttributes.get(element), language);
      if (attribute) element.setAttribute(attribute, value);
      else element.textContent = value;
    });
  document
    .querySelector('meta[property="og:locale"]')
    .setAttribute('content', language.replace('-', '_'));
  document.querySelector('#language-select').value = language;
  if (persist) {
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      /* Storage may be disabled; switching still works. */
    }
  }
  return language;
}

export function initializeLanguage() {
  let saved;
  try {
    saved = localStorage.getItem(storageKey);
  } catch {
    /* Use the browser's language instead. */
  }
  const locale = supportedLocales.includes(saved) ? saved : navigator.language;
  setLanguage(locale, { persist: false });
  document
    .querySelector('#language-select')
    .addEventListener('change', (event) => setLanguage(event.target.value));
}
