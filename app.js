const ICONS = {
  camera:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.2"/></svg>',
  app: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/></svg>',
  game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="10" rx="5"/><path d="M7 10v4M5 12h4M15.5 11h.01M18 13h.01"/></svg>',
  music:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V6l10-2v11"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="15" r="2.5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5V4.5Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>',
  image:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m4 18 5.5-5 4 3.5L17 13l3 3"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  wallet:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18v3"/><rect x="3" y="7" width="18" height="12" rx="2.5"/><path d="M16 13h2"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.5 9.5h17M3.5 14.5h17M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
  telegram:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3c-.3-.3-.8-.4-1.2-.2L2.9 11.2c-.5.2-.8.7-.7 1.2.1.5.5.9 1 1l4 1.5 1.5 4.6c.1.4.4.7.9.8h.2c.4 0 .7-.2.9-.5l2.2-2.7 3.9 2.9c.2.2.5.3.7.3.2 0 .3 0 .5-.1.3-.2.5-.5.6-.8l3-13.9c.1-.5-.1-1-.4-1.2ZM9 13.7 6.6 12.8l9.5-5.9L9.4 14.7l-.4 2.6V13.7Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-6.6 7.5L21.8 21h-5.9l-4.6-6-5.3 6H3l7.1-8.1L2.5 3h6l4.2 5.6L17.5 3Zm-1 16h1.6L7.1 4.6H5.4L16.5 19Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z"/></svg>',
};

const PLATFORM_ICONS = {
  iphone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="3"/><path d="M10.5 5.5h3"/></svg>',
  android:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="7" width="13" height="12" rx="2.5"/><path d="M8 4l1.4 2.2M16 4l-1.4 2.2M9.5 12v2.5M14.5 12v2.5"/></svg>',
  desktop:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="12.5" rx="2.5"/><path d="M9 20.5h6M12 16.5v4"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.5 9.5h17M3.5 14.5h17M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 19.5h16"/></svg>',
};

const ARROW =
  '<span class="app-card__arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg></span>';

const LANGS = ["ku", "ar", "en"];
const LINK_PLATFORMS = ["iphone", "android", "desktop", "web"];
const CHOOSER_TEXT = {
  ku: {
    title: "هەڵبژاردنی شوێن",
    close: "داخستن",
    hint: "لینکێک هەڵبژێرە بۆ کردنەوە، یان فایلەکە دابەزێنە.",
    download: "داگرتنی فایلی ئەپ",
    open: "کردنەوەی ئەپی HTML",
  },
  ar: {
    title: "اختر المنصة",
    close: "إغلاق",
    hint: "اختر رابطًا لفتحه في تبويب جديد، أو نزّل الملف.",
    download: "تنزيل ملف التطبيق",
    open: "فتح تطبيق HTML",
  },
  en: {
    title: "Choose a platform",
    close: "Close",
    hint: "Pick a link to open in a new tab, or download the file.",
    download: "Download app file",
    open: "Open HTML app",
  },
};
const PREVIEW = new URLSearchParams(location.search).has("preview") && window.parent !== window;

function normalizeAppLinks(raw) {
  const links = [];
  const seen = new Set();
  const push = (platform, value, fileRaw) => {
    const url = safeUrl(value);
    const file = normalizeAppFile(fileRaw);
    if (!url && !file) return;
    if (url && seen.has(url)) return;
    if (url) seen.add(url);
    links.push({ platform: LINK_PLATFORMS.includes(platform) ? platform : "web", url: url || "", file });
  };
  if (raw && Array.isArray(raw.links)) {
    raw.links.forEach((item) => {
      if (item && typeof item === "object") push(item.platform, item.url, item.file);
    });
  } else if (raw && raw.links && typeof raw.links === "object") {
    LINK_PLATFORMS.forEach((platform) => push(platform, raw.links[platform]));
  }
  if (raw) push(raw.platform, raw.url);
  return links;
}

function appEntries(app) {
  const links = Array.isArray(app.links) ? app.links : normalizeAppLinks(app);
  const entries = [];
  const seenUrls = new Set();
  const seenFiles = new Set();
  links.forEach((link, index) => {
    if (!link || typeof link !== "object") return;
    const platform = LINK_PLATFORMS.includes(link.platform) ? link.platform : "web";
    const url = safeUrl(link.url);
    const file = normalizeAppFile(link.file);
    if (url && !seenUrls.has(url)) {
      seenUrls.add(url);
      entries.push({ kind: "link", platform, url });
    }
    if (file && !seenFiles.has(file.path)) {
      seenFiles.add(file.path);
      entries.push({ kind: "file", platform, file, index });
    }
  });
  const legacyFile = normalizeAppFile(app.file);
  if (legacyFile && !seenFiles.has(legacyFile.path)) {
    seenFiles.add(legacyFile.path);
    entries.push({ kind: "file", platform: app.platform, file: legacyFile, index: -1 });
  }
  const topUrl = safeUrl(app.url);
  if (topUrl && !seenUrls.has(topUrl)) {
    seenUrls.add(topUrl);
    entries.push({ kind: "link", platform: app.platform, url: topUrl });
  }
  return entries;
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return url;
  }
}

function normalizeAppFile(file) {
  if (!file || typeof file !== "object") return null;
  if (typeof file.path !== "string" || !file.path) return null;
  return {
    path: file.path,
    name: typeof file.name === "string" && file.name ? file.name : "app",
    size: Number.isInteger(file.size) ? file.size : 0,
  };
}

function fileExt(path) {
  const match = String(path || "").match(/\.([a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "file";
}

function formatBytes(bytes) {
  const value = Number(bytes) || 0;
  if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;
  if (value >= 1024) return `${Math.round(value / 1024)} KB`;
  return `${value} B`;
}

function downloadUrl(app) {
  return `https://mujahid-apps-hxa7lq1jak0.qoder.website/functions/v1/app/api/files/${encodeURIComponent(app.id)}`;
}

function isHtmlFile(file) {
  return Boolean(file) && ["html", "htm"].includes(fileExt(file.path));
}

function fileHref(app, entry, view) {
  const base = downloadUrl(app);
  return `${entry.index >= 0 ? `${base}/${entry.index}` : base}${view ? "?view=1" : ""}`;
}

function normalizeContent(data) {
  const fallback = window.SITE_DEFAULTS;
  if (!data || typeof data !== "object") return fallback;
  const i18n = {};
  LANGS.forEach((lang) => {
    const source = data.i18n && data.i18n[lang] ? data.i18n[lang] : {};
    i18n[lang] = {
      ...fallback.i18n[lang],
      ...source,
      platformNames: { ...fallback.i18n[lang].platformNames, ...(source.platformNames || {}) },
    };
  });
  const apps = (Array.isArray(data.apps) ? data.apps : fallback.apps).map((raw) => {
    const app = raw && typeof raw === "object" ? raw : {};
    const url = safeUrl(app.url);
    const links = normalizeAppLinks(app);
    return { ...app, url, links, file: normalizeAppFile(app.file) };
  });
  return {
    brand: { name: (data.brand && data.brand.name) || fallback.brand.name },
    meta: { ...fallback.meta, ...(data.meta || {}) },
    theme: { ...fallback.theme, ...(data.theme || {}) },
    apps,
    social: Array.isArray(data.social) ? data.social : fallback.social,
    i18n,
  };
}

let CONTENT = normalizeContent(window.SITE_DEFAULTS);

const state = {
  lang: "ku",
  filter: "all",
  query: "",
  socialOpen: false,
};

const els = {
  grid: document.getElementById("appGrid"),
  empty: document.getElementById("emptyState"),
  status: document.getElementById("resultStatus"),
  search: document.getElementById("searchInput"),
  theme: document.getElementById("themeToggle"),
  socialGrid: document.getElementById("socialGrid"),
  socialToggle: document.getElementById("socialToggle"),
  socialLabel: document.getElementById("socialToggleLabel"),
  socialPanel: document.getElementById("socialPanel"),
  statApps: document.getElementById("statApps"),
  statPlatforms: document.getElementById("statPlatforms"),
  linkChooser: document.getElementById("appLinks"),
  linksList: document.getElementById("appLinksList"),
  linksTitle: document.getElementById("appLinksTitle"),
  linksApp: document.getElementById("appLinksApp"),
  linksHint: document.getElementById("appLinksHint"),
  linksClose: document.getElementById("appLinksClose"),
};

function t(key) {
  const dict = CONTENT.i18n[state.lang] || CONTENT.i18n.ku;
  return key in dict ? dict[key] : key;
}

function esc(value) {
  return String(value == null ? "" : value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function safeUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url.trim()) ? url.trim() : "";
}

function safeImage(url) {
  if (typeof url !== "string") return "";
  const value = url.trim();
  if (/^https?:\/\//i.test(value)) return value;
  return /^data:image\/(?:png|jpe?g|webp|gif);base64,[a-z0-9+/=]+$/i.test(value) ? value : "";
}

function detectLang() {
  const stored = localStorage.getItem("mg-lang");
  if (stored && CONTENT.i18n[stored]) return stored;
  const nav = (navigator.language || "ku").toLowerCase();
  if (nav.startsWith("ar")) return "ar";
  return "ku";
}

function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
}

function applyBrandAndMeta() {
  document.querySelectorAll("[data-brand-name]").forEach((el) => {
    el.textContent = CONTENT.brand.name;
  });
  const brandLink = document.querySelector(".brand");
  if (brandLink) brandLink.setAttribute("aria-label", CONTENT.brand.name);

  if (CONTENT.meta.title) document.title = CONTENT.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description && CONTENT.meta.description) description.content = CONTENT.meta.description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && CONTENT.meta.title) ogTitle.content = CONTENT.meta.title;
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && CONTENT.meta.description) ogDescription.content = CONTENT.meta.description;
}

function updateStats() {
  const apps = CONTENT.apps || [];
  const count = String(apps.length).padStart(2, "0");
  const platforms = String(new Set(apps.map((app) => app.platform)).size).padStart(2, "0");
  if (els.statApps) els.statApps.textContent = count;
  if (els.statPlatforms) els.statPlatforms.textContent = platforms;
}

function getVisibleApps() {
  const q = state.query.trim().toLowerCase();
  return (CONTENT.apps || []).filter((app) => {
    if (state.filter !== "all" && app.platform !== state.filter) return false;
    if (!q) return true;
    const name = (app.name && app.name[state.lang]) || "";
    const desc = (app.desc && app.desc[state.lang]) || "";
    const tags = (app.tags && app.tags[state.lang]) || [];
    return [name, desc, ...tags].join(" ").toLowerCase().includes(q);
  });
}

function renderApps() {
  const apps = getVisibleApps();

  els.grid.innerHTML = apps
    .filter((app) => appEntries(app).length > 0)
    .map((app, index) => {
      const platformNames = t("platformNames") || {};
      const platformName = platformNames[app.platform] || app.platform;
      const tags = ((app.tags && app.tags[state.lang]) || [])
        .map((tag) => `<span class="tag">${esc(tag)}</span>`)
        .join("");
      const name = (app.name && app.name[state.lang]) || app.id || "";
      const desc = (app.desc && app.desc[state.lang]) || "";
      const image = safeImage(app.image);
      const entries = appEntries(app);
      const chooser = entries.length >= 2;
      const primary = entries[0];
      const primaryHtml = primary.kind === "file" && isHtmlFile(primary.file);
      const downloadOnly = primary.kind === "file" && !primaryHtml;
      const href = primary.kind === "file" ? fileHref(app, primary, primaryHtml) : primary.url;
      const fileEntry = entries.find((entry) => entry.kind === "file");
      const fileTag = fileEntry
        ? `<span class="tag tag--file">${esc(fileExt(fileEntry.file.path).toUpperCase())} · ${esc(
            formatBytes(fileEntry.file.size)
          )}</span>`
        : "";

      return `
        <article class="app-card" data-app-id="${esc(app.id)}" data-href="${esc(href)}"${
          downloadOnly ? ' data-download=""' : ""
        }${chooser ? ' aria-haspopup="dialog"' : ""} role="link" tabindex="0" aria-label="${esc(
          name
        )}" style="--i:${index}">
          <span class="app-card__icon${image ? " app-card__icon--image" : ""}" aria-hidden="true">${
            image ? `<img src="${esc(image)}" alt="" loading="lazy" />` : ICONS[app.icon] || ICONS.app
          }</span>
          <span class="app-card__body">
            <span class="app-card__top">
              <h3>${esc(name)}</h3>
              ${ARROW}
            </span>
            <span class="app-card__desc">${esc(desc)}</span>
            ${
              desc.trim()
                ? `<button type="button" class="app-card__more" data-more aria-expanded="false" hidden>${esc(
                    t("more")
                  )}</button>`
                : ""
            }
            <span class="app-card__tags">
              <span class="tag tag--platform">${PLATFORM_ICONS[app.platform] || ""}${esc(platformName)}</span>
              ${fileTag}
              ${tags}
            </span>
          </span>
        </article>`;
    })
    .join("");

  const visible = els.grid.querySelectorAll(".app-card").length;
  els.empty.hidden = visible > 0;
  els.empty.textContent = t("empty");

  const platformNames = t("platformNames") || {};
  const label = platformNames[state.filter];
  els.status.textContent = visible
    ? `${visible} ${visible === 1 ? t("resultsOne") : t("resultsMany")}${label ? ` — ${label}` : ""}`
    : t("empty");

  requestAnimationFrame(() => {
    els.grid.querySelectorAll(".app-card").forEach((card) => card.classList.add("is-visible"));
    els.grid.querySelectorAll("[data-more]").forEach((btn) => {
      const desc = btn.closest(".app-card").querySelector(".app-card__desc");
      const clampable = Boolean(desc && desc.textContent.trim()) && desc.scrollHeight - desc.clientHeight > 8;
      btn.hidden = !clampable;
      if (desc) desc.classList.toggle("is-clampable", clampable);
    });
  });
}

function toggleCardDesc(card) {
  const desc = card.querySelector(".app-card__desc");
  const more = card.querySelector("[data-more]");
  if (!desc) return;
  const expanded = desc.classList.toggle("is-expanded");
  desc.classList.toggle("is-clampable", !expanded);
  if (more) {
    more.setAttribute("aria-expanded", String(expanded));
    more.textContent = expanded ? t("less") : t("more");
  }
}

function openCardLink(card) {
  const href = card.dataset.href;
  if (!href) return;
  if (card.hasAttribute("data-download")) {
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

function chooserText() {
  return CHOOSER_TEXT[state.lang] || CHOOSER_TEXT.ku;
}

let chooserTrigger = null;

function openLinkChooser(app, entries, trigger) {
  const text = chooserText();
  chooserTrigger = trigger || null;
  els.linksTitle.textContent = text.title;
  els.linksApp.textContent = (app.name && app.name[state.lang]) || app.id || "";
  els.linksHint.textContent = text.hint;
  els.linksClose.setAttribute("aria-label", text.close);
  const platformNames = t("platformNames") || {};
  const rows = entries.map((entry) => {
    const platformName = platformNames[entry.platform] || entry.platform;
    if (entry.kind === "file") {
      const fileMeta = `${esc(fileExt(entry.file.path).toUpperCase())} · ${esc(formatBytes(entry.file.size))}`;
      const downloadRow = `
        <li>
          <a class="app-links__item app-links__item--download" href="${esc(fileHref(app, entry))}" download>
            <span class="app-links__icon app-links__icon--download" aria-hidden="true">${PLATFORM_ICONS.download}</span>
            <span class="app-links__text">
              <span class="app-links__name">${esc(text.download)} — ${esc(platformName)}</span>
              <span class="app-links__host" dir="ltr">${fileMeta}</span>
            </span>
            ${ARROW}
          </a>
        </li>`;
      if (!isHtmlFile(entry.file)) return downloadRow;
      return `
        <li>
          <a class="app-links__item" href="${esc(fileHref(app, entry, true))}" target="_blank" rel="noopener noreferrer">
            <span class="app-links__icon" aria-hidden="true">${PLATFORM_ICONS[entry.platform] || PLATFORM_ICONS.web}</span>
            <span class="app-links__text">
              <span class="app-links__name">${esc(text.open)} — ${esc(platformName)}</span>
              <span class="app-links__host" dir="ltr">${fileMeta}</span>
            </span>
            ${ARROW}
          </a>
        </li>${downloadRow}`;
    }
    return `
        <li>
          <a class="app-links__item" href="${esc(entry.url)}" target="_blank" rel="noopener noreferrer">
            <span class="app-links__icon" aria-hidden="true">${PLATFORM_ICONS[entry.platform] || PLATFORM_ICONS.web}</span>
            <span class="app-links__text">
              <span class="app-links__name">${esc(platformName)}</span>
              <span class="app-links__host" dir="ltr">${esc(hostOf(entry.url))}</span>
            </span>
            ${ARROW}
          </a>
        </li>`;
  });
  els.linksList.innerHTML = rows.join("");
  els.linkChooser.hidden = false;
  document.documentElement.classList.add("is-chooser-open");
  requestAnimationFrame(() => els.linkChooser.classList.add("is-open"));
  document.addEventListener("keydown", onChooserKeydown);
  const first = els.linksList.querySelector("a");
  if (first) first.focus();
}

function closeLinkChooser() {
  if (!els.linkChooser || els.linkChooser.hidden) return;
  els.linkChooser.hidden = true;
  els.linkChooser.classList.remove("is-open");
  document.documentElement.classList.remove("is-chooser-open");
  document.removeEventListener("keydown", onChooserKeydown);
  if (chooserTrigger && document.contains(chooserTrigger)) chooserTrigger.focus();
  chooserTrigger = null;
}

function onChooserKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeLinkChooser();
    return;
  }
  if (event.key !== "Tab") return;
  const focusables = els.linkChooser.querySelectorAll("a, button");
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderSocial() {
  const links = (CONTENT.social || []).filter((item) => safeUrl(item.url));
  els.socialGrid.innerHTML = links
    .map(
      (item) => `
        <a class="social-link" href="${esc(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">
          <span class="social-link__icon" aria-hidden="true">${ICONS[item.icon] || ICONS.app}</span>
          <span>${esc(item.label)}</span>
        </a>`
    )
    .join("");
  els.socialToggle.hidden = links.length === 0;
  if (!links.length) {
    els.socialPanel.hidden = true;
    state.socialOpen = false;
  }
}

function setLanguage(lang) {
  if (!CONTENT.i18n[lang]) return;
  closeLinkChooser();
  state.lang = lang;
  if (!PREVIEW) localStorage.setItem("mg-lang", lang);
  document.documentElement.lang = lang === "en" ? "en" : lang === "ar" ? "ar" : "ckb";
  document.documentElement.dir = CONTENT.i18n[lang].dir || (lang === "en" ? "ltr" : "rtl");

  document.querySelectorAll(".seg__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  applyStaticText();
  renderApps();

  els.socialLabel.textContent = state.socialOpen ? t("socialHide") : t("socialShow");
  els.socialToggle.setAttribute("aria-expanded", String(state.socialOpen));
  updateThemeLabel();
}

function updateThemeLabel() {
  els.theme.setAttribute("aria-label", t("themeToggle"));
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (!PREVIEW) localStorage.setItem("mg-theme", theme);
  window.MGTheme.apply(CONTENT.theme, theme);
}

function toggleSocial() {
  state.socialOpen = !state.socialOpen;
  els.socialPanel.hidden = !state.socialOpen;
  els.socialToggle.setAttribute("aria-expanded", String(state.socialOpen));
  els.socialLabel.textContent = state.socialOpen ? t("socialHide") : t("socialShow");
}

function applyContent() {
  closeLinkChooser();
  window.MGTheme.apply(CONTENT.theme, document.documentElement.dataset.theme);
  applyBrandAndMeta();
  applyStaticText();
  updateStats();
  renderApps();
  renderSocial();
  els.socialLabel.textContent = state.socialOpen ? t("socialHide") : t("socialShow");
  els.socialToggle.setAttribute("aria-expanded", String(state.socialOpen));
  updateThemeLabel();
}

async function loadRemoteContent() {
  try {
    const response = await fetch("/functions/v1/app/api/content", {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) return;
    const payload = await response.json();
    if (!payload || !payload.data || !payload.data.i18n) return;
    CONTENT = normalizeContent(payload.data);
    applyContent();
  } catch (error) {
    /* The defaults remain in place when the backend is unreachable. */
  }
}

function init() {
  state.lang = detectLang();
  window.MGTheme.apply(CONTENT.theme, document.documentElement.dataset.theme);
  setLanguage(state.lang);
  applyContent();

  els.theme.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  document.querySelectorAll(".seg__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.filter = chip.dataset.filter;
      document.querySelectorAll(".chip").forEach((item) => {
        const active = item === chip;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderApps();
    });
  });

  els.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderApps();
  });

  els.socialToggle.addEventListener("click", toggleSocial);

  els.grid.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const cardHit = event.target.closest(".app-card");
    const desc = event.target.closest(".app-card__desc");
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (cardHit && desc && !coarse) {
      const expandable = desc.classList.contains("is-clampable") || desc.classList.contains("is-expanded");
      if (expandable) {
        event.preventDefault();
        event.stopPropagation();
        toggleCardDesc(cardHit);
        return;
      }
    }
    const more = event.target.closest("[data-more]");
    if (more) {
      event.preventDefault();
      event.stopPropagation();
      const card = more.closest(".app-card");
      if (card) toggleCardDesc(card);
      return;
    }
    const card = cardHit;
    if (!card) return;
    const app = (CONTENT.apps || []).find((item) => item.id === card.dataset.appId);
    if (!app) return;
    const entries = appEntries(app);
    if (entries.length >= 2) {
      event.preventDefault();
      openLinkChooser(app, entries, card);
      return;
    }
    openCardLink(card);
  });

  els.grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".app-card");
    if (!card || card !== event.target) return;
    event.preventDefault();
    const app = (CONTENT.apps || []).find((item) => item.id === card.dataset.appId);
    if (!app) return;
    const entries = appEntries(app);
    if (entries.length >= 2) openLinkChooser(app, entries, card);
    else openCardLink(card);
  });

  if (els.linkChooser) {
    els.linkChooser.addEventListener("click", (event) => {
      if (event.target.closest("[data-links-close]")) closeLinkChooser();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  }

  if (PREVIEW) {
    document.documentElement.classList.add("is-preview");
    window.addEventListener("message", (event) => {
      if (event.origin !== location.origin) return;
      const message = event.data;
      if (!message || message.type !== "mg:preview:update") return;
      if (message.theme === "dark" || message.theme === "light") {
        document.documentElement.dataset.theme = message.theme;
      }
      CONTENT = normalizeContent(message.content);
      applyContent();
    });
    if (window.parent !== window) {
      window.parent.postMessage({ type: "mg:preview:ready" }, location.origin);
    }
  } else {
    loadRemoteContent();
  }
}

function hideBoot() {
  const boot = document.getElementById("boot");
  if (!boot || boot.classList.contains("is-done")) return;
  requestAnimationFrame(() => requestAnimationFrame(() => boot.classList.add("is-done")));
}

init();
hideBoot();
setTimeout(hideBoot, 2000);
