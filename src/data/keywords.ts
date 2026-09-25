/**
 * Mr Volt — SEO hedef anahtar kelimeleri ve otomasyon durumu.
 * Haftalık otomasyon bu listeyi okur, "en az beslenen" kelimeye yeni bir rehber
 * yazısı ekler ve coveredBy alanını günceller. Böylece 10 kelime dengeli beslenir.
 */
export interface Keyword {
  term: string;
  /** ana hedef sayfa (varsa) */
  target?: string;
  /** bu kelimeyi destekleyen rehber yazısı slug'ları */
  coveredBy: string[];
}

export const keywords: Keyword[] = [
  { term: 'Ankara elektrikçi', target: '/', coveredBy: [] },
  { term: 'Sincan elektrikçi', target: '/hizmet-bolgeleri/sincan', coveredBy: [] },
  { term: 'Etimesgut elektrikçi', target: '/hizmet-bolgeleri/etimesgut', coveredBy: [] },
  { term: 'Çankaya elektrikçi', target: '/hizmet-bolgeleri/cankaya', coveredBy: [] },
  { term: 'Ankara acil elektrikçi', target: '/hizmetler/elektrik-ariza-tespiti', coveredBy: ['ankara-acil-elektrikci-nasil-bulunur'] },
  { term: 'elektrik arıza Ankara', target: '/hizmetler/elektrik-ariza-tespiti', coveredBy: [] },
  { term: 'kaçak akım rölesi Ankara', target: '/hizmetler/kacak-akim-rolesi', coveredBy: ['kacak-akim-rolesi-nedir-neden-atar'] },
  { term: 'sigorta atması Ankara', target: '/hizmetler/sigorta-pano', coveredBy: ['sigorta-neden-atar-ne-yapmali'] },
  { term: 'Keçiören elektrikçi', target: '/hizmet-bolgeleri/kecioren', coveredBy: [] },
  { term: 'Yenimahalle elektrikçi', target: '/hizmet-bolgeleri/yenimahalle', coveredBy: ['priz-isinmasi-notr-hatti-kopmasi-yenimahalle'] },
];
