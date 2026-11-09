import { getEntry } from 'astro:content';
// Αν το "author" ταιριάζει με αρχείο στο src/content/authors, εμφανίζεται το όνομα και το βιογραφικό.
// Αλλιώς εμφανίζεται απλώς το κείμενο που έγραψες.
export async function getAuthor(key) {
  if (!key) return null;
  const entry = await getEntry('authors', key);
  return entry ? { name: entry.data.name, entry } : { name: key, entry: null };
}
