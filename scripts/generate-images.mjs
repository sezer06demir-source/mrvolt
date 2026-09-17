/**
 * Görsel üretim scripti (build öncesi çalışır: `npm run images`).
 * Üretilenler:
 *  - public/favicon.ico            → gerçek ICO kabı (Mr Volt şimşek marka)
 *  - public/favicon.svg            → vektör favicon
 *  - public/icons/*                → PWA / apple-touch ikonları
 *  - public/og-image.png           → paylaşım görseli (1200x630)
 * Marka: indigo zemin (#0b1026 / #4b3bff) + kıvılcım şimşek (#ffd23f).
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = resolve(root, 'public');

const INK = '#0b1026';
const INK2 = '#121a3f';
const VOLT = '#4b3bff';
const VOLT2 = '#6e63ff';
const SPARK = '#ffd23f';

async function write(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, data);
  console.log('✓', path.replace(root, '').replace(/\\/g, '/'));
}

/* ---------------------------------------------------------------- marka şimşek ikonu */
// Yuvarlak köşeli indigo kare + ortada kıvılcım sarısı şimşek. Küçük boyutta da net.
const bolt = (fill) =>
  `<path d="M37.5 7 18 37.5a1.6 1.6 0 0 0 1.35 2.46H30l-3.1 17.2a1 1 0 0 0 1.83.73L47.9 27.3A1.6 1.6 0 0 0 46.55 24.8H35.7l4.2-16.1A1.35 1.35 0 0 0 37.5 7Z" fill="${fill}"/>`;

const iconSvg = (radius = 15) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${VOLT}"/><stop offset="1" stop-color="${INK}"/>
    </linearGradient>
    <radialGradient id="s" cx="0.5" cy="0.32" r="0.7">
      <stop offset="0" stop-color="${VOLT2}" stop-opacity="0.9"/><stop offset="1" stop-color="${VOLT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="64" height="64" rx="${radius}" fill="url(#g)"/>
  <rect width="64" height="64" rx="${radius}" fill="url(#s)"/>
  ${bolt(SPARK)}
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${INK}"/>
  ${bolt(SPARK)}
</svg>`;

/* ---------------------------------------------------------------- og image */
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${INK2}"/><stop offset="1" stop-color="${INK}"/></linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.24" r="0.7"><stop offset="0" stop-color="${VOLT}" stop-opacity="0.5"/><stop offset="1" stop-color="${VOLT}" stop-opacity="0"/></radialGradient>
    <linearGradient id="ic" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${VOLT}"/><stop offset="1" stop-color="${INK}"/></linearGradient>
    <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0v52" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(80 74)">
    <rect width="82" height="82" rx="19" fill="url(#ic)"/>
    <g transform="translate(9 9) scale(1.03)">${bolt(SPARK)}</g>
  </g>
  <text x="182" y="112" font-family="Arial, sans-serif" font-size="42" font-weight="800" fill="#ffffff" letter-spacing="0.5">Mr Volt</text>
  <text x="184" y="146" font-family="Arial, sans-serif" font-size="19" font-weight="600" fill="${SPARK}" letter-spacing="1">Ankara Elektrikçi · Elektrik Arıza Servisi</text>
  <text x="80" y="300" font-family="Arial, sans-serif" font-size="66" font-weight="800" fill="#ffffff">Elektrikte güven,</text>
  <text x="80" y="374" font-family="Arial, sans-serif" font-size="66" font-weight="800" fill="#ffffff">ustada <tspan fill="${SPARK}">tecrübe</tspan>.</text>
  <text x="80" y="436" font-family="Arial, sans-serif" font-size="25" font-weight="500" fill="#ffffff" fill-opacity="0.82">28+ yıl tecrübe · Sigorta, pano, kaçak akım, aydınlatma, tesisat</text>
  <rect x="80" y="486" width="392" height="74" rx="14" fill="${SPARK}"/>
  <text x="276" y="534" text-anchor="middle" font-family="Arial, sans-serif" font-size="33" font-weight="800" fill="#241a00">0506 254 76 78</text>
  <text x="510" y="532" font-family="Arial, sans-serif" font-size="23" font-weight="600" fill="#ffffff" fill-opacity="0.8">Ankara’nın tüm ilçelerine</text>
</svg>`;

/** PNG'yi geçerli bir ICO dosyasına sarar (sunucu image/x-icon + nosniff verdiği için şart). */
const icoFromPng = (pngBuf, size) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuf.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, pngBuf]);
};

async function main() {
  await write(resolve(pub, 'og-image.png'), await sharp(Buffer.from(ogSvg)).png({ quality: 90 }).toBuffer());
  await write(resolve(pub, 'favicon.svg'), faviconSvg.trim());

  const icon = Buffer.from(iconSvg());
  await write(resolve(pub, 'icons/icon-192.png'), await sharp(icon).resize(192, 192).png().toBuffer());
  await write(resolve(pub, 'icons/icon-512.png'), await sharp(icon).resize(512, 512).png().toBuffer());
  await write(resolve(pub, 'icons/apple-touch-icon.png'), await sharp(icon).resize(180, 180).png().toBuffer());
  await write(resolve(pub, 'icons/icon-512-maskable.png'), await sharp(Buffer.from(iconSvg(0))).resize(512, 512).png().toBuffer());
  await write(resolve(pub, 'favicon.ico'), icoFromPng(await sharp(icon).resize(32, 32).png().toBuffer(), 32));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
