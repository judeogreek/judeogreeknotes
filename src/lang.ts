export const locales = { el: 'el-GR', en: 'en-GB', fr: 'fr-FR' };
export const langNames = { el: 'Ελληνικά', en: 'English', fr: 'Français' };
export const fmtDate = (d, lang) => d.toLocaleDateString(locales[lang] ?? 'el-GR', { year: 'numeric', month: 'long', day: 'numeric' });
export const catLabel = (c, lang) => (lang === 'el' ? c.el : c.en);
