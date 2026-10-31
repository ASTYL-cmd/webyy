#!/usr/bin/env node
// Downloads the founder photo from their ibb.co pages into /public/assets.
// Run locally (needs internet + Node 18+):   node scripts/fetch-assets.mjs
// Optional WebP conversion if `sharp` is installed:   npm i --no-save sharp
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets');

const ASSETS = [
  { page: 'https://ibb.co/NdXvP47d', out: 'atul-mishra', maxWidth: 800 },
];

let sharp = null;
try { sharp = (await import('sharp')).default; } catch { /* optional */ }

for (const a of ASSETS) {
  const html = await (await fetch(a.page)).text();
  const m = html.match(/<meta property="og:image" content="([^"]+)"/i);
  if (!m) { console.error(`✗ ${a.page}: direct image URL not found`); continue; }
  const res = await fetch(m[1]);
  if (!res.ok) { console.error(`✗ ${m[1]}: HTTP ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = (m[1].split('?')[0].split('.').pop() || 'png').toLowerCase();
  const base = join(root, a.out);
  await mkdir(dirname(base), { recursive: true });

  // Always keep the untouched original.
  await writeFile(`${base}.original.${ext}`, buf);
  if (sharp) {
    let img = sharp(buf);
    if (a.maxWidth) img = img.resize({ width: a.maxWidth, withoutEnlargement: true });
    await img.webp({ quality: 85 }).toFile(`${base}.webp`); // transparency preserved
    console.log(`✓ ${a.out}.webp (from ${m[1]})`);
  } else {
    await writeFile(`${base}.${ext}`, buf);
    console.log(`✓ ${a.out}.${ext} — sharp not installed; convert to .webp or update src/config.ts → assets`);
  }
}
