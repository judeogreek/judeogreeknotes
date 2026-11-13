// Οι κατηγορίες του site (ελληνικό και αγγλικό όνομα).
export const categories = [
  { el: 'Ιστορία', en: 'History', slug: 'istoria' },
  { el: 'Άρθρα γνώμης', en: 'Opinion pieces', slug: 'arthra-gnomis' },
  { el: 'Βιβλιοκριτικές', en: 'Book reviews', slug: 'vivliokritikes' },
  { el: 'Συνεντεύξεις', en: 'Interviews', slug: 'synenteuxeis' },
  { el: 'Νέες εκδόσεις', en: 'New publications', slug: 'nees-ekdoseis' },
];
export const byName = (name) => categories.find((c) => c.el === name || c.en === name);
