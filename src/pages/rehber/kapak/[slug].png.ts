import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { posts } from '@data/blog';

/**
 * Gerçek fotoğrafı OLMAYAN her rehber yazısı için markalı bir kapak görseli (1200x630 PNG) üretir.
 * Çıktı: /rehber/kapak/<slug>.png — Article şemasında ve yazının başında <img> olarak kullanılır.
 * Gerçek iş fotoğrafı gelince (post.image) bu kapak yerine o kullanılır.
 */
export function getStaticPaths() {
  return posts.filter((p) => !p.image).map((p) => ({ params: { slug: p.slug }, props: { post: p } }));
}

const INK = '#0b1026';
const INK2 = '#121a3f';
const VOLT = '#4b3bff';
const SPARK = '#ffd23f';

const esc = (s: string) => s.replace(/[&<>]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]!));

/** Başlığı satırlara böler (kabaca maxChars karakter/satır, en fazla 4 satır). */
function wrap(text: string, maxChars = 22, maxLines = 4): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = w;
      if (lines.length === maxLines - 1) break;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line && lines.length < maxLines) lines.push(line.trim());
  return lines.length ? lines : [text];
}

export const GET: APIRoute = async ({ props }) => {
  const post = (props as any).post as { title: string; keyword: string };
  const lines = wrap(post.title, 24, 4);
  const fs = lines.length >= 4 ? 52 : lines.length === 3 ? 58 : 64;
  const startY = 300 - ((lines.length - 1) * fs) / 2;
  const tspans = lines
    .map((l, i) => `<tspan x="80" y="${Math.round(startY + i * (fs + 10))}">${esc(l)}</tspan>`)
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${INK2}"/><stop offset="1" stop-color="${INK}"/></linearGradient>
      <radialGradient id="glow" cx="0.85" cy="0.2" r="0.7"><stop offset="0" stop-color="${VOLT}" stop-opacity="0.5"/><stop offset="1" stop-color="${VOLT}" stop-opacity="0"/></radialGradient>
      <linearGradient id="ic" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${VOLT}"/><stop offset="1" stop-color="${INK}"/></linearGradient>
      <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0v52" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <g transform="translate(80 70)">
      <rect width="60" height="60" rx="15" fill="url(#ic)"/>
      <path d="M35.5 7 17 36a1.5 1.5 0 0 0 1.27 2.3H28l-2.9 16a.9.9 0 0 0 1.66.66L44.8 25.6A1.5 1.5 0 0 0 43.5 23.3H33.5l3.9-14.9A1.25 1.25 0 0 0 35.5 7Z" fill="${SPARK}" transform="scale(0.62) translate(18 12)"/>
    </g>
    <text x="152" y="108" font-family="Arial, sans-serif" font-size="26" font-weight="800" fill="#ffffff">Mr Volt <tspan fill="${SPARK}">· Rehber</tspan></text>
    <text font-family="Arial, sans-serif" font-size="${fs}" font-weight="800" fill="#ffffff">${tspans}</text>
    <rect x="80" y="500" width="${Math.min(760, 40 + post.keyword.length * 20)}" height="56" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/>
    <text x="104" y="536" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="${SPARK}">${esc(post.keyword)}</text>
  </svg>`;

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
