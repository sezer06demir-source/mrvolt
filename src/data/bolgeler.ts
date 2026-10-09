/**
 * Sincan ve Etimesgut tarafında hizmet verilen bölgeler.
 * Sayfası olanlar districts.ts'teki slug ile bağlanır; `sayfa` verilenler o bölgenin sayfasına
 * (ör. Yenikent'teki TOKİ'ler → Yenikent), hiçbiri yoksa düz metin kalır.
 * SeoTags bloğu ve rehber yazılarının bölge tespiti bu listeyi kullanır.
 */
import { districts } from './districts';

const SINCAN_ETIMESGUT: { name: string; sayfa?: string }[] = [
  { name: 'Sincan' },
  { name: 'Yenikent' },
  { name: 'İlksan TOKİ', sayfa: 'Yenikent' },
  { name: 'Ortapınar TOKİ', sayfa: 'Yenikent' },
  { name: 'Törekent' },
  { name: 'Fatih' },
  { name: '29 Ekim' },
  { name: 'Fevzi Çakmak' },
  { name: 'Menderes' },
  { name: 'Plevne' },
  { name: 'Pınarbaşı' },
  { name: 'Mevlana' },
  { name: 'Ahi Evran' },
  { name: 'Mareşal Çakmak' },
  { name: 'Saraycık' },
  { name: 'Saraycık TOKİ' },
  { name: 'Etimesgut' },
  { name: 'Eryaman' },
  { name: 'Elvankent' },
  { name: 'Bağlıca' },
  { name: 'Göksu' },
  { name: 'Şeyh Şamil' },
  { name: 'Ahimesut' },
  { name: 'Devlet Mahallesi' },
  { name: 'Şeker Mahallesi' },
  { name: 'İstasyon' },
];

export const yakinBolgeler: { name: string; href?: string }[] = SINCAN_ETIMESGUT.map(({ name, sayfa }) => {
  const d = districts.find((x) => x.name === (sayfa ?? name));
  return { name, href: d ? `/hizmet-bolgeleri/${d.slug}` : undefined };
});

const ILCELER = ['Sincan', 'Etimesgut'];

/** Metinde geçen en belirgin bölge: önce Sincan/Etimesgut mahalle ve semtleri, sonra ilçeler, sonra diğer hizmet bölgeleri. */
export function bolgeBul(metin: string): string | undefined {
  const kisa = (n: string) => n.replace(' Mahallesi', '');
  const adlar = SINCAN_ETIMESGUT.map((b) => b.name)
    .filter((n) => !ILCELER.includes(n))
    .sort((a, b) => b.length - a.length);
  return (
    adlar.find((n) => metin.includes(kisa(n))) ??
    ILCELER.find((n) => metin.includes(n)) ??
    districts.map((d) => d.name).find((n) => metin.includes(n))
  );
}
