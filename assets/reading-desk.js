/* Browser-local reading desk: history, saved book pages and reading progress. */
(() => {
  'use strict';

  const HISTORY_KEY = 'grand-library:visited-pages';
  const SEED_PREFIX = 'grand-library:seed-morphology:v2:';
  const INDEX_PREFIX = 'grand-library:living-index:';
  const relevantKeys = new Set([
    HISTORY_KEY, SEED_PREFIX + 'favourites', SEED_PREFIX + 'progress',
    INDEX_PREFIX + 'favourites', INDEX_PREFIX + 'progress'
  ]);
  const scriptUrl = document.currentScript && document.currentScript.src;
  const libraryBase = new URL('../', scriptUrl || new URL('assets/reading-desk.js', window.location.href));
  const seedBook = 'departments/natural-sciences/botany/seeds/seed-morphology-classification/';
  const livingBook = 'departments/natural-sciences/botany/taxonomy/the-living-index/';
  const seedEntries = [
    ['block-intro-food', 'Food Seeds'], ['entry-wheat', 'Wheat'],
    ['entry-rice', 'Rice'], ['entry-maize', 'Maize'], ['entry-lentil', 'Lentil'],
    ['entry-bean', 'Common Bean'], ['entry-chickpea', 'Chickpea'],
    ['block-intro-garden', 'Garden & Vegetable Seeds'], ['entry-pumpkin', 'Pumpkin'],
    ['entry-potato', 'Potato'], ['entry-cucumber', 'Cucumber'],
    ['entry-eggplant', 'Eggplant'], ['entry-tomato', 'Tomato'],
    ['entry-bell-pepper', 'Bell Pepper'], ['entry-garden-pea', 'Garden Pea'],
    ['entry-carrot', 'Carrot'], ['entry-lettuce', 'Lettuce'],
    ['entry-radish', 'Radish'], ['entry-spinach', 'Spinach'], ['entry-beetroot', 'Beetroot']
  ];
  const seedTitles = new Map(seedEntries);

  function read(key) {
    try { return window.localStorage.getItem(key); } catch (_) { return null; }
  }

  function readArray(key) {
    try {
      const value = JSON.parse(read(key));
      return Array.isArray(value) ? value : [];
    } catch (_) { return []; }
  }

  function validIndex(value) {
    return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0 && value < Number.MAX_SAFE_INTEGER;
  }

  function readProgress(key) {
    const value = read(key);
    if (typeof value !== 'string' || !/^(0|[1-9]\d*)$/.test(value)) return null;
    const index = Number(value);
    return validIndex(index) ? index : null;
  }

  function historyUrl(value) {
    if (typeof value !== 'string' || !value.trim() || /[\\\u0000-\u001f\u007f]/.test(value)) return null;
    try {
      const url = new URL(value, libraryBase);
      if (url.origin !== libraryBase.origin || url.username || url.password) return null;
      if (!url.pathname.startsWith(libraryBase.pathname) || /%2f|%5c/i.test(url.pathname)) return null;
      const relative = decodeURIComponent(url.pathname.slice(libraryBase.pathname.length));
      if (relative.split('/').some(part => part === '.' || part === '..')) return null;
      if (relative && !relative.endsWith('/') && !relative.endsWith('.html')) return null;
      if (relative.startsWith('assets/') || relative.startsWith('.')) return null;
      return url;
    } catch (_) { return null; }
  }

  function fallbackTitle(url) {
    const parts = decodeURIComponent(url.pathname.slice(libraryBase.pathname.length)).split('/').filter(Boolean);
    if (parts[parts.length - 1] === 'index.html') parts.pop();
    const name = parts.pop();
    return name ? name.replace(/\.html$/, '').replace(/-/g, ' ') : 'The Grand Library of the Realms';
  }

  function renderList(list, entries, emptyText) {
    if (!list) return;
    const items = entries.map(entry => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = entry.url;
      link.textContent = entry.title;
      item.appendChild(link);
      return item;
    });
    if (!items.length) {
      const empty = document.createElement('li');
      empty.textContent = emptyText;
      items.push(empty);
    }
    list.replaceChildren(...items);
  }

  function historyEntries() {
    const seen = new Set();
    const entries = [];
    for (const item of readArray(HISTORY_KEY)) {
      if (!item || typeof item !== 'object') continue;
      const url = historyUrl(item.url);
      if (!url) continue;
      const key = url.pathname.replace(/\/index\.html$/, '/');
      if (seen.has(key)) continue;
      seen.add(key);
      const title = typeof item.title === 'string' && item.title.trim()
        ? item.title.replace(/\s+/g, ' ').trim() : fallbackTitle(url);
      entries.push({ url: url.href, title });
      if (entries.length === 20) break;
    }
    return entries;
  }

  function favouriteEntries() {
    const entries = [];
    const seenSeeds = new Set();
    for (const id of readArray(SEED_PREFIX + 'favourites')) {
      if (typeof id !== 'string' || !seedTitles.has(id) || seenSeeds.has(id)) continue;
      seenSeeds.add(id);
      entries.push({
        url: new URL(seedBook + '#' + id, libraryBase).href,
        title: seedTitles.get(id) + ' · Seed Morphology & Classification'
      });
    }
    const seenPages = new Set();
    for (const index of readArray(INDEX_PREFIX + 'favourites')) {
      if (!validIndex(index) || seenPages.has(index)) continue;
      seenPages.add(index);
      entries.push({
        url: new URL(livingBook + '?readerPage=' + index + '#book-reader', libraryBase).href,
        title: 'The Living Index · Page ' + (index + 1)
      });
    }
    return entries;
  }

  function progressEntries() {
    const entries = [];
    const seedIndex = readProgress(SEED_PREFIX + 'progress');
    if (seedIndex !== null && seedIndex < seedEntries.length) {
      entries.push({
        url: new URL(seedBook + '?readerEntry=' + seedIndex + '#field-guide', libraryBase).href,
        title: 'Seed Morphology & Classification · Entry ' + (seedIndex + 1) + ': ' + seedEntries[seedIndex][1]
      });
    }
    const livingIndex = readProgress(INDEX_PREFIX + 'progress');
    if (livingIndex !== null) {
      entries.push({
        url: new URL(livingBook + '?readerPage=' + livingIndex + '#book-reader', libraryBase).href,
        title: 'The Living Index · Page ' + (livingIndex + 1)
      });
    }
    return entries;
  }

  function init() {
    const historyList = document.getElementById('reading-history-list');
    const favouritesList = document.getElementById('reading-favourites-list');
    const progressList = document.getElementById('reading-progress-list');
    if (!historyList && !favouritesList && !progressList) return;
    const renderHistory = () => renderList(historyList, historyEntries(), 'No reading history yet. Visit a Library page to begin.');
    const render = () => {
      renderHistory();
      renderList(favouritesList, favouriteEntries(), 'No saved pages yet. Use “Save this page” while reading a book.');
      renderList(progressList, progressEntries(), 'No reading progress yet. Open a book to begin.');
    };
    const clear = document.getElementById('reading-desk-clear');
    if (clear) clear.addEventListener('click', () => {
      try { window.localStorage.removeItem(HISTORY_KEY); } catch (_) {}
      renderHistory();
    });
    window.addEventListener('storage', event => {
      if (event.key === null || relevantKeys.has(event.key)) render();
    });
    window.addEventListener('pageshow', render);
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
