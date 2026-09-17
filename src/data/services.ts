export interface Service {
  slug: string;
  title: string;
  /** kart ve listelerde tek satır */
  short: string;
  icon: string;
  /** hizmet sayfasının girişi (2-3 cümle) */
  intro: string;
  /** "neler yapıyoruz" maddeleri */
  points: string[];
  /** hizmet sayfasında 2 paragraf, doğal ve elektrik odaklı */
  body: string[];
  faq: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: 'elektrik-ariza-tespiti',
    title: 'Elektrik Arıza Tespiti',
    short: 'Sigorta atması, kısmi elektrik kesintisi ve sebebi belirsiz arızaların ölçümle tespiti.',
    icon: 'power-off',
    intro:
      'Elektrik arızasının en zor yanı çoğu zaman sebebini görememektir. Biz körlemesine parça değiştirmek yerine hattı ölçer, sorunun tam olarak nereden geldiğini bulur ve öyle müdahale ederiz.',
    points: [
      'Sık atan sigortanın sebebini bulma (kaçak, aşırı yük ya da arızalı cihaz)',
      'Evin bir bölümünde elektrik olmaması',
      'Belirli bir prizde ya da hatta güç gidip gelmesi',
      'Ölçü aleti ile hat ve pano kontrolü',
    ],
    body: [
      'Bir sigorta durmadan atıyorsa bunun genelde üç sebebi olur: bir yerde kaçak vardır, o hatta kapasitesinin üstünde yük binmiştir ya da prize takılı bir cihaz arızalanmıştır. Hangisi olduğunu gözle anlamak mümkün değildir; pens ampermetre ve test cihazıyla hattı ölçmek gerekir. Biz önce yükü ve kaçağı ölçer, sonra hattı bölerek sorunlu noktayı daraltırız.',
      'Evin yarısı karanlık, yarısı yanıyorsa sorun çoğu zaman bir ek yerindeki gevşemede ya da kopuk bir nötr hattındadır. Bu tür arızalarda acele edip duvar kırmadan, önce pano ve buatlardan başlayıp sistematik ilerleriz. Amacımız arızayı bir kez ve kalıcı çözmek, birkaç gün sonra aynı sorunla tekrar karşılaşmanızı önlemektir.',
    ],
    faq: [
      { q: 'Arıza tespiti için ücret alıyor musunuz?', a: 'Yapılacak işi ve ücreti tespit sonrası, işe başlamadan net söylüyoruz. Bazı arızaları telefonda tarif üzerine çözebiliyoruz; o zaman gelmeye gerek kalmıyor.' },
      { q: 'Sigorta atmıyor ama ışıklar kısılıp parlıyor, tehlikeli mi?', a: 'Bu genelde gevşek bir bağlantının ya da nötr sorununun işaretidir ve ihmal edilmemeli. En kısa sürede ölçüm yaptırmanız iyi olur.' },
    ],
    seoTitle: 'Elektrik Arıza Tespiti Ankara | Mr Volt',
    seoDescription:
      "Ankara'da sık atan sigorta, kısmi elektrik kesintisi ve sebebi belirsiz arızaların ölçümle tespiti ve kalıcı çözümü. Telefonla ön teşhis: 0506 254 76 78.",
  },
  {
    slug: 'sigorta-pano',
    title: 'Sigorta ve Pano İşleri',
    short: 'Sigorta değişimi, pano yenileme, sigorta gruplarını ayırma ve etiketleme.',
    icon: 'panel',
    intro:
      'Pano, evin elektriğinin kalbidir; düzenli ve doğru kurulmuş bir pano hem güvenlik hem de arıza anında hız demektir. Dağınık, etiketsiz ya da yetersiz panoları baştan düzenliyoruz.',
    points: [
      'Sigorta ve otomat değişimi',
      'Eski sigorta kutusunu yenileme',
      'Sigorta gruplarını ayırma (mutfak, banyo, aydınlatma)',
      'Panoyu etiketleme, düzenli ve okunur hale getirme',
    ],
    body: [
      'Çoğu evde tek bir sigorta bütün bir kata bakar; o hatta bir sorun çıktığında evin yarısı birden kararır ve arızayı bulmak zorlaşır. Doğru kurulmuş bir panoda mutfak, banyo, aydınlatma ve priz hatları ayrı gruplara bölünür. Böylece bir yerde sorun olduğunda yalnızca o grup etkilenir ve nerede ne olduğu ilk bakışta anlaşılır.',
      'Sigorta ve otomat seçerken hattın taşıyacağı akımı ve kablo kesitini dikkate almak gerekir; olduğundan büyük bir otomat takmak koruma değil, risk demektir. Pano işini yaparken her sigortanın hangi hatta baktığını etiketler, biten işi test ederek teslim ederiz.',
    ],
    faq: [
      { q: 'Eski seramik sigortalar hâlâ güvenli mi?', a: 'Çalışıyor olabilir ama bugünün yükleri için yetersiz ve kaçak akıma karşı korumasızdır. Otomatlı bir panoya ve kaçak akım rölesine geçmenizi öneririz.' },
      { q: 'Pano yenileme evde elektriği uzun süre keser mi?', a: 'İşi mümkün olduğunca kısa kesintiyle planlıyoruz. Çoğu daire panosunu aynı gün içinde bitirip elektriği geri veriyoruz.' },
    ],
    seoTitle: 'Sigorta ve Pano Yenileme Ankara | Mr Volt',
    seoDescription:
      "Ankara'da sigorta değişimi, pano yenileme, sigorta gruplarını ayırma ve etiketleme. Güvenli, düzenli ve test edilmiş pano işçiliği: 0506 254 76 78.",
  },
  {
    slug: 'kacak-akim-rolesi',
    title: 'Kaçak Akım Rölesi',
    short: 'Kaçak akım rölesi montajı, sürekli atan rölenin tespiti ve topraklama kontrolü.',
    icon: 'shield',
    intro:
      'Kaçak akım rölesi, bir yerde elektrik kaçağı olduğunda saniyeden kısa sürede akımı kesip sizi çarpılmaktan koruyan cihazdır. Evinizde yoksa ya da devre dışıysa, en öncelikli işlerden biri budur.',
    points: [
      'Kaçak akım rölesi (30 mA) montajı',
      'Sürekli atan rölenin sebebini ölçerek bulma',
      'Topraklama kontrolü ve tamamlama',
      'Cihaza dokununca çarpma şikâyetinin çözümü',
    ],
    body: [
      'Kaçak akım rölesi (yaygın adıyla kaçak akım koruma) 30 mA gibi çok küçük bir kaçağı bile algılar ve hattı anında keser. İnsanı elektrik çarpmasından koruyan asıl cihaz budur; bu yüzden ıslak zeminli banyo ve mutfağın olduğu her evde bulunması gerekir. Üzerindeki test (T) butonuna ara ara basıp attığını görmek, çalıştığından emin olmanın basit yoludur.',
      'Rölenin sebepsiz yere atması can sıkıcıdır ama aslında bir uyarıdır: genelde nemlenmiş bir hat, arızalı bir cihaz ya da yanlış bir nötr bağlantısı vardır. Röleyi iptal etmek yerine hattı ölçüp kaçağın kaynağını buluruz; çünkü röle boşuna atmaz, çoğu zaman gerçek bir sorunu gösterir.',
    ],
    faq: [
      { q: 'Kaçak akım rölesi zorunlu mu?', a: 'Can güvenliği için gereklidir ve yeni tesisatlarda standarttır. Evinizde yoksa takılmasını kesinlikle öneririz.' },
      { q: 'Röle sürekli atıyor, iptal edebilir miyiz?', a: 'İptal etmek doğru değildir; röle bir kaçağı gösteriyordur. Kaynağını bulup gidermek hem güvenli hem kalıcı çözümdür.' },
    ],
    seoTitle: 'Kaçak Akım Rölesi Montajı Ankara | Mr Volt',
    seoDescription:
      "Ankara'da kaçak akım rölesi montajı, sürekli atan rölenin ölçümle tespiti ve topraklama kontrolü. Çarpılmaya karşı güvenlik için: 0506 254 76 78.",
  },
  {
    slug: 'priz-anahtar',
    title: 'Priz ve Anahtar',
    short: 'Isınan/kıvılcım çıkaran priz, kırık anahtar değişimi ve yeni priz hattı çekme.',
    icon: 'plug',
    intro:
      'Priz ve anahtarlar en çok kullanılan, bu yüzden en çok yıpranan parçalardır. Isınan, gevşeyen ya da kıvılcım çıkaran bir prizi ertelemek doğru değildir; bunlar çoğu zaman yangının ilk habercisidir.',
    points: [
      'Isınan, yanık kokan ya da kıvılcım çıkaran prizin değişimi',
      'Gevşemiş, kırılmış anahtar ve priz yenileme',
      'Mutfak, banyo, çalışma alanına yeni priz hattı',
      'USB’li priz ve topraklı priz montajı',
    ],
    body: [
      'Bir priz ısınıyor ya da yanık kokuyorsa, içindeki klemens gevşemiş ve bağlantı direnç yapıp ısınıyor demektir. Bu ısı zamanla plastiği eritir ve gerçek bir yangın riskine döner. Böyle bir prizi kullanmayı bırakıp o hattın sigortasını indirmek, sonra da değiştirmek gerekir; biz bağlantıyı düzgün sıkıp gerekiyorsa klemensi de yenileriz.',
      'Yeni bir priz hattı çekerken en önemli nokta kablo kesitinin çekilecek yüke uygun olmasıdır. Çamaşır makinesi, fırın gibi yüksek güçlü cihazlar için ince kablo çekmek, ilerideki ısınmanın ve arızanın tohumunu ekmek demektir. Bu yüzden hattı baştan doğru kesitle ve düzenli çekeriz.',
    ],
    faq: [
      { q: 'Priz yanığı kokuyor, ne yapmalıyım?', a: 'O prizi kullanmayın ve mümkünse o hattın sigortasını indirin. En kısa sürede değiştirilmesi gerekir; arayın, bakalım.' },
      { q: 'Tek prizi değiştirmek için gelir misiniz?', a: 'Geliriz. Küçük işleri de yapıyoruz; sizin için güvenlik önemliyse boyutu önemli değil.' },
    ],
    seoTitle: 'Priz ve Anahtar Değişimi Ankara | Mr Volt',
    seoDescription:
      "Ankara'da ısınan/kıvılcım çıkaran priz, kırık anahtar değişimi ve yeni priz hattı çekme. Güvenli, doğru kesitli işçilik: 0506 254 76 78.",
  },
  {
    slug: 'aydinlatma-avize',
    title: 'Aydınlatma ve Avize',
    short: 'Avize, spot, sarkıt ve LED şerit montajı; iç ve dış mekân aydınlatma çözümleri.',
    icon: 'bulb',
    intro:
      'Doğru aydınlatma bir mekânın havasını tümüyle değiştirir. Avize ve spot montajından gizli LED bant uygulamalarına kadar, hem şık hem de düzgün çalışan aydınlatmalar kuruyoruz.',
    points: [
      'Avize, sarkıt ve aplik montajı',
      'Spot ve gömme armatür uygulaması',
      'Gizli LED bant ve şerit aydınlatma',
      'Bahçe, dış cephe ve tabela aydınlatması',
    ],
    body: [
      'LED aydınlatmada işin görünmeyen ama en önemli kısmı sürücü (trafo) seçimidir. Yanlış ya da kalitesiz bir sürücü, LED’lerin kısa sürede sönmesine, titremesine ya da renk atmasına yol açar. Biz armatüre uygun sürücüyü seçer, bağlantıyı düzgün yapar ve aydınlatmanın yıllarca sorunsuz çalışmasını hedefleriz.',
      'Gizli LED bant uygulamalarında ışığın homojen dağılması ve kablonun görünmemesi işçiliğe bağlıdır. Asma tavan, mobilya arkası ya da merdiven basamağı gibi yerlerde bandı doğru yere, doğru açıyla yerleştirmek gerekir. Dış mekânda ise neme ve suya dayanıklı (IP korumalı) malzeme kullanmak şarttır.',
    ],
    faq: [
      { q: 'Avizeyi ben aldım, sadece montaj yapar mısınız?', a: 'Tabii, kendi aldığınız avize, spot ya da sarkıtı montaj ederiz. İsterseniz uygun ürün konusunda da fikir veririz.' },
      { q: 'LED’lerim sürekli yanıyor, sebebi ne?', a: 'Genelde uygun olmayan sürücü ya da ısı sorunudur. Bakıp doğru sürücüyle kalıcı çözüm sağlıyoruz.' },
    ],
    seoTitle: 'Avize ve Aydınlatma Montajı Ankara | Mr Volt',
    seoDescription:
      "Ankara'da avize, spot, sarkıt ve gizli LED bant montajı; iç ve dış mekân aydınlatma. Doğru sürücü, temiz işçilik: 0506 254 76 78.",
  },
  {
    slug: 'elektrik-tesisati',
    title: 'Elektrik Tesisatı',
    short: 'Yeni tesisat, tadilatta hat yenileme ve eski tesisatın güvenli şekilde elden geçirilmesi.',
    icon: 'wire',
    intro:
      'Elektrik tesisatı evin görünmeyen iskeletidir; doğru kurulduğunda yıllarca sorun çıkarmaz, yanlış kurulduğunda ise sürekli arızayla uğraşırsınız. Yeni tesisat ve tadilat işlerini baştan doğru kuruyoruz.',
    points: [
      'Sıfırdan elektrik tesisatı',
      'Tadilatta hat yenileme ve ilave hat',
      'Eski, yorulmuş tesisatın elden geçirilmesi',
      'Buat, kablo kanalı ve düzenli kablolama',
    ],
    body: [
      'Yıllar önce döşenmiş tesisatlarda kablolar zamanla yorulur, yalıtımı sertleşir ve o günün ihtiyacına göre çekilmiş ince hatlar bugünün cihazlarını kaldıramaz olur. Böyle evlerde sık atan sigorta ve ısınan hatlar tesadüf değildir. Tesisatın durumunu ölçerek değerlendirir, her şeyi birden yenilemek yerine gerçekten gereken yerlerden başlayan kademeli bir yol öneririz.',
      'Yeni bir tesisat çekerken kablo kesitleri, hat sayısı ve pano düzeni baştan doğru planlanmalıdır. İyi bir tesisatta mutfak ve banyo gibi yük çeken alanlar ayrı hatlardan beslenir, her şey pano üzerinden düzenli biçimde toplanır. Bu düzen sadece güvenlik değil, ileride olası bir arızada işi kolaylaştıran bir yatırımdır.',
    ],
    faq: [
      { q: 'Tüm evi bir anda yenilemek şart mı?', a: 'Şart değil. Önce durumu ölçüyoruz; güvenlik açısından kritik yerlerden başlayan kademeli bir plan çoğu zaman daha mantıklı oluyor.' },
      { q: 'Tadilatta elektrikçiyle ustaların koordinasyonu nasıl oluyor?', a: 'Sıva ve boya öncesi kaba tesisatı, sonrasında ise priz-anahtar ve armatürleri yapıyoruz. Zamanlamayı diğer ustalarla birlikte planlıyoruz.' },
    ],
    seoTitle: 'Elektrik Tesisatı Ankara | Mr Volt',
    seoDescription:
      "Ankara'da sıfırdan elektrik tesisatı, tadilatta hat yenileme ve eski tesisatın güvenli elden geçirilmesi. Doğru kesit, düzenli kablolama: 0506 254 76 78.",
  },
  {
    slug: 'ev-isyeri-elektrigi',
    title: 'Ev ve İş Yeri Elektriği',
    short: 'Daire, iş yeri, mağaza ve atölye için arıza, kurulum ve bakım hizmetleri.',
    icon: 'store',
    intro:
      'İster ev ister iş yeri olsun, elektriğin kesintisiz ve güvenli olması gerekir. Konuttan mağazaya, ofisten küçük atölyeye kadar arıza, kurulum ve bakım işlerini üstleniyoruz.',
    points: [
      'Daire ve site elektriği',
      'Mağaza, ofis ve dükkân elektriği',
      'Atölye ve iş yeri pano-hat işleri',
      'Periyodik bakım ve güvenlik kontrolü',
    ],
    body: [
      'İş yerlerinde elektrik arızası çoğu zaman doğrudan gelir kaybı demektir; bu yüzden buralarda hız ve planlama önemlidir. Vitrin ve tabela aydınlatması, yazarkasa ve cihazlar için ayrı hatlar, yük çeken ekipmanların dengeli dağıtılması gibi konularda işinizi aksatmayacak şekilde, mümkünse mesai dışına denk getirerek çalışırız.',
      'Konutta ise amaç güvenli ve derdi az bir elektrik düzenidir. Kaçak akım koruması, düzenli bir pano ve ihtiyaca göre planlanmış priz hatları çoğu sorunu daha çıkmadan önler. Yeni bir eve taşındıysanız, kullanmaya başlamadan önce genel bir güvenlik kontrolü yaptırmak iyi bir fikirdir.',
    ],
    faq: [
      { q: 'İş yerimin elektriğini mesai dışında yapabilir misiniz?', a: 'Evet, iş yerlerinde çoğu zaman akşam ya da hafta sonunu tercih ediyoruz ki işinizi aksatmayalım.' },
      { q: 'Periyodik bakım veriyor musunuz?', a: 'Veriyoruz. Pano, kaçak akım ve genel hat kontrolünü kapsayan düzenli bakımla arızaları önceden yakalıyoruz.' },
    ],
    seoTitle: 'Ev ve İş Yeri Elektrikçisi Ankara | Mr Volt',
    seoDescription:
      "Ankara'da ev, iş yeri, mağaza ve atölye için elektrik arıza, kurulum ve bakım. İşinizi aksatmadan, güvenli çözümler: 0506 254 76 78.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
