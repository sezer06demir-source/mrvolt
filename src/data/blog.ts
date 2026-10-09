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
  /** Gerçek iş fotoğrafı yolu (public/ altında). Boşsa markalı kapak otomatik üretilir. */
  image?: string;
  imageAlt?: string;
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
  {
    slug: 'priz-isinmasi-notr-hatti-kopmasi-yenimahalle',
    title: "Priz Isınması ve Nötr Hattı Kopması: Yenimahalle'de Kış Öncesi Kontrol",
    description:
      "Priz ısınıyor, ışıklar kısılıp parlıyor mu? Nötr hattı kopmasının belirtileri ve neden acil olduğu, Yenimahalle'den sahadan anlatım. Mr Volt: 0506 254 76 78.",
    keyword: 'Yenimahalle elektrikçi',
    date: '2026-09-25',
    readingMin: 6,
    excerpt:
      'Kışa girerken ısıtıcılar prize takılmaya başlayınca ısınan prizler ve kopuk nötr hattı en çok gördüğümüz iki sorun oluyor. Yenimahalle’den sahadan, belirtileri ve ne zaman acil olduğunu anlatıyoruz.',
    intro:
      "Havalar soğumaya başladı mı telefon bir anda değişir. Isıtıcı, elektrikli soba, kombi destekli petek gibi cihazlar prizlere girer girmez yıl boyu fark edilmeyen zayıf noktalar birden ortaya çıkar. Yenimahalle'de, özellikle Batıkent ve Demetevler tarafındaki eski apartmanlarda bu dönemde en sık gördüğümüz iki şey ısınan prizler ve kopan ya da gevşeyen nötr hattı. İkisi de görünüşte küçük bir rahatsızlık gibi başlar, ama ikisi de ihmal edilince ciddi bir tehlikeye dönüşür.",
    sections: [
      {
        h: 'Priz neden ısınır?',
        p: [
          'Bir prizin ısınmasının tek bir sebebi vardır aslında: bir yerde akımın rahat geçemediği, sıkışmış bir temas noktası. Buna geçiş direnci diyoruz. Vida zamanla gevşer, klemens paslanır ya da bağlantı baştan gevşek bırakılmıştır; akım o daralan noktadan zorla geçmeye çalışırken orada ısı üretir. Yaz aylarında bu ısı fark edilmez çünkü priz zaten hafif yük taşır, ama kışın 2000 watt’lık bir ısıtıcı ya da soba takıldığında aynı zayıf bağlantı birkaç kat daha fazla akım taşımak zorunda kalır.',
          'İkinci sık sebep, kablo kesitinin cihaza uygun olmamasıdır. Eski Yenimahalle apartmanlarında çoğu priz hattı 1,5 mm² kesitle çekilmiştir; bu, aydınlatma ve küçük cihazlar için yeterlidir ama yüksek güçlü bir ısıtıcıyı sürekli çalıştırmak için zorlanır. Kablo ince kaldığında ısınan sadece priz değil, duvarın içindeki hattın kendisi de olabilir; bu daha tehlikelidir çünkü gözle görülmez.',
        ],
      },
      {
        h: 'Nötr hattı kopması ne demek, neden tehlikeli?',
        p: [
          'Şebekede faz (canlı) ve nötr olmak üzere iki hat vardır; nötr, akımın devresini tamamlayıp geri döndüğü yoldur. Bir apartmanda paylaşılan nötr hattı bir noktada gevşer, korozyona uğrar ya da tamamen kopar ise ortaya "nötr kopması" denen bir arıza çıkar. Bunun en klasik belirtisi, ışıkların birden parlayıp sönmesi ya da bazı prizlerdeki gerilimin normalin çok üstüne çıkmasıdır; bu sırada bir yandan bazı cihazlar zayıf çalışırken diğerleri aşırı gerilimden yanabilir.',
          'Nötr kopması özellikle üç fazlı beslenen, birden fazla dairenin ortak nötr kullandığı eski apartmanlarda görülür. Yenimahalle’de İvedik ve Ostim tarafındaki atölyelerde faz dengesizliğinden ısınan nötr hattını sık görüyoruz; konut tarafında ise Çayyolu ve Ümitköy’deki bazı bloklarda ortak nötr bağlantısının gevşediği durumlarla karşılaşıyoruz. İkisi de farklı sebeplerle aynı sonuca varır: nötr güvenilmez hale gelir ve cihazlar risk altında kalır.',
        ],
      },
      {
        h: 'Bu belirtileri görürseniz ciddiye alın',
        p: [
          'Bir prize dokunduğunuzda ya da yakınından geçtiğinizde hissedilir bir sıcaklık varsa, bu normal değildir. Priz kapağının rengi hafif kararmışsa ya da hafif yanık kokusu alıyorsanız, içeride klemens zaten ısınmaya başlamış demektir. Bu durumda o prizi hemen kullanmayı bırakın, mümkünse o hattın sigortasını indirin.',
          'Işıkların özellikle bir cihaz çalışırken kısılıp parlaması, bazı ampullerin beklenmedik şekilde patlaması ya da bir odadaki prizlerin voltajının diğerlerinden farklı hissedilmesi (örneğin bir cihazın normalden hızlı ısındığı, diğerinin zayıf çalıştığı) nötr sorununun tipik işaretleridir. Bunlar tek seferlik bir tesadüf değil, hattın kendini yormaya başladığının haberidir.',
        ],
      },
      {
        h: 'Sonbahar-kış öncesi neye bakmak gerekir?',
        p: [
          'Isıtıcı sezonu başlamadan önce yapılacak en faydalı iş, o cihazları takacağınız prizleri tek tek kontrol etmektir. Priz kapağını sökmeden bile anlaşılabilecek işaretler vardır: fişi takıp çıkarırken gevşeklik hissediyor musunuz, priz eskiden beri gıcırdıyor mu, kapak rengi solmuş mu. Şüpheli bir priz varsa cihazı oraya takmadan önce baktırmak, kış ortasında karanlıkta kalmaktan çok daha ucuza gelir.',
          'Ayrıca panodaki kaçak akım rölesinin test butonuna basıp çalıştığından emin olmak da bu dönemde iyi bir alışkanlıktır; ıslak zeminli banyo ve mutfağın olduğu her evde 30 mA’lik bir röle bulunmalı. Yüksek güçlü ısıtıcıları mümkünse uzatma kablosu yerine sabit ve sağlam bir prize takmak, hem ısınma riskini hem de nötr hattına binen ek yükü azaltır.',
        ],
      },
      {
        h: "Yenimahalle'de bu tür arızalarda ne yapıyoruz",
        p: [
          'Mr Volt olarak Yenimahalle’de bu tip çağrılara giderken önce ısınan prizin ya da hattın hangi noktada olduğunu ölçüyoruz; sonra klemens, kablo kesiti ve bağlantı kalitesini kontrol ediyoruz. Sorun tek bir prizdeyse değişimi kısa sürede bitiyor; sorun hattın kesitindeyse ısıtıcı için ayrı ve doğru kesitli bir hat çekmeyi öneriyoruz.',
          'Nötr kopması şüphesi varsa iş biraz daha dikkatli ilerliyor; panoyu ve ortak hattı ölçüp gerilim dengesizliğinin kaynağını buluyoruz. Bu tür arızalarda vakit kaybetmemek önemli, çünkü nötr sorunları kendi kendine düzelmez, aksine zamanla daha fazla cihazı etkiler.',
        ],
      },
    ],
    faq: [
      { q: 'Priz ısınıyor ama henüz koku yok, yine de tehlikeli mi?', a: 'Evet, ısı kokudan önce gelir. Isınma hissettiğiniz an o prizi kullanmayı bırakıp kontrol ettirmek, koku ya da kararma beklemekten çok daha güvenlidir.' },
      { q: 'Işıklar bazen parlayıp bazen kısılıyor, bu nötr sorunu mu?', a: 'Olabilir, özellikle bir cihaz devreye girdiğinde oluyorsa bu ihtimal güçlenir. Panoyu ve ortak nötr hattını ölçmeden kesin konuşmak doğru olmaz, ama bu belirtiyi ihmal etmemek gerekir.' },
      { q: 'Isıtıcıyı uzatma kablosuyla kullanmak ne kadar riskli?', a: 'İnce kesitli bir uzatma kablosu yüksek güçlü bir ısıtıcının akımını taşımakta zorlanır ve zamanla ısınır. Mümkünse ısıtıcıyı sabit, sağlam bir prize doğrudan takmak daha güvenlidir.' },
      { q: 'Nötr hattı koptuğunda cihazlarım zarar görür mü?', a: 'Görebilir; gerilim dengesi bozulduğunda bazı cihazlar normalden yüksek gerilim alıp zarar görebilir. Bu yüzden belirtileri fark eder etmez ölçüm yaptırmak, cihaz kaybetmekten daha ucuza gelir.' },
      { q: 'Bu kontrolü kış gelmeden mi yaptırmalıyım?', a: 'Evet, tercihen ısıtıcı ve soba gibi cihazları devreye almadan önce. Yoğun kullanım başladıktan sonra zayıf bir bağlantı çok daha hızlı sorun çıkarır.' },
    ],
    related: [
      { label: 'Priz ve Anahtar', href: '/hizmetler/priz-anahtar' },
      { label: 'Elektrik Arıza Tespiti', href: '/hizmetler/elektrik-ariza-tespiti' },
      { label: 'Yenimahalle Elektrikçi', href: '/hizmet-bolgeleri/yenimahalle' },
      { label: 'Kaçak Akım Rölesi Neden Atar?', href: '/rehber/kacak-akim-rolesi-neden-atar' },
    ],
  },
  {
    slug: 'avize-spot-montaji-kecioren-eski-bina',
    title: "Keçiören'de Eski Apartmanlarda Avize ve Spot Montajı: Dikkat Edilmesi Gerekenler",
    description:
      "Keçiören'in eski apartmanlarında avize veya spot montajı yaptırmadan önce tavan kutusu, kablo kesiti ve sigorta grubu kontrolü neden şart? Mr Volt: 0506 254 76 78.",
    keyword: 'Keçiören elektrikçi',
    date: '2026-10-02',
    readingMin: 5,
    excerpt:
      "Keçiören'in eski apartmanlarında avize ya da spot taktırmak göründüğü kadar basit değil; tavan kutusu, kablo kesiti ve sigorta grubu önce kontrol edilmeli. Sahadan anlattık.",
    intro:
      "Etlik, Kalaba ve Aktepe tarafında onlarca yıllık apartmanlarda çalışıyoruz ve avize ya da spot montajı çağrılarının çoğunda aslında basit bir montaj değil, küçük bir tesisat kontrolü yapıyoruz. Keçiören elektrikçi olarak şunu baştan söyleyelim: tavandaki kutuyu açıp direkt avizeyi bağlamak her zaman yeterli değildir. Altındaki hat ve bağlantı sağlam değilse, güzel bir avize bile zamanla sorun çıkarır.",
    sections: [
      {
        h: 'Eski tavan kutusu yeni bir avizeyi taşır mı?',
        p: [
          'Doğrudan cevap: çoğu zaman taşır, ama önce kontrol etmek gerekir. 70\'li-80\'li yıllarda yapılmış Keçiören apartmanlarında tavan kutusu genelde tek bir basit lüster için düşünülmüştür; ince kablo ve gevşek bağlantı sık görülür. Üstüne ağır metal bir avize ya da çok sayıda spot eklenince o ince bağlantı ısınabilir.',
          'Biz önce kutudaki kabloyu ve klemensi gözle ve ölçerek kontrol ediyoruz. Kablo sağlam ve kesit yeterliyse montaja direkt geçiyoruz; değilse kısa bir hat yenilemesiyle devam ediyoruz.',
        ],
      },
      {
        h: 'Spot montajında aydınlatma sigortası neden önemli?',
        p: [
          'Doğrudan cevap: birden fazla spot aynı hatta eklendiğinde o hattın yükü artar; eski panoda aydınlatma sigortası zaten zorlanıyorsa spot sayısı arttıkça sigorta daha sık atmaya başlar. Bu yüzden 6-8 spotluk bir salon aydınlatması öncesi o hattın hangi sigortadan beslendiğine bakıyoruz.',
          'Bazı Aktepe ve Sancaktepe dairelerinde aydınlatma ve priz hattı hâlâ aynı sigortada; spot sayısı arttığında o grup toplam yükü taşıyamayabilir. Böyle durumlarda spotları ayrı bir hatta almayı öneriyoruz, bu hem daha güvenli hem de ileride aydınlatmayı tek başına kesebilmenizi sağlıyor.',
        ],
      },
      {
        h: 'Topraklama avize montajında gerekli mi?',
        p: [
          'Doğrudan cevap: metal gövdeli avize ve spot armatürlerinde topraklama varsa bağlanmalıdır; yoksa armatür gövdesi bir arıza anında gerilimli kalabilir. Eski binalarda tavan kutusuna topraklama hattı çekilmemiş olabilir; bu durumda armatürü olduğu gibi monte etmek yerine durumu müşteriye açıkça anlatıyoruz.',
          'Topraklaması olmayan bir hatta illa avize takılamaz anlamına gelmiyor; ama metal gövdeli ve özellikle banyo, mutfak gibi ıslak alana yakın armatürlerde bu noktayı atlamıyoruz.',
        ],
      },
      {
        h: 'Montaj sırasında sık yaptığımız küçük düzeltmeler',
        p: [
          'Gevşek klemens yerine vidalı veya yaylı bağlantı elemanı kullanmak, kabloyu tavan kutusunun içine düzgün toplamak, ağır avizelerde kancayı tavana değil doğrudan yapıya sabitlemek gibi küçük ama önemli ayrıntılar var. Bunları atlayan bir montaj, bir süre sonra avizenin sarkması veya bağlantının gevşeyip ısınmasıyla sonuçlanabilir.',
          'Şerit LED ve spot karışık kullanılan tavanlarda ayrıca bir trafo/sürücü hesabı gerekiyor; yanlış seçilen sürücü hem ışığın titremesine hem de erken bozulmasına yol açıyor.',
        ],
      },
      {
        h: "Keçiören'de avize ve spot montajını nasıl yapıyoruz?",
        p: [
          "Mr Volt olarak önce tavan kutusunu ve besleme hattını kontrol ediyor, gerekiyorsa aydınlatma sigortasını ayırıyoruz. Sonra armatürü güvenli ve düzgün biçimde sabitleyip topraklama bağlantısını kontrol ederek teslim ediyoruz. Keçiören'in Etlik, Kalaba, Aktepe, Ayvalı ve Bağlum tarafında bu işlere sık gidiyoruz; eski bina olsun yeni olsun aynı titizlikle çalışıyoruz.",
          'Sadece armatür asmak isteyenler için montaj kısa sürüyor; ama hat veya pano tarafında bir eksik görürsek bunu mutlaka söylüyoruz, çünkü güzel bir avizenin altında zayıf bir bağlantı bırakmak işi yarım bırakmak olur.',
        ],
      },
    ],
    faq: [
      { q: "Keçiören'de eski bir apartmanda avize taktırmak tehlikeli mi?", a: "Kendi başına tehlikeli değildir; ama tavan kutusu ve kablo kontrol edilmeden ağır bir avize veya çok sayıda spot eklenirse bağlantı zamanla ısınabilir. Montajdan önce kısa bir kontrol bu riski ortadan kaldırır." },
      { q: 'Spot sayısı arttıkça sigorta neden daha sık atıyor?', a: 'Aydınlatma hattı sınırlı bir yük taşır; spot sayısı arttığında o hat zorlanabilir. Eski panoda aydınlatma ve priz aynı sigortadaysa bu daha sık yaşanır, ayrı hat çekmek kalıcı çözümdür.' },
      { q: 'Metal gövdeli avizede topraklama yoksa ne olur?', a: 'Bir arıza anında armatür gövdesi gerilimli kalabilir. Tavan kutusunda topraklama varsa bağlanmalı, yoksa durumu değerlendirip gerekirse hattı tamamlamak gerekir.' },
      { q: 'Şerit LED için her sürücü uygun mu?', a: 'Değil; yanlış seçilen sürücü ışığın titremesine ve erken arızaya yol açar. LED gücüne ve uzunluğuna uygun sürücü seçmek gerekir.' },
    ],
    related: [
      { label: 'Aydınlatma ve Avize', href: '/hizmetler/aydinlatma-avize' },
      { label: 'Keçiören Elektrikçi', href: '/hizmet-bolgeleri/kecioren' },
      { label: 'Sigorta ve Pano İşleri', href: '/hizmetler/sigorta-pano' },
      { label: 'Sigorta Neden Atar? Sık Atan Sigortada Ne Yapmalı?', href: '/rehber/sigorta-neden-atar-ne-yapmali' },
    ],
  },
  {
    slug: 'serit-led-spot-aydinlatma-mamak',
    title: "Mamak'ta Şerit LED ve Spot Aydınlatma: Sürücü Seçimi Neden Ömrü Belirliyor?",
    description:
      "Mamak'ta şerit LED ve spot montajında sürücü (trafo) gücü yanlış seçilirse ışık erken bozulur ya da titrer. Sahadan doğru seçim ve kablo kesiti anlatımı. Mr Volt: 0506 254 76 78.",
    keyword: 'Mamak elektrikçi',
    date: '2026-10-09',
    readingMin: 5,
    excerpt:
      "Mamak'ta şerit LED ve spot aydınlatma çağrılarının çoğunda asıl sorun armatürde değil, yanlış seçilmiş sürücüde çıkıyor. Doğru güç hesabını ve sık yapılan hataları sahadan anlattık.",
    intro:
      "Mamak'ta Abidinpaşa ve Gülveren tarafındaki evlerde son dönemde en çok aldığımız iş değişti: artık avize değil, tavan arası şerit LED ve salon spotları isteniyor. Güzel bir iş ama göründüğünden hassas; yanlış sürücü ya da kalın kesilmemiş bir hesap, altı ay içinde ışığı titreten ya da tamamen söndüren bir soruna dönüşüyor. Mamak elektrikçi olarak şunu baştan söylüyoruz: şerit LED'de göze en çok dokunan parça armatür değil, görünmeyen sürücüdür.",
    sections: [
      {
        h: 'Şerit LED sürücüsü (trafo) neden bu kadar önemli?',
        p: [
          'Şerit LED 220V ile değil, genelde 12V ya da 24V doğru akımla çalışır; bu dönüşümü sürücü yapar. Sürücünün gücü (watt) şeride göre az seçilirse cihaz sürekli sınırda çalışır, ısınır ve beklenenden çok önce bozulur. Fazla büyük seçilmesi doğrudan tehlikeli değildir ama israf ve bazen titreme sebebidir.',
          'Doğru hesap basittir: şeridin metre başına çektiği watt, toplam metre ile çarpılır, üstüne yüzde yirmi kadar pay bırakılır. Bir Gülveren\'deki salonda bu hesabı atlayıp hazır bir sürücü takılmıştı; üç ay sonra ışık titremeye başlamıştı, çünkü sürücü gerçek yükün sınırında zorlanıyordu.',
        ],
      },
      {
        h: 'Spot montajında kablo kesiti ve sigorta grubu',
        p: [
          'Birden fazla spot aynı hatta toplandığında o hattın yükü artar; eski Mamak apartmanlarında aydınlatma hattı genelde ince kesitle ve tek sigortadan çekilmiştir. Altı yedi spotu bu hatta eklemek, sigortanın sık atmasına ya da kablonun ısınmasına yol açabilir.',
          'Biz önce o hattın hangi sigortadan beslendiğine ve kesitine bakıyoruz. Yetersizse spotları ayrı bir aydınlatma hattına alıyoruz; bu hem daha güvenli oluyor hem de ileride tek bir anahtardan tüm aydınlatmayı yönetmeyi kolaylaştırıyor.',
        ],
      },
      {
        h: 'Sahada en sık gördüğümüz üç hata',
        p: [
          'Birincisi, tek bir sürücüye gereğinden uzun şerit bağlamak; şeridin uçlarındaki ışık belli belirsiz kısılır, bu gerilim düşümünün işaretidir. İkincisi, sürücüyü asma tavan içine havasız bir yere sıkıştırmak; sürücüler ısındıkça ömrünü kaybeder, hafif havalanan bir yere konmalı.',
          'Üçüncüsü, şerit bağlantılarını lehimsiz, sadece konektörle bırakıp üstünü kapatmak; zamanla temas gevşer ve şeridin bir kısmı sönük kalır. Bunların hiçbiri büyük işler değil ama montaj sırasında atlanınca sonradan tekrar söküp düzeltmek daha çok zaman alıyor.',
        ],
      },
      {
        h: "Mamak'ta şerit LED ve spot montajını nasıl yapıyoruz?",
        p: [
          "Önce aydınlatacağınız alanı ve istediğiniz parlaklığı konuşup şerit tipine göre doğru sürücüyü hesaplıyoruz; spot tarafında ise besleme hattını ve sigorta grubunu kontrol ediyoruz. Mamak'ın Abidinpaşa, Tuzluçayır, Natoyolu ve Gülveren tarafında bu işlere sık gidiyoruz; keşif sonrası net fiyatı söyleyip iş öyle başlıyor.",
          'Montaj bittiğinde şeridi en az yarım saat çalışır durumda bırakıp ısınma ve titreme kontrolü yapıyoruz. Bu küçük test, altı ay sonra geri dönüp aynı işe bakmamızı önlüyor.',
        ],
      },
    ],
    faq: [
      { q: 'Şerit LED neden zamanla sönük bir bölge bırakıyor?', a: 'Genelde gerilim düşümü ya da gevşeyen bir konektördür. Şeridin uzunluğuna uygun sürücü ve lehimli bağlantı bu sorunu çözer.' },
      { q: 'Sürücüyü asma tavan içine koymak sakıncalı mı?', a: 'Tamamen havasız, kapalı bir cepte sıcaklık birikir ve sürücünün ömrünü kısaltır. Hafif hava alan bir noktaya yerleştirmek daha sağlıklıdır.' },
      { q: 'Altı spotu eski aydınlatma hattına ekleyebilir miyim?', a: 'Hattın kesiti ve sigortası yeterliyse evet; değilse sigorta sık atar. Önce o hattı kontrol edip gerekirse ayrı hat öneriyoruz.' },
      { q: 'Mamak\'ta şerit LED montajı ne kadar sürer?', a: 'Standart bir salon için genelde aynı gün bitiyor; hesap ve sürücü seçimi önceden yapıldığında montaj kısa sürüyor.' },
    ],
    related: [
      { label: 'Aydınlatma ve Avize', href: '/hizmetler/aydinlatma-avize' },
      { label: 'Mamak Elektrikçi', href: '/hizmet-bolgeleri/mamak' },
      { label: 'Sigorta ve Pano İşleri', href: '/hizmetler/sigorta-pano' },
      { label: "Keçiören'de Avize ve Spot Montajı", href: '/rehber/avize-spot-montaji-kecioren-eski-bina' },
    ],
  },
  {
    slug: 'torekent-kisin-elektrikli-isitici-sigorta-atiyor',
    title: 'Törekent’te Kışın Elektrikli Isıtıcı Sigortayı Attırıyorsa: Hangi Priz, Kaç Watt?',
    description:
      'Sincan Törekent’te kış gelince elektrikli ısıtıcı açılınca sigorta mı atıyor? Watt hesabı, uzatma kablosu tehlikesi ve doğru priz seçimi usta anlatımıyla. Mr Volt: 0506 254 76 78.',
    keyword: 'Törekent elektrikçi',
    date: '2026-10-09',
    readingMin: 5,
    excerpt:
      'Törekent’te ekim sonu gelince telefonumuz değişir: “Isıtıcıyı açınca sigorta atıyor.” Çoğu zaman ısıtıcı da sigorta da sağlamdır; sorun, aynı hatta toplanan yüktür. Basit bir watt hesabıyla nedenini anlattık.',
    intro:
      'Sincan Törekent’te havalar soğumaya başlayınca gelen çağrıların konusu da değişiyor. Yazın klima, kışın elektrikli ısıtıcı. Bloklarda doğalgaz olsa bile çocuk odasına, banyoya ya da kombinin yetmediği köşe odaya bir ısıtıcı ekleniyor. Akşam saatinde ısıtıcı açılıyor, kettle çalışıyor, çamaşır makinesi dönüyor ve sigorta iniyor. Yirmi sekiz yıldır bu işi yapıyoruz, bu sahneyi her kış yeniden görüyoruz. Nedenini ve doğru kullanımı Törekent’teki evlerden örneklerle anlatalım.',
    sections: [
      {
        h: 'Bir ısıtıcı kaç amper çeker?',
        p: [
          'Kabaca hesap şu: ısıtıcının watt değerini 230’a bölün, çektiği akımı bulursunuz. 2000 watt’lık bir ısıtıcı yaklaşık 9 amper, 2500 watt’lık bir ısıtıcı yaklaşık 11 amper çeker. Evlerde priz hatları genelde 16 amperlik sigortayla korunur.',
          'Yani tek bir ısıtıcı bir priz hattının gücünün yarısından fazlasını tek başına kullanır. Aynı hatta ikinci bir ısıtıcı ya da bir kettle eklendiğinde toplam 16 amperi geçer ve sigorta görevini yapıp hattı keser. Sigorta atıyorsa bozuk değildir, kabloyu koruyordur.',
        ],
      },
      {
        h: 'Aynı odada iki ısıtıcı neden sorun çıkarır?',
        p: [
          'Bir odadaki prizler çoğu zaman aynı sigortadan beslenir. Bazen yan odanın prizleri de aynı hattadır. İki ısıtıcıyı aynı odaya koyduğunuzda büyük ihtimalle ikisini de aynı hatta yüklemiş olursunuz.',
          'Geçen kış Törekent’te bir dairede salon ve yatak odasındaki iki ısıtıcı aynı sigortaya bağlı çıktı. Ev sahibi sigortayı üç kez değiştirmiş, her seferinde “bu da bozuk” demiş. Sigortaların hepsi sağlamdı. Isıtıcılardan birini başka bir hattaki prize aldık, sorun bitti. Panonuzdaki sigortaların hangi odayı beslediğini bilmiyorsanız, gelince birlikte etiketleyelim.',
        ],
      },
      {
        h: 'Isıtıcı uzatma kablosuna takılır mı?',
        p: [
          'Takılmamalı. Isıtıcı, saatlerce yüksek akım çeken bir cihazdır. İnce kablolu, ucuz bir uzatmada kablo ve fiş ısınır; üstü halıyla örtülüyse ısı dağılamaz. Uzatma sigortayı attırmayabilir ama kendi içinde ısınarak erimeye başlar. En tehlikelisi de budur.',
          'Isıtıcıyı doğrudan duvar prizine takın. Priz uzaksa kalıcı çözüm uzatma değil, o noktaya yeni bir priz çekmektir. Prize takılı fişe birkaç dakika sonra elinizi sürün; ılık olması normaldir, eli yakacak kadar sıcaksa priz ya da fiş temas yapmıyordur, o prizi kullanmayın.',
        ],
      },
      {
        h: 'Priz ısınıyorsa sorun ısıtıcıda mı?',
        p: [
          'Çoğu zaman değil. Priz içindeki yay zamanla gevşer, fişi tam kavramaz. Temas yüzeyi küçülünce aynı akım daha küçük bir alandan geçer ve orası ısınır. Prizin kapağında sararma, kararma ya da plastik kokusu görüyorsanız o priz değişmeli.',
          'Törekent’teki bloklarda yıllardır aynı prize her kış ısıtıcı takılan evlerde bunu sık görüyoruz. Prizi değiştirirken arkasındaki kablo uçlarına da bakıyoruz; ısınmış ve sertleşmiş uçları kesip temiz yerden yeniden bağlıyoruz.',
        ],
      },
      {
        h: 'Kalıcı çözüm ne?',
        p: [
          'Isıtıcıyı sürekli kullandığınız bir oda varsa o odaya kendi sigortası olan ayrı bir priz hattı çekmek en sağlıklı yoldur. Bu hem sigorta atmasını bitirir hem de kabloyu sınırda çalışmaktan kurtarır. Çocuk odası ve banyo için ayrıca kaçak akım rölesinin çalıştığını test etmenizi öneririz.',
          'Mr Volt olarak Törekent dahil Sincan’ın tüm mahallelerine ve Ankara geneline aynı gün geliyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz. Önce panoyu ve hattı ölçüyor, keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Isıtıcıyı açınca sigorta atıyor, sigorta mı bozuk?',
        a: 'Genelde hayır. Aynı hatta ısıtıcıyla birlikte başka yüksek güçlü cihazlar çalışıyordur. Isıtıcıyı başka bir hattaki prize alın; yine atıyorsa bizi arayın.',
      },
      {
        q: 'Uzatma kablosuyla ısıtıcı kullanmak tehlikeli mi?',
        a: 'Evet. Uzun süre yüksek akım çeken ısıtıcı ince bir uzatmada kabloyu ve fişi ısıtır. Isıtıcıyı doğrudan duvar prizine takın.',
      },
      {
        q: 'Törekent’e akşam gelir misiniz?',
        a: 'Geliriz. 23:00’e kadar çağrı alıyoruz; kışın akşam saatlerindeki sigorta şikayetlerine aynı gün bakıyoruz.',
      },
      {
        q: 'Isıtıcı için ayrı hat çekmek zor bir iş mi?',
        a: 'Çoğu dairede mevcut borulardan ya da kanal içinden aynı gün çekilebiliyor. Panoya ve güzergaha bakıp işe başlamadan söylüyoruz.',
      },
    ],
    related: [
      { label: 'Sincan Elektrikçi', href: '/hizmet-bolgeleri/sincan' },
      { label: 'Sigorta ve Pano İşleri', href: '/hizmetler/sigorta-pano' },
      { label: 'Priz ve Anahtar', href: '/hizmetler/priz-anahtar' },
      { label: 'Sigorta Neden Atar? Sık Atan Sigortada Ne Yapmalı?', href: '/rehber/sigorta-neden-atar-ne-yapmali' },
    ],
  },
  {
    slug: 'sincan-fatih-eski-ev-priz-anahtar-degisimi',
    title: 'Sincan Fatih’te Eski Evlerde Priz ve Anahtar: Basit Değişim mi, Hat Sorunu mu?',
    description:
      'Sincan Fatih Mahallesi’ndeki eski evlerde sallanan priz, çıtırtı yapan anahtar ve kararmış kapak ne anlatır? Ne zaman sadece değişim, ne zaman hat onarımı gerekir? Mr Volt: 0506 254 76 78.',
    keyword: 'Sincan Fatih elektrikçi',
    date: '2026-10-09',
    readingMin: 5,
    excerpt:
      'Fatih’te eski bir evde priz sallanıyor, anahtara basınca çıtırtı geliyor. Çoğu zaman yarım saatlik bir değişim; ama bazen kapağın arkasında daha büyük bir hikaye var. Farkı nasıl anladığımızı anlattık.',
    intro:
      'Sincan Fatih Mahallesi’nde bahçeli müstakil evler ve yıllar önce yapılmış toplu konutlar var. Bu evlerden gelen çağrıların önemli kısmı büyük arızalar değil, küçük ama can sıkıcı şeyler: duvarda sallanan bir priz, basınca çıtırdayan bir anahtar, kapağı kararmış bir mutfak prizi. Ev sahipleri genelde “sadece değiştirelim” diyor. Çoğu zaman haklılar. Ama yirmi sekiz yıllık tecrübemizle söyleyebiliriz ki, bazen o küçük belirti kapağın arkasındaki yorgun bir hattın ilk işaretidir.',
    sections: [
      {
        h: 'Sallanan priz neden tehlikeli?',
        p: [
          'Sallanan priz, duvardaki kasaya düzgün oturmamış ya da vidaları boşalmış prizdir. Fişi her takıp çıkardığınızda içerideki kablo uçları da oynar. Uç oynadıkça bağlantı gevşer, gevşek bağlantı ısınır.',
          'Fatih’teki eski evlerde kasa çoğu zaman yıllar içinde kırılmış ya da sıva dökülmüş oluyor. Prizi yeniden sabitlemek için önce kasayı onarıyoruz; aksi halde yeni priz de birkaç ayda yine sallanır.',
        ],
      },
      {
        h: 'Anahtara basınca çıtırtı geliyorsa ne demek?',
        p: [
          'Çıtırtı, anahtarın içinde ya da arkasındaki bağlantıda küçük bir ark oluştuğunu gösterir. Anahtarın kontakları aşınmış olabilir, bu durumda değişim yeterlidir. Ama ses anahtara dokunmadan da geliyorsa ya da lamba titriyorsa sorun bağlantı uçlarındadır.',
          'Bu sesi alışkanlık haline getirmeyin. Geçen kış Fatih’te bir evde koridor anahtarının çıtırtısına aylarca alışılmıştı. Kapağı açtığımızda arkadaki kablonun yalıtımı kömürleşmişti. Değişim yerine o noktadaki hattı yeniledik.',
        ],
      },
      {
        h: 'Kapağı açınca neye bakıyoruz?',
        p: [
          'Bir prizi ya da anahtarı söktüğümüzde ilk baktığımız şey kablo uçlarıdır. Uçlar parlak ve yalıtım esnekse sadece priz ya da anahtar değişir, iş yarım saatte biter. Uçlar kararmış, yalıtım sertleşip kırılıyorsa ucu kesip temiz bakırdan yeniden bağlarız.',
          'Kablo duvarın içinde de sertleşmiş, eğince çatlıyorsa iş değişir. Bu, hattın yıllarca ısındığını gösterir ve o hattın tamamen yenilenmesi gerekir. Bunu kapağı açmadan bilmek mümkün değil; bu yüzden telefonda “sadece priz değişimi” diye kesin fiyat vermiyoruz, önce bakıyoruz.',
        ],
      },
      {
        h: 'Eski evlerde topraksız priz meselesi',
        p: [
          'Fatih’teki eski evlerin bir kısmında prizlerde toprak hattı yok. Priz yeni görünse bile arkasında sadece iki kablo bağlı olabilir. Çamaşır makinesi, fırın ve şofben gibi metal gövdeli cihazlarda bu bir güvenlik açığıdır.',
          'Prizi değiştirirken toprak hattı olup olmadığını ölçüyoruz. Hat yoksa bunu size söylüyor, en azından ıslak hacimlerdeki ve metal gövdeli cihazların prizleri için çözüm öneriyoruz. Topraksız bir hatta topraklı priz takmak, prizi güvenli yapmaz; bunu bilmek önemli.',
        ],
      },
      {
        h: 'Ne zaman değişim, ne zaman hat onarımı?',
        p: [
          'Kısaca şöyle ayırıyoruz: tek bir prizde ya da anahtarda sorun var, kablo uçları sağlamsa değişim yeterli. Aynı odada birkaç noktada ısınma, kararma ya da çıtırtı varsa sorun o hattın kendisindedir. Bütün evde benzer belirtiler varsa tesisatın genel durumuna bakmak gerekir.',
          'Mr Volt olarak Sincan Fatih dahil Ankara genelinde aynı gün geliyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz. Önce kapağı açıp gösteriyor, keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Sallanan prizi kendim sıkabilir miyim?',
        a: 'Sigortayı indirmeden prize müdahale etmeyin. Kasa kırıksa vida sıkmak çözmez, priz birkaç ayda yine sallanır. Bakmamız daha doğru olur.',
      },
      {
        q: 'Anahtar ısınıyor, tehlikeli mi?',
        a: 'Evet, ısınan anahtar arkasında gevşek bir bağlantı olduğunu gösterir. O lambayı kullanmayın, sigortasını indirin ve bizi arayın.',
      },
      {
        q: 'Sincan Fatih’e ne kadar sürede geliyorsunuz?',
        a: 'Sincan’a aynı gün geliyoruz. Aradığınızda o anki konumumuza göre net süre söylüyoruz.',
      },
      {
        q: 'Bütün prizleri değiştirmek tesisatı yenilemek demek mi?',
        a: 'Hayır. Priz değişimi sadece uçtaki parçayı yeniler. Duvar içindeki kablo yorgunsa sorun devam eder; ikisini ayırmak için hattı ölçüp bakmak gerekir.',
      },
    ],
    related: [
      { label: 'Sincan Elektrikçi', href: '/hizmet-bolgeleri/sincan' },
      { label: 'Priz ve Anahtar', href: '/hizmetler/priz-anahtar' },
      { label: 'Elektrik Tesisatı', href: '/hizmetler/elektrik-tesisati' },
      { label: 'Priz Isınması ve Nötr Hattı Kopması', href: '/rehber/priz-isinmasi-notr-hatti-kopmasi-yenimahalle' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
