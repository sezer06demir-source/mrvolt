import { SITE_URL } from './site-url.mjs';

/**
 * Mr Volt — firma bilgileri (tek kaynak).
 * Ankara merkezli elektrikçi / elektrik arıza servisi. Açık adres yok; Ankara geneli.
 */
export const site = {
  name: 'Mr Volt',
  brand: 'Mr Volt',
  legalName: 'Mr Volt Elektrik',
  url: SITE_URL,
  tagline: 'Ankara Elektrikçi',
  slogan: 'Elektrikte Güven, Ustada Tecrübe',
  description:
    "Mr Volt, Ankara'da elektrik arızalarına aynı gün çözen deneyimli elektrik ekibi. Sigorta ve pano, kaçak akım, priz-anahtar, aydınlatma ve tesisat işleri. 28+ yıllık tecrübe. Tel: 0506 254 76 78.",

  phone: {
    display: '0506 254 76 78',
    href: 'tel:+905062547678',
    e164: '+905062547678',
    international: '+90 506 254 76 78',
  },

  whatsapp: {
    number: '905062547678',
    message: "Merhaba, Ankara'da elektrik arızam var. Yardımcı olabilir misiniz?",
    get href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  address: {
    city: 'Ankara',
    region: 'Ankara',
    country: 'Türkiye',
    countryCode: 'TR',
    full: 'Ankara, Türkiye',
    areaLabel: 'Ankara ve tüm ilçeleri',
  },

  hours: {
    display: '08:00 – 23:00',
    opens: '08:00',
    closes: '23:00',
    daysText: 'Haftanın 7 günü',
  },

  experienceYears: 28,
  responseText: 'Çağrınıza aynı gün dönüyor, kısa sürede kapınızda oluyoruz',
} as const;

export const nav = [
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Bölgeler', href: '/hizmet-bolgeleri' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Sık sorulanlar', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

/** Ana sayfada "şu an ne yaşıyorsunuz" — arıza anındaki müşteri durumu, sade dille. */
export const situations = [
  {
    icon: 'fuse',
    title: 'Sigorta durmuyor, sürekli atıyor',
    text: 'Kaldırıyorsunuz, birkaç dakika sonra yine iniyor. Genelde bir cihazda ya da hatta kaçak vardır; ölçerek kaynağını buluruz.',
    slug: 'sigorta-pano',
  },
  {
    icon: 'power-off',
    title: 'Evin bir bölümünde elektrik yok',
    text: 'Salon yanıyor, mutfak karanlık. Sigorta sağlamsa sorun genelde hatta ya da bir ek yerindedir.',
    slug: 'elektrik-ariza-tespiti',
  },
  {
    icon: 'spark',
    title: 'Prizde kıvılcım, yanık kokusu var',
    text: 'Gevşek bağlantı ya da ısınan kablo işareti. O prizi kullanmayın, hattın sigortasını indirin ve bizi arayın.',
    slug: 'priz-anahtar',
  },
  {
    icon: 'shield',
    title: 'Cihaza dokununca hafif çarpıyor',
    text: 'Kaçak akım ya da topraklama sorunu olabilir. Kaçak akım rölesi yoksa veya çalışmıyorsa vakit kaybetmeden bakılmalı.',
    slug: 'kacak-akim-rolesi',
  },
] as const;

/** Neden Mr Volt — gerçekçi, abartısız maddeler. */
export const promises = [
  {
    icon: 'phone',
    title: 'Telefonda ön teşhis',
    text: 'Aradığınızda birkaç soruyla sorunu daraltırız. Bazı arızaları telefonda çözeriz; o zaman gelmeye gerek kalmaz.',
  },
  {
    icon: 'clock',
    title: 'Aynı gün müdahale',
    text: 'Ankara içinde çağrınıza aynı gün döner, yakın ilçelerde çoğu zaman kısa sürede kapınızda oluruz.',
  },
  {
    icon: 'tag',
    title: 'Ücreti işe başlamadan söyleriz',
    text: 'Tespitten sonra ne yapılacağını ve ücretini açıkça söyleriz; onayınızı almadan işe başlamayız.',
  },
  {
    icon: 'tools',
    title: 'Malzeme araçta hazır',
    text: 'Sigorta, kaçak akım rölesi, priz, anahtar ve kablo araçta bulunur; çoğu arıza tek gelişte biter.',
  },
] as const;

export const stats = [
  { value: '28+', label: 'yıl saha tecrübesi' },
  { value: '10', label: 'ilçeye hizmet' },
  { value: 'Aynı gün', label: 'müdahale' },
  { value: '7 gün', label: 'ulaşılabiliriz' },
] as const;

/** Ana sayfa altındaki, insanların Google'a yazdığı doğal ifadeler. */
export const searchTags = [
  { label: 'Ankara elektrikçi', href: '/hizmetler' },
  { label: 'En yakın elektrikçi', href: '/hizmet-bolgeleri' },
  { label: 'Acil elektrik arıza', href: '/hizmetler/elektrik-ariza-tespiti' },
  { label: 'Sigorta atıyor ne yapmalı', href: '/hizmetler/sigorta-pano' },
  { label: 'Kaçak akım rölesi atıyor', href: '/hizmetler/kacak-akim-rolesi' },
  { label: 'Priz yanığı, kıvılcım', href: '/hizmetler/priz-anahtar' },
  { label: 'Avize montajı', href: '/hizmetler/aydinlatma-avize' },
  { label: 'Elektrik tesisatı ustası', href: '/hizmetler/elektrik-tesisati' },
  { label: 'Sigorta kutusu yenileme', href: '/hizmetler/sigorta-pano' },
] as const;

/** Yıldızlı müşteri yorumları — TEMSİLİ. Gerçek Google yorumları geldikçe güncellenecek. */
export const reviews = [
  { name: 'Serkan A.', area: 'Etimesgut', rating: 5, text: 'Akşam saatinde sigorta attı, aradıktan bir saat sonra geldiler. Sorun bir prizdeki kaçaktı, hemen çözüldü. Fiyatı da baştan söylediler.' },
  { name: 'Elif K.', area: 'Çankaya', rating: 5, text: 'Salonun yarısı elektriksizdi, birkaç yeri kontrol edip ek yerindeki gevşemeyi buldular. Temiz ve hızlı çalıştılar, teşekkürler.' },
  { name: 'Murat D.', area: 'Sincan', rating: 5, text: 'Panoyu komple yeniledik, kaçak akım rölesi de taktılar. İşçilik gerçekten düzgün, kablolar tertemiz bağlanmış.' },
  { name: 'Ayşe T.', area: 'Keçiören', rating: 5, text: 'Avize ve spotların montajı için geldiler. Randevuya vaktinde geldiler, yerleri de kirletmeden topladılar.' },
  { name: 'Hakan Y.', area: 'Yenimahalle', rating: 4, text: 'İş yerinde priz hattı çektirdim. Biraz yoğunluktan ötürü öğleden sonra gelebildiler ama iş kaliteliydi.' },
  { name: 'Zeynep B.', area: 'Mamak', rating: 5, text: 'Eski binada sürekli sigorta atıyordu. Tek tek ölçüp arızalı hattı buldular. Artık hiç sorun yok, çok memnunum.' },
  { name: 'Emre C.', area: 'Yenikent', rating: 5, text: 'Yeni taşındığımız evde priz ve anahtarları değiştirdiler. Telefonda da önce ne yapılacağını anlattılar, güven verdi.' },
  { name: 'Selin M.', area: 'Gölbaşı', rating: 5, text: 'İncek’teki villada bahçe ve dış aydınlatma yaptılar. Ölçülü ve işini bilen bir ekip, sonuç çok şık oldu.' },
  { name: 'Okan R.', area: 'Pursaklar', rating: 5, text: 'Kombinin beslemesinde sorun vardı, aynı gün geldiler. Nazik ve dürüst insanlar, gereksiz masraf çıkarmadılar.' },
  { name: 'Derya S.', area: 'Etimesgut', rating: 5, text: 'Mağazanın aydınlatmasını baştan kurdular. Ray spot ve LED işini çok temiz yaptılar, müşteriler bile fark etti.' },
  { name: 'Barış Ö.', area: 'Kahramankazan', rating: 4, text: 'Uzak diye düşünmüştüm ama geldiler. Sigorta kutusunu düzenlediler, etiketleyip teslim ettiler.' },
  { name: 'Gizem A.', area: 'Çankaya', rating: 5, text: 'Priz çarpıyordu, topraklama eksikmiş. Kaçak akım rölesini takıp test ettiler. Güvenli hissettirdi, tavsiye ederim.' },
] as const;

/** Nasıl çalışırız — gerçek bir sıra olduğu için numaralandırma uygun. */
export const steps = [
  { title: 'Arayın, anlatın', text: 'Sorunu telefonda birkaç soruyla netleştirir, çözülebilecekse orada çözeriz.' },
  { title: 'Aynı gün geliriz', text: 'Uygun ekibi yönlendiririz; adresinize aynı gün, çoğu zaman kısa sürede ulaşırız.' },
  { title: 'Bulur, fiyat veririz', text: 'Arızayı ölçerek tespit eder, yapılacak işi ve ücretini net söyleriz.' },
  { title: 'Onayla, bitir', text: 'Onayınızla işe başlar, biten işi test ederek ve yerinizi toplayarak teslim ederiz.' },
] as const;

export const formProblems = [
  'Sigorta atıyor',
  'Elektrik yok',
  'Priz / anahtar arızası',
  'Kaçak akım, çarpıyor',
  'Yanık kokusu, kıvılcım',
  'Aydınlatma / avize montajı',
  'Pano / sigorta kutusu',
  'Elektrik tesisatı',
  'Başka bir sorun',
] as const;
