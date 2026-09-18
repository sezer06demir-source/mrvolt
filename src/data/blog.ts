/**
 * Rehber (blog) yazıları. SEO otomasyonu buraya yeni yazı ekler.
 * Her yazı: doğal, insan elinden çıkmış Türkçe; hedef bir anahtar kelimeye yönelik;
 * ara başlıklar, kısa paragraflar, gerçek SSS ve ilgili sayfalara iç linkler.
 */
export interface BlogSection {
  h: string;
  p: string[];
}
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  readingMin: number;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: 'kacak-akim-rolesi-neden-atar',
    title: 'Kaçak Akım Rölesi Neden Atar? Sebepleri ve Çözümü',
    description:
      "Kaçak akım rölesi durmadan atıyorsa sebebi bir kaçaktır. Ankara elektrikçi gözünden: rölenin neden attığı, nasıl bulunur, ne zaman değişir. Mr Volt: 0506 254 76 78.",
    keyword: 'kaçak akım rölesi Ankara',
    date: '2026-09-18',
    readingMin: 5,
    excerpt:
      'Kaçak akım rölesi boşuna atmaz; genelde gerçek bir kaçağı gösterir. Sık atan rölenin sebeplerini ve doğru çözümü sahadan anlatıyoruz.',
    intro:
      "Kaçak akım rölesi (halk arasında “kaçak akım şalteri”), evdeki en önemli can güvenliği parçasıdır. Ama bir de durmadan atmaya başladığında en çok sinir bozan parça da odur. Yıllardır Ankara’da bu işi yapan biri olarak şunu rahatlıkla söyleyebilirim: röle çoğu zaman boşuna atmaz. Attıysa bir şeyi anlatmaya çalışıyordur; iş, onu doğru okumakta.",
    sections: [
      {
        h: 'Kaçak akım rölesi tam olarak ne yapar?',
        p: [
          'Röle, hattan giden akımla geri dönen akımı sürekli karşılaştırır. Normalde bu ikisi birbirine eşittir. Bir yerde elektrik toprağa ya da bir insana kaçmaya başladığında bu denge bozulur ve röle, aradaki farkı fark edip hattı milisaniyeler içinde keser.',
          'Ev tipi rölelerde bu fark eşiği genelde 30 miliamperdir. Bu değer rastgele seçilmemiştir; insan için tehlikeli sınırın altında kalsın diye belirlenmiştir. Yani röle attığında çoğu zaman sizi gerçekten koruyor demektir.',
        ],
      },
      {
        h: 'Röle neden sık sık atar? En yaygın sebepler',
        p: [
          'Sahada en çok karşılaştığımız sebep, nemlenmiş bir hattır. Özellikle banyo, mutfak, balkon ya da bahçe hatlarında suyun kabloya ulaştığı bir nokta varsa, oradan küçük bir kaçak başlar ve röle bunu yakalar. Yağmurdan sonra atmaya başlayan röleler genelde bu gruba girer.',
          'İkinci sık sebep, arızalı bir cihazdır. Su ısıtıcısı, çamaşır ya da bulaşık makinesi, buzdolabı gibi cihazların içindeki bir rezistans ya da motor zamanla kaçak yapmaya başlayabilir. Böyle bir durumda cihazı prizden çektiğinizde rölenin atması durur; bu, arızayı bulmanın en pratik yoludur.',
          'Üçüncüsü, yanlış ya da eskimiş bir tesisattır. Nötr ve toprak hatlarının bir yerde birbirine değmesi, ezilmiş bir kablo ya da yaşlanmış yalıtım da rölenin sürekli atmasına yol açar. Bir de rölenin kendisinin arızalanması ihtimali vardır ama bu, listenin en sonunda gelir.',
        ],
      },
      {
        h: 'Sebebini kendiniz nasıl daraltabilirsiniz?',
        p: [
          'Röle attığında basit bir yöntemle sorunu daraltabilirsiniz: önce evdeki tüm sigortaları (linyeleri) indirin, sonra röleyi kaldırın. Röle bu durumda atmıyorsa sorun cihazlarda ya da hatlardadır. Ardından sigortaları tek tek kaldırın; hangi sigortayı kaldırdığınızda röle atıyorsa, kaçak o hatta demektir.',
          'O hattı bulduktan sonra oraya bağlı cihazları teker teker çıkararak hangisinin soruna yol açtığını görebilirsiniz. Buraya kadarı ipucu toplamak için işe yarar; ama kaçağın kesin yerini ve büyüklüğünü ölçmek için pens ampermetre ve topraklama ölçümü gerekir.',
        ],
      },
      {
        h: 'Röleyi iptal ettirmek çözüm mü?',
        p: [
          'Kesinlikle değil. Sürekli atan röleden bıkıp “şunu iptal edelim de rahat edelim” demek, yangın alarmının pilini çıkarmak gibidir. Röle bir kaçağı gösteriyordur; onu susturmak sorunu ortadan kaldırmaz, sadece sizi korumasız bırakır.',
          'Doğru olan, röleyi attıran gerçek kaçağı bulup gidermektir. Kaçak giderildiğinde röle zaten atmayı bırakır. Rölenin kendisi arızalıysa da yenisi takılır; ama bu karar ancak ölçümden sonra verilir.',
        ],
      },
      {
        h: 'Ankara’da kaçak akım sorununda ne yapıyoruz?',
        p: [
          'Mr Volt olarak Ankara’nın ilçelerinde bu tip çağrılara sık gidiyoruz. Önce röleyi ve panoyu kontrol eder, sonra hattı bölerek kaçağın kaynağını ölçüyoruz. Sebep bir cihazsa söylüyoruz, bir hatsa onu düzeltiyoruz; röle gerçekten arızalıysa uygun 30 mA’lik röleyle değiştirip test ederek teslim ediyoruz.',
          'Evinizde hiç kaçak akım rölesi yoksa, bu en öncelikli işlerden biridir. Islak zeminli banyo ve mutfağın olduğu her evde bulunması gerekir.',
        ],
      },
    ],
    faq: [
      { q: 'Kaçak akım rölesi neden yağmurdan sonra atıyor?', a: 'Genelde dış mekân ya da nemli bir hatta su ulaşıp küçük bir kaçak oluşturduğu için. Bahçe, balkon ve dış priz hatları ilk bakılacak yerlerdir.' },
      { q: 'Röle atınca kaldırıyorum ama tekrar atıyor, tehlikeli mi?', a: 'Röle bir kaçağı gösteriyor olabilir; kaynağını bulmadan üstüne gitmek doğru değil. Ölçüm yaptırıp sebebini gidermek gerekir.' },
      { q: 'Kaçak akım rölesi kendi kendine bozulur mu?', a: 'Nadiren de olsa bozulabilir. Ama önce gerçek bir kaçak olup olmadığı ölçülür; röle arızası genelde en son sıradaki ihtimaldir.' },
    ],
    related: [
      { label: 'Kaçak Akım Rölesi hizmeti', href: '/hizmetler/kacak-akim-rolesi' },
      { label: 'Sigorta ve Pano İşleri', href: '/hizmetler/sigorta-pano' },
      { label: 'Elektrik Arıza Tespiti', href: '/hizmetler/elektrik-ariza-tespiti' },
    ],
  },
  {
    slug: 'sigorta-neden-atar-ne-yapmali',
    title: 'Sigorta Neden Atar? Sık Atan Sigortada Ne Yapmalı?',
    description:
      "Sigortanız durmadan atıyorsa üç sebepten biridir: kaçak, aşırı yük ya da arızalı cihaz. Ankara elektrikçi gözünden sebepleri ve çözümü. Mr Volt: 0506 254 76 78.",
    keyword: 'sigorta atması Ankara',
    date: '2026-09-18',
    readingMin: 5,
    excerpt:
      'Sigorta neden atar? Kaçak, aşırı yük ve arızalı cihaz arasındaki farkı ve sık atan sigortada doğru adımları sahadan anlatıyoruz.',
    intro:
      "“Sigorta sürekli atıyor, ne yapsam düşüyor” — Ankara’da en çok aldığımız çağrıların başında bu gelir. İyi haber şu: sigorta da boşuna atmaz. Attıysa sizi ve tesisatı bir şeyden koruyordur. Kötü haber şu: sebebini gözle anlamak neredeyse imkânsızdır, ölçmek gerekir. Yine de ne olup bittiğini bilmek, doğru adımı atmanızı sağlar.",
    sections: [
      {
        h: 'Sigortanın görevi nedir?',
        p: [
          'Evdeki her sigorta (otomat), bağlı olduğu hattı aşırı akımdan ve kısa devreden korur. Hatta taşıyabileceğinden fazla yük binerse ya da bir yerde kısa devre olursa, sigorta atıp elektriği keser. Yani sigortanın atması bir arıza değil, bir koruma tepkisidir.',
          'Bu yüzden sürekli atan bir sigortayı zorla açık tutmaya çalışmak ya da daha büyük amperli bir sigortayla değiştirmek tehlikelidir. Koruma devre dışı kalır ve kablo ısınması, hatta yangın riski doğar.',
        ],
      },
      {
        h: 'Sigorta neden atar? Üç ana sebep',
        p: [
          'Birincisi kaçaktır: bir yerde elektrik olması gereken yerin dışına, örneğin toprağa kaçıyordur. Nemli hatlar ve arızalı cihazlar bunun başlıca kaynağıdır.',
          'İkincisi aşırı yüktür: o hatta kapasitesinin üstünde cihaz çalışıyordur. Aynı prize su ısıtıcısı, ısıtıcı ve ütü gibi yüksek güçlü cihazları birlikte takınca sigortanın atması bundandır. Özellikle uzatma kablolarına çok sayıda büyük cihaz bağlamak bu sorunu doğurur.',
          'Üçüncüsü arızalı bir cihaz ya da kısa devredir: prize takılı bir cihazın içindeki arıza veya iki kablonun birbirine değmesi, sigortayı anında attırır. Böyle bir durumda genelde “küt” diye atar ve tekrar kaldırınca hemen düşer.',
        ],
      },
      {
        h: 'Sık atan sigortada adım adım ne yapmalı?',
        p: [
          'Önce hangi sigortanın attığına bakın; panodaki etiketlerden ya da hangi bölümün elektriksiz kaldığından anlayabilirsiniz. Sonra o hatta bağlı cihazları prizden çekin ve sigortayı kaldırın. Sigorta bu sefer atmıyorsa, çektiğiniz cihazları tek tek takarak sorunluyu bulabilirsiniz.',
          'Sigorta hiçbir cihaz takılı değilken bile atıyorsa, sorun hattın kendisindedir (kısa devre ya da kaçak) ve bu, elektrikçi işidir. Bu noktada zorlamayın; o sigortayı indirilmiş bırakıp bizi aramanız en doğrusu.',
        ],
      },
      {
        h: 'Yapılmaması gerekenler',
        p: [
          'Atan sigortayı bant ya da başka bir yöntemle açık tutmaya çalışmak, en tehlikeli hatalardan biridir. Aynı şekilde 16 amperlik bir hattı 25 ya da 32 amperlik sigortayla değiştirmek de koruma sınırını aşar ve kabloyu riske atar.',
          'Sigortanın atması sizi rahatsız ediyorsa çözüm onu güçlendirmek değil, atma sebebini bulmaktır. Çoğu zaman iş, hattı doğru gruplara ayırmak ya da yükü dengelemekle biter.',
        ],
      },
      {
        h: 'Ankara’da sık atan sigortayı nasıl çözüyoruz?',
        p: [
          'Mr Volt olarak önce panoyu ve atan hattı ölçüyoruz; sorun kaçak mı, aşırı yük mü, yoksa bir cihaz mı, bunu netleştiriyoruz. Gerekirse hatları yeniden gruplayıp mutfak, banyo ve yüksek güçlü cihazları ayrı hatlara alıyoruz. Amacımız birkaç gün sonra aynı sorunla tekrar uğraşmanızı önlemek.',
          'Eski binalarda çoğu zaman kök sebep, hattın bugünün cihazlarını taşıyamamasıdır. Böyle durumlarda her şeyi birden yenilemek yerine, gerçekten gereken yerden başlayan bir plan öneriyoruz.',
        ],
      },
    ],
    faq: [
      { q: 'Sigorta atınca daha büyük sigorta taksam olur mu?', a: 'Olmaz, tehlikelidir. Sigorta hattı korur; büyük takmak korumayı devre dışı bırakır ve kablo ısınmasına yol açar. Doğrusu atma sebebini bulmaktır.' },
      { q: 'Sigorta hiç cihaz takılı değilken atıyor, sebebi ne?', a: 'Genelde hattın kendisinde kısa devre ya da kaçak vardır. Bu elektrikçi işidir; o sigortayı indirilmiş bırakıp ölçüm yaptırmak gerekir.' },
      { q: 'Sadece yüksek güçlü cihaz çalışınca atıyor, normal mi?', a: 'Bu genelde aşırı yük ya da yetersiz hat işaretidir. O cihaz için ayrı, doğru kesitli bir hat çekmek kalıcı çözümdür.' },
    ],
    related: [
      { label: 'Sigorta ve Pano İşleri', href: '/hizmetler/sigorta-pano' },
      { label: 'Elektrik Arıza Tespiti', href: '/hizmetler/elektrik-ariza-tespiti' },
      { label: 'Elektrik Tesisatı', href: '/hizmetler/elektrik-tesisati' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
