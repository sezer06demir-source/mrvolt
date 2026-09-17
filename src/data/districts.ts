export interface District {
  slug: string;
  name: string;
  locative: string;          // Turkish locative form, e.g. "Sincan'da"
  short: string;             // one natural line for cards, ~70-95 chars
  intro: string;             // 2 sentences, natural, opens the district page
  paragraphs: string[];      // exactly 3 items, each 2-4 sentences, UNIQUE per district
  neighborhoods: string[];   // the real mahalle/semt names I give you below
  faq: { q: string; a: string }[]; // exactly 3 district-specific Q&A, natural
  seoTitle: string;          // 50-60 chars, natural, human
  seoDescription: string;    // 140-160 chars, natural, human
}

export const districts: District[] = [
  {
    slug: "sincan",
    name: "Sincan",
    locative: "Sincan'da",
    short: "Sincan'da atan sigortayı tahminle değil, ölçüm yaparak kaynağından çözüyoruz.",
    intro:
      "Sincan'dan gelen çağrıların çoğu sürekli atan bir sigortayla başlıyor ve insanların çoğu bunu tek başına bir sigorta arızası sanıyor. Oysa sigorta çoğu zaman suçlu değil, sadece haber veren taraftır; işin özü o haberin nereden geldiğini doğru okumakta.",
    paragraphs: [
      "Bir sigorta atıyorsa aslında üç ihtimal vardır: hatta bir kaçak vardır, o gruba binen yük taşıma sınırını aşmıştır ya da prize takılı bir cihaz içten arıza yapmıştır. Fatih ve Osmanlı taraflarındaki dairelerde çoğu zaman önce tüm cihazları çekip sigortayı tek tek deniyor, sonra pens ampermetreyle hattın gerçekten ne kadar akım çektiğini ölçüyoruz. Bu ölçüm olmadan parça değiştirmek körlemesine iş olur.",
      "En sık karıştırılan şey, aşırı yük sigortasıyla kaçak akım rölesini ayırt edememek. Isıtıcı, fırın ve kettle aynı hatta bindiğinde atan sigorta bir yük meselesidir; ama röle atıyorsa ortada toprağa kaçan bir akım vardır ve bu can güvenliği konusudur. Menderes ve Pınarbaşı'ndaki evlerde çoğu zaman çözüm, yükü doğru gruplara bölmek ya da nemden kaçak yapan tek bir hattı bulup ayırmak oluyor.",
      "Arızalı bir cihazın koca daireyi karanlıkta bırakması da çok görülür. Böyle durumda cihazı fişten çekince sorun kaybolur, tekrar takınca döner; biz bu yöntemle suçluyu daraltıp sonra hattı ölçerek doğruluyoruz. Malazgirt tarafında son gelen bir işte sorun evin elektriğinde değil, eskimiş bir su ısıtıcısının rezistansındaydı.",
    ],
    neighborhoods: ["Fatih", "Yenikent", "Törekent", "Osmanlı", "Menderes", "Pınarbaşı", "Malazgirt"],
    faq: [
      {
        q: "Sincan'da sigortam neden durup dururken atıyor?",
        a: "Genelde üç sebepten olur: hatta kaçak, gruba binen aşırı yük ya da arızalı bir cihaz. Hangisi olduğunu ölçmeden söylemek doğru olmaz; yerinde ölçüp kaynağı netleştiriyoruz.",
      },
      {
        q: "Sigorta mı arızalı yoksa başka bir sorun mu var, nasıl anlarım?",
        a: "Sigortanın kendisi nadiren bozulur; çoğu zaman o sadece bir sorunu haber verir. Cihazları tek tek deneyip hattı ölçtüğümüzde asıl sebebin cihazda mı yoksa tesisatta mı olduğu ortaya çıkıyor.",
      },
      {
        q: "Fatih'te akşam arıza için ulaşabilir miyim?",
        a: "Telefon her zaman açık, 0506 254 76 78'den ulaşabilirsiniz. Arızayı kısaca anlatırsanız yanımıza doğru aleti alıp geliyoruz, boşa çıkmıyoruz.",
      },
    ],
    seoTitle: "Sincan Elektrikçi | Mr Volt Elektrik Arıza",
    seoDescription:
      "Sincan'da sürekli atan sigorta, kaçak akım ve elektrik arızalarını ölçüm yaparak kaynağından çözüyoruz. Fatih, Menderes, Pınarbaşı ve çevresi: 0506 254 76 78.",
  },
  {
    slug: "yenikent",
    name: "Yenikent",
    locative: "Yenikent'te",
    short: "Yenikent'te kaçak akım rölesinin doğru çalışıp çalışmadığını test edip kuruyoruz.",
    intro:
      "Yenikent'teki dairelerde en çok konuştuğumuz konulardan biri kaçak akım rölesi, yani panodaki o test butonlu şalter. Çoğu kişi onun ne işe yaradığını bilmeden yaşıyor, oysa o küçük parça bir hayatı kurtarabilecek en önemli koruma.",
    paragraphs: [
      "Kaçak akım rölesi, giden ve dönen akım arasındaki en ufak dengesizliği yakalar; yani elektrik toprağa ya da bir insana kaçmaya başladığı anda milisaniyeler içinde hattı keser. Ev tipi rölelerde bu eşik 30 miliamperdir ve bu değer tesadüf değil, insan için tehlikeli sınırın altında tutulmak için seçilmiştir. 29 Ekim tarafındaki dairelerde ilk yaptığımız iş çoğu zaman bu rölenin gerçekten devrede olup olmadığını kontrol etmek oluyor.",
      "Rölenin üstünde 'T' ya da 'Test' yazan bir buton vardır ve bunu ayda bir elinizle basıp denemek gerekir; bastığınızda elektrik kesiliyorsa röle sağlıklıdır, kesmiyorsa o koruma aslında yok demektir. Fevziçakmak'taki bir işte röle takılıydı ama içi arızalanmıştı, test butonu tepki vermiyordu; dışarıdan bakınca her şey yolunda görünse de aslında ev korumasızdı.",
      "Bazen de röle sebepsiz gibi görünen anlarda atar ve insanlar bundan bıkıp iptal ettirmek ister; bu çok yanlış olur. Menderes ve Mustafa Kemal taraflarında böyle çağrılara gidip genelde nemlenmiş bir hat, dış mekâna kaçak yapan bir priz ya da eskimiş bir cihaz buluyoruz. Röleyi susturmak yerine onu attıran gerçek kaçağı bulmak doğru olan.",
    ],
    neighborhoods: ["29 Ekim", "Fevziçakmak", "Menderes", "Mustafa Kemal", "Melih Gökçek Bulvarı"],
    faq: [
      {
        q: "Yenikent'te kaçak akım rölesinin çalıştığını nasıl anlarım?",
        a: "Rölenin üstündeki test (T) butonuna basın; elektrik anında kesiliyorsa sağlıklıdır. Kesmiyorsa koruma devre dışı demektir, bunu mutlaka baktırmak gerekir.",
      },
      {
        q: "Rölem sürekli atıyor, iptal ettirsem olur mu?",
        a: "Kesinlikle olmaz, o röle can güvenliğiniz için var. Sürekli atıyorsa ortada gerçek bir kaçak vardır; hangi hattın kaçak yaptığını ölçerek bulup onu çözüyoruz.",
      },
      {
        q: "Evimde kaçak akım rölesi hiç yok, taktırmalı mıyım?",
        a: "Kesinlikle evet, en önemli koruma budur. Panonuza uygun 30 mA'lik röleyi kurup test ederek devrede olduğundan emin oluyoruz.",
      },
    ],
    seoTitle: "Yenikent Elektrikçi – Mr Volt Elektrik Servisi",
    seoDescription:
      "Yenikent'te kaçak akım rölesi kurulumu, testi ve sürekli atan röle sorunları. 30 mA korumanın doğru çalıştığından emin oluyoruz: 0506 254 76 78.",
  },
  {
    slug: "etimesgut",
    name: "Etimesgut",
    locative: "Etimesgut'ta",
    short: "Etimesgut'ta topraklamanın gerçekten iş görüp görmediğini ölçerek kontrol ediyoruz.",
    intro:
      "Etimesgut'ta pek çok evde priz üç uçlu görünür ama toprak hattı ya hiç bağlı değildir ya da işini yapmaz. Topraklama gözle görülmeyen bir koruma olduğu için ihmal edilir, oysa bir cihaz kaçak yaptığında sizi akımdan koruyacak olan tam da odur.",
    paragraphs: [
      "Topraklamanın işi basit ama hayatidir: bir cihazın gövdesine elektrik kaçarsa, o akımı sizin üzerinizden değil toprak hattından güvenle akıtır ve çoğu zaman sigortayı ya da kaçak akım rölesini attırarak sizi uyarır. Eryaman ve Elvankent'teki dairelerde priz kapaklarını açtığımızda toprak ucunun boşta bırakıldığını sık görüyoruz; dışarıdan çalışır gibi durur ama koruma aslında yoktur.",
      "Topraklamanın varlığına inanmak yetmez, direncini ölçmek gerekir. Bunun için topraklama ölçer kullanıyor, hattın gerçekten yeterince düşük dirençle toprağa bağlı olduğunu görüyoruz; değer yüksekse toprak vardır ama görevini yapamaz. Ahimesut tarafındaki bir işte fişler üç uçluydu ama tesisatta toprak hattı hiç çekilmemişti, yani koruma en baştan yoktu.",
      "Özellikle çamaşır makinesi, bulaşık makinesi ve elektrikli su ısıtıcısı gibi gövdesi metal ve suyla çalışan cihazlarda topraklama pazarlık konusu değildir. Göksu ve Piyade taraflarında bu cihazların prizlerini önceliklendirip toprak hattını sağlam bir şekilde tamamlıyor, ardından kaçak akım rölesiyle birlikte test ederek korumanın bütün olarak çalıştığını doğruluyoruz.",
    ],
    neighborhoods: ["Eryaman", "Elvankent", "Bağlıca", "Göksu", "Ahimesut", "Piyade", "Oğuzlar"],
    faq: [
      {
        q: "Etimesgut'taki evimde topraklama var mı, nasıl anlaşılır?",
        a: "Prizin üç uçlu olması topraklama var demek değildir; toprak ucu boşta olabilir. Biz topraklama ölçerle direnci ölçüp hattın gerçekten iş görüp görmediğini net söylüyoruz.",
      },
      {
        q: "Topraklama olmazsa ne olur?",
        a: "Bir cihaz kaçak yaptığında sizi koruyacak yol kalmaz ve akım sizin üzerinizden geçebilir. Topraklama, kaçağı güvenle toprağa akıtıp korumaları devreye sokan asıl güvenlik hattıdır.",
      },
      {
        q: "Beyaz eşyalarımın prizi topraklı olmalı mı?",
        a: "Kesinlikle evet, özellikle çamaşır-bulaşık makinesi ve su ısıtıcısında şart. Bu prizleri önce ele alıp toprak hattını tamamlıyor ve röleyle birlikte test ediyoruz.",
      },
    ],
    seoTitle: "Etimesgut Elektrikçi | Mr Volt Elektrik",
    seoDescription:
      "Etimesgut'ta topraklama kontrolü, priz toprak hattı ve güvenlik testleri. Eryaman ve Elvankent'te korumanın gerçekten çalıştığından emin oluyoruz: 0506 254 76 78.",
  },
  {
    slug: "cankaya",
    name: "Çankaya",
    locative: "Çankaya'da",
    short: "Çankaya'nın eski binalarında yorulmuş tesisatı ölçüp kademeli ve güvenli yeniliyoruz.",
    intro:
      "Çankaya'da çok sayıda bina yıllar önce, bugünün elektrik yükü hiç düşünülmeden döşenmiş tesisatlarla ayakta. Kablolar da tıpkı diğer şeyler gibi yorulur; yalıtımı sertleşir, bağlantıları gevşer ve bir noktadan sonra ısınmaya başlar.",
    paragraphs: [
      "Eski bir dairede sık atan sigorta çoğu zaman arıza değil, hattın artık bugünkü yüke yetmediğinin işaretidir. Kızılay ve Bahçelievler'deki apartmanlarda o dönem iki üç prize göre çekilmiş ince kesitli kablolar bugün klima, fırın ve ısıtıcıyı aynı anda taşımaya çalışıyor. Biz önce hattın kesitini ve çektiği yükü ölçüyor, kablonun gerçekten zorlanıp zorlanmadığını görüyoruz.",
      "Yıllanmış tesisatta asıl sinsi tehlike kabloların ek yerlerinde ve klemenslerde saklıdır; zamanla gevşeyen bir bağlantı orada ısınır, yalıtımı yakar ve çoğu zaman kimse fark etmez. Ayrancı tarafındaki bir işte duvarın içindeki eski bir ek kutusunda kararmış, ısıdan erimeye başlamış bir bağlantı bulmuştuk. Elektrikte güven, ustada tecrübe derken kastettiğimiz tam da bu gizli noktaları görebilmek.",
      "Böyle binalarda 'her şeyi baştan yenileyelim' demek her zaman doğru değil; masraflı ve çoğu zaman gereksizdir. Dikmen ve Birlik taraflarında yaptığımız gibi önce hattı bölüp en riskli grupları belirliyor, mutfak ve ısıtıcı gibi ağır yük hatlarını öncelikli yenileyip gerisini plana yayıyoruz. Böylece hem güvenli oluyor hem de bütçeyi bir kerede zorlamıyor.",
    ],
    neighborhoods: ["Kızılay", "Çukurambar", "Bahçelievler", "Ayrancı", "Oran", "Dikmen", "Birlik"],
    faq: [
      {
        q: "Çankaya'da eski binada tüm tesisatı yenilemek şart mı?",
        a: "Çoğu zaman hayır. Hattı ölçüp en riskli grupları buluyoruz; mutfak ve ısıtıcı gibi ağır hatları öncelikli yenileyip gerisini plana yayarak hem güvenli hem makul bir yol izliyoruz.",
      },
      {
        q: "Bahçelievler'de eski daireme klima taktırdım, sigorta atmaya başladı.",
        a: "Büyük ihtimalle o hat bu ek yükü kaldırmıyor. Kablonun kesitini ve çektiği akımı ölçüp klima için ayrı, uygun kesitte bir hat çekmek en sağlıklı çözüm olur.",
      },
      {
        q: "Duvardaki priz ısınıyor, tehlikeli mi?",
        a: "Evet, ciddiye alınması gerekir; genelde gevşemiş bir bağlantının işaretidir. Vakit kaybetmeden o noktayı açıp bağlantıyı ya da yorulmuş prizi yeniliyoruz.",
      },
    ],
    seoTitle: "Çankaya Elektrik Arıza Servisi – Mr Volt",
    seoDescription:
      "Çankaya'da eski binalarda yorulmuş tesisat, ısınan bağlantı ve yetersiz hat sorunlarını ölçerek kademeli yeniliyoruz. Kızılay, Bahçelievler ve çevresi: 0506 254 76 78.",
  },
  {
    slug: "yenimahalle",
    name: "Yenimahalle",
    locative: "Yenimahalle'de",
    short: "Yenimahalle'de Ostim ve İvedik'te üç fazlı hatlarda yük dengesini ölçüp düzeltiyoruz.",
    intro:
      "Yenimahalle'de Ostim ve İvedik tarafındaki atölyeler üç fazlı elektrikle çalışır ve buradaki sorunların çoğu fazların dengesiz yüklenmesinden çıkar. Tek faza binen yük ötekileri boşta bırakınca hem verim düşer hem de ısınma ve arıza başlar.",
    paragraphs: [
      "Üç fazlı bir tesiste amaç, yükü R, S ve T fazlarına mümkün olduğunca eşit dağıtmaktır. Ostim'deki bir atölyede tezgâhların çoğu tek faza bağlanmışsa o faz aşırı ısınır, o fazın sigortası atar, diğer ikisi ise neredeyse boşta durur. Biz pens ampermetreyle her fazın çektiği akımı ayrı ayrı ölçüp aradaki farkı görüyor, sonra grupları yeniden bölüştürerek yükü dengeliyoruz.",
      "Dengesiz yükün bir diğer belası nötr hattında kendini gösterir; fazlar eşit olmadığında nötrden beklenenden fazla akım geçer ve bu hat ısınmaya başlar. İvedik tarafında sık karşılaştığımız ısınan nötr ve gevşemiş bağlantı sorunları çoğu zaman kötü dağıtılmış yükün sonucudur. Panoyu düzenleyip yükü dengeleyince hem ısınma biter hem de arıza sıklığı düşer.",
      "Motorlu makinelerin çok olduğu yerlerde ilk kalkış anındaki yüksek akım da hatları ve sigortaları zorlar. Batıkent ve Demetevler taraflarındaki küçük işletmelerde bile bu gözden kaçar; biz motor hattını doğru sigorta ve kesitle ayırıp, kalkış darbesini kaldıracak şekilde kuruyoruz. Doğru kurulan bir pano, aylarca dönüp durduğunuz arızaların çoğunu baştan bitirir.",
    ],
    neighborhoods: ["Batıkent", "Demetevler", "Çayyolu", "Ümitköy", "İvedik", "Ostim", "Şentepe"],
    faq: [
      {
        q: "Ostim'deki atölyemde bir fazın sigortası sürekli atıyor, neden?",
        a: "Büyük olasılıkla yük o faza yığılmış, diğer iki faz boşta kalıyor. Her fazın çektiği akımı ölçüp grupları yeniden dağıtarak yükü dengelediğimizde bu atmalar genelde biter.",
      },
      {
        q: "Üç fazlı panomda nötr hattı ısınıyor, sorun büyük mü?",
        a: "Ciddiye almak gerekir; genelde fazların dengesizliğinden ve gevşek bağlantıdan olur. Yükü dengeleyip bağlantıları sıktığımızda ısınma ortadan kalkıyor.",
      },
      {
        q: "İvedik'teki işletmeme büyük bir makine alacağım, hattım kaldırır mı?",
        a: "Bunu ölçmeden söylemek doğru olmaz. Mevcut yükü ve hat kesitini kontrol edip makinenin kalkış akımına uygun ayrı bir hat gerekiyorsa onu kuruyoruz.",
      },
    ],
    seoTitle: "Yenimahalle Elektrikçi | Mr Volt Sanayi",
    seoDescription:
      "Yenimahalle'de Ostim ve İvedik atölyelerinde üç fazlı hat, yük dengeleme ve pano düzeni. Isınan nötr ve atan faz sorunlarını ölçerek çözüyoruz: 0506 254 76 78.",
  },
  {
    slug: "mamak",
    name: "Mamak",
    locative: "Mamak'ta",
    short: "Mamak'ta ısınan priz ve gevşek bağlantıları yangına dönmeden bulup gideriyoruz.",
    intro:
      "Mamak'ta gittiğimiz işlerin sessiz ama en tehlikeli olanı ısınan priz ve gevşemiş bağlantılar. İnsanlar çoğu zaman prizin sıcaklığını ya da hafif yanık kokusunu önemsemez, oysa evdeki elektrik yangınlarının büyük kısmı tam buradan başlar.",
    paragraphs: [
      "Bir bağlantı gevşediğinde akım o daralan noktadan zorla geçmeye çalışır ve orada ısı üretir; buna geçiş direnci denir. Abidinpaşa ve Tuzluçayır taraflarındaki evlerde en çok gördüğümüz, vidası zamanla gevşemiş bir priz klemensinin yavaş yavaş kararması ve plastiğinin erimeye başlaması. Priz kapağını açıp içeriye baktığımızda kararma ve is izi varsa o priz artık değişmeli, sadece sıkmak yetmez.",
      "Yüksek güçlü cihazlar bu riski katlar; elektrikli ısıtıcı, şofben ya da ütü gibi çok akım çeken cihazlar zayıf bir bağlantıyı hızla ısıtır. Gülveren tarafında bir işte ısıtıcının takılı olduğu priz o kadar ısınmıştı ki duvar kâğıdı kavrulmaya başlamıştı; şans eseri erken fark edilmişti. Bu tür cihazları eski, gevşek prizlere takmamak, gerekirse o hattı sağlamlaştırmak gerekir.",
      "Kötü yapılmış ekler ve bantla birleştirilmiş kablolar da aynı tehlikeyi taşır. Akdere ve Kayaş taraflarında bazen tavan ya da buat içinde özensiz burulmuş, izole edilmemiş ekler buluyoruz; biz bunları uygun klemensle düzgün bağlıyor, ek yerini gizlemek yerine erişilebilir bir kutuya alıyoruz. Isınan bir nokta çoğu zaman kendini koku ve renk değişimiyle belli eder, bu uyarıları asla görmezden gelmeyin.",
    ],
    neighborhoods: ["Abidinpaşa", "Tuzluçayır", "Natoyolu", "Gülveren", "Akdere", "Kayaş"],
    faq: [
      {
        q: "Mamak'taki evimde bir priz ısınıyor ve hafif yanık kokuyor, ne yapmalıyım?",
        a: "O prizi kullanmayı bırakın ve bize haber verin; bu genelde gevşek bir bağlantının işaretidir ve ciddiye alınmalı. Prizi açıp bağlantıyı kontrol ediyor, kararmışsa değiştiriyoruz.",
      },
      {
        q: "Elektrikli ısıtıcıyı hangi prize takmam güvenli olur?",
        a: "Sağlam, gevşek olmayan ve mümkünse cihaza yakın çekilmiş bir hattaki prize takın; uzatma kablosundan kaçının. Gerekirse ısıtıcı için hattı sağlamlaştırıyoruz.",
      },
      {
        q: "Tavandaki kablo eki bantla yapılmış, sorun olur mu?",
        a: "Olur, bantlı ekler zamanla gevşeyip ısınabilir. Bu ekleri uygun klemensle düzgün bağlayıp erişilebilir bir buata alarak kalıcı ve güvenli hale getiriyoruz.",
      },
    ],
    seoTitle: "Mamak Elektrikçi – Mr Volt Elektrik Arıza",
    seoDescription:
      "Mamak'ta ısınan priz, gevşek bağlantı ve yangın riski taşıyan ekleri bulup güvenli hale getiriyoruz. Abidinpaşa, Gülveren, Kayaş ve çevresi: 0506 254 76 78.",
  },
  {
    slug: "kecioren",
    name: "Keçiören",
    locative: "Keçiören'de",
    short: "Keçiören'de dağınık panoları düzenleyip sigorta gruplarını ayırıp etiketliyoruz.",
    intro:
      "Keçiören'deki dairelerde en sık karşılaştığımız manzaralardan biri, tek bir sigortanın yarım evi beslediği ya da hiçbir sigortanın neyi kestiği bilinmeyen dağınık panolar. İyi düzenlenmiş bir pano hem güvenlik hem de arıza anında hayat kurtaran bir kolaylıktır.",
    paragraphs: [
      "Doğru bir panoda her önemli bölüm kendi sigortasında olur; aydınlatma ayrı, prizler ayrı, mutfak ve banyo gibi ıslak ve yüklü hatlar ayrı gruptadır. Etlik ve Kalaba taraflarındaki eski panolarda çoğu zaman tüm ev iki sigortaya sıkıştırılmış oluyor, bu da tek bir arızada evin yarısının birden kararması demek. Grupları mantıklı biçimde ayırdığımızda bir sorun çıktığında sadece o bölüm etkileniyor.",
      "Grupların ayrılması kadar önemlisi, hangi sigortanın nereye baktığının bilinmesi. Aktepe tarafında pano kapağını açtığımızda üstünde tek bir etiket bile olmayan panolar görüyoruz; arıza anında insan hangisini indireceğini bilemiyor. Biz her grubu tek tek deneyip neyi beslediğini buluyor, ardından panonun içine okunaklı etiketler koyarak bunu kalıcı hale getiriyoruz.",
      "Bir de sigortaların doğru amperde seçilmesi var; çok yüksek amperli bir sigorta, ince bir kabloyu korumak yerine onun tehlikeli biçimde ısınmasına göz yumar. Sancaktepe ve Güçlükaya taraflarında bazen kablo kesitine göre fazla büyük seçilmiş sigortalar buluyoruz; bunları hattın taşıma kapasitesine uygun değerlerle değiştiriyoruz. Düzenli ve doğru kurulmuş bir pano, ileride yaşanacak pek çok sorunu en baştan önler.",
    ],
    neighborhoods: ["Etlik", "Aktepe", "Kalaba", "Sancaktepe", "Bağlum", "Ayvalı", "Güçlükaya"],
    faq: [
      {
        q: "Keçiören'deki evimde tek sigorta atınca yarısı birden kararıyor, çözülür mü?",
        a: "Çözülür; bu, hatların tek bir gruba sıkıştırıldığını gösterir. Aydınlatma, priz ve ıslak hacimleri ayrı gruplara bölüp panoyu düzenlediğimizde tek arıza tüm evi etkilemez.",
      },
      {
        q: "Panomda hangi sigortanın neyi kestiği belli değil, bakabilir misiniz?",
        a: "Tabii, sık yaptığımız bir iş. Her grubu tek tek deneyip neyi beslediğini buluyor, sonra panoya okunaklı etiketler koyarak arıza anında işinizi kolaylaştırıyoruz.",
      },
      {
        q: "Sigortanın amperi yüksekse zararı olur mu?",
        a: "Olur; sigorta kabloyu korumak içindir, kesite göre fazla büyük seçilirse kablo tehlikeli biçimde ısınabilir. Hattın kapasitesine uygun değerle değiştirmek gerekir.",
      },
    ],
    seoTitle: "Keçiören Elektrikçi | Mr Volt Elektrik Servisi",
    seoDescription:
      "Keçiören'de pano düzenleme, sigorta gruplarını ayırma ve etiketleme. Etlik, Kalaba ve çevresinde güvenli, düzenli ve doğru amperli pano kurulumu: 0506 254 76 78.",
  },
  {
    slug: "kahramankazan",
    name: "Kahramankazan",
    locative: "Kahramankazan'da",
    short: "Kahramankazan'da aşırı yük ve yanlış kablo kesitinden doğan riskleri gideriyoruz.",
    intro:
      "Kahramankazan'a giden yolun uzunluğu bize her işi baştan doğru yapmayı öğretti, çünkü ikinci kez gelmek herkes için zaman kaybı. Buradaki çağrıların çoğunda kök sebep aynı: bir hattın taşıyabileceğinden fazla yük çekilmesi.",
    paragraphs: [
      "Her kablonun bir taşıma sınırı vardır ve bu sınır kesitiyle, yani bakır kalınlığıyla belirlenir; ince bir kabloya çok akım bindirirseniz kablo ısınır ve zamanla yalıtımı bozulur. Kazan merkez tarafında sık gördüğümüz hata, tek bir prizden uzatma kablosuyla ısıtıcı, su ısıtıcısı ve başka bir cihazı aynı anda çalıştırmak. O uzatma kablosunun inceliği çoğu zaman gözden kaçıyor ama asıl zorlanan ve ısınan yer orası oluyor.",
      "Yüksek güç çeken cihazlar için doğru çözüm, o cihaza kendi hattını, uygun kesitte ve kendi sigortasıyla çekmektir. Saray ve Orhaniye taraflarında ısıtma ve ısıtıcı hatlarını ayırıp kesitini yüke göre seçtiğimizde hem atan sigortalar duruyor hem de ısınma tehlikesi ortadan kalkıyor. Doğru kesit, sonradan yapılacak birçok tamiratın önüne geçer.",
      "Uzun süre çalışan cihazlarda kablo ısınması sinsi ilerler; el ile tutulamayacak kadar ısınan bir uzatma kablosu, çoğu zaman altındaki halının ya da ahşabın yanına kadar gider. Fatih ve Çakırlar taraflarında bu tür kullanımları görünce sabit ve uygun kesitte bir hat çekmeyi öneriyoruz; uzatma kablosu geçici bir çözümdür, yüksek güçlü cihaza kalıcı olarak asla uygun değildir.",
    ],
    neighborhoods: ["Kazan merkez", "Saray", "Orhaniye", "Fatih", "Çakırlar"],
    faq: [
      {
        q: "Kahramankazan'a kadar geliyor musunuz?",
        a: "Evet geliyoruz. Yol biraz uzun olduğu için çağrıları planlayıp geldiğimizde işi tam bitiriyoruz; 0506 254 76 78'den arayıp uygun günü belirleyelim.",
      },
      {
        q: "Isıtıcımı uzatma kablosuyla kullanıyorum, sakıncası var mı?",
        a: "Var; ince bir uzatma kablosu yüksek güçlü cihazın akımını taşımakta zorlanır ve ısınır. Bu cihaz için uygun kesitte, kendi sigortasıyla sabit bir hat çekmek doğru olan.",
      },
      {
        q: "Aynı prizden birkaç büyük cihaz çalıştırınca sigorta atıyor.",
        a: "Bu, o hattın taşıma sınırını aştığınızın işaretidir. Yükü ayrı hatlara bölüp her ağır cihaza kesitine uygun kendi hattını çekince sorun kökten çözülür.",
      },
    ],
    seoTitle: "Kahramankazan Elektrikçi – Mr Volt",
    seoDescription:
      "Kahramankazan'da aşırı yük, yanlış kablo kesiti ve uzatma kablosu risklerini gideriyor, ağır cihazlara uygun hat çekiyoruz. Kazan merkez ve çevresi: 0506 254 76 78.",
  },
  {
    slug: "pursaklar",
    name: "Pursaklar",
    locative: "Pursaklar'da",
    short: "Pursaklar'da LED aydınlatmayı doğru sürücü ve kesitle kurup titremeyi bitiriyoruz.",
    intro:
      "Pursaklar'da aydınlatmayla ilgili en çok gelen şikâyet, yeni takılan LED'lerin titremesi, uğuldaması ya da erken ömrünü tüketmesi. Çoğu insan LED'i alıp takınca iş biter sanır, oysa asıl mesele onu besleyen sürücüde ve doğru bağlantıda.",
    paragraphs: [
      "LED aydınlatma şebeke gerilimiyle doğrudan çalışmaz; arada gerilimi düşürüp sabitleyen bir sürücü (trafo) vardır ve bu parça kalitesizse ya da güce uymuyorsa ışık titrer, ısınır ve kısa sürede bozulur. Merkez ve Altınova taraflarında gelen 'LED'im sürekli yanıyor' işlerinin çoğunda sorun ampulde değil, ona ucuz ya da yanlış seçilmiş sürücüdeydi. Doğru sürücüyü LED'in gücüne göre seçmek işin yarısıdır.",
      "Bir diğer sık sorun, spotların hepsini tek bir zayıf hatta ya da eski bir dimmere bağlamak. Saray tarafında şerit LED'in bir ucu parlak öteki ucu sönük yanıyordu; sebebi kesiti yetersiz besleme kablosuydu, akım hattın sonuna kadar sağlıklı gidemiyordu. Şerit ve spot aydınlatmada kesiti ve besleme noktasını doğru seçmek, o rahatsız edici parlaklık farkını baştan önler.",
      "LED'ler az akım çeker ama yanlış kurulumda hâlâ ısı üretebilir; kapalı bir tavan boşluğunda havalanmayan sürücü sıcaktan ömrünü kısaltır. Mimar Sinan ve Karacakaya taraflarında spot yerleşimini yaparken sürücülerin ısı atabileceği bir yerde durmasına dikkat ediyor, dimlenecekse LED'e uyumlu dimmer kullanıyoruz. Doğru kurulan bir LED aydınlatma yıllarca titremeden ve sorunsuz çalışır.",
    ],
    neighborhoods: ["Merkez", "Saray", "Altınova", "Karacakaya", "Sirkeli", "Mimar Sinan"],
    faq: [
      {
        q: "Pursaklar'da yeni taktığım LED'ler titriyor, sebebi ne?",
        a: "Genelde sorun ampulde değil, ona uymayan ya da kalitesiz sürücüdedir; bazen de eski dimmer uyumsuzdur. LED'in gücüne uygun sürücü ve uyumlu dimmerle bu titreme genelde biter.",
      },
      {
        q: "Şerit LED'imin bir ucu parlak, diğer ucu sönük yanıyor.",
        a: "Bu genelde besleme kablosunun kesiti yetersiz olduğunda ya da yanlış noktadan beslendiğinde olur. Kesiti ve besleme noktasını düzeltince ışık boydan boya eşit olur.",
      },
      {
        q: "LED spotlar sık sık bozuluyor, normal mi?",
        a: "Değil; kaliteli ve doğru kurulmuş LED uzun ömürlüdür. Çoğu zaman sürücü ısı atamayan kapalı bir yerde kalmıştır; yerleşimi ve sürücü seçimini düzelttiğimizde sorun kalmıyor.",
      },
    ],
    seoTitle: "Pursaklar Elektrikçi | Mr Volt Aydınlatma",
    seoDescription:
      "Pursaklar'da LED ve spot aydınlatmayı doğru sürücü, kesit ve dimmerle kuruyoruz; titreme ve erken bozulmayı bitiriyoruz. Merkez, Altınova ve çevresi: 0506 254 76 78.",
  },
  {
    slug: "golbasi",
    name: "Gölbaşı",
    locative: "Gölbaşı'nda",
    short: "Gölbaşı'nda parafudrla ani gerilim yükselmelerine karşı cihazlarınızı koruyoruz.",
    intro:
      "Gölbaşı ve İncek tarafında şebekede zaman zaman yaşanan ani gerilim yükselmeleri, pahalı elektronik cihazları sessizce yakan bir tehlike. Bir yıldırım ya da şebeke dalgalanması saniyenin çok altında bir sürede gelir ve koruması olmayan bir tesiste doğrudan cihazlara ulaşır.",
    paragraphs: [
      "Parafudr, yani ani aşırı gerilim koruma cihazı, panoya konulan ve normalde hiçbir şey yapmayan ama gerilim tehlikeli biçimde yükseldiği an devreye girip o fazlalığı toprağa akıtan bir korumadır. İncek tarafında hassas cihazların, akıllı sistemlerin ve çok sayıda elektroniğin bulunduğu tesislerde bunu öneriyoruz; çünkü tek bir dalgalanma birden fazla cihazı aynı anda kullanılmaz hale getirebilir. Parafudrun çalışabilmesi için de sağlam bir topraklama şarttır, ikisi birlikte iş görür.",
      "Parafudrun bir ömrü vardır; büyük bir darbeyi karşıladıktan sonra üstündeki gösterge penceresi kırmızıya döner ve artık koruma vermez. Karagedik ve Oğulbey taraflarında kurulum yaparken müşteriye bu göstergeyi tanıtıyoruz ki ara sıra bakıp rengini kontrol edebilsinler; kırmızıysa değiştirmek gerekir. Var olduğunu unuttuğunuz bir koruma, tükendiğinde sizi yine korumasız bırakır.",
      "Ani gerilim koruması tek başına yeterli değildir, doğru bir bütünün parçasıdır; kaçak akım rölesi, sağlam topraklama ve düzgün bir pano bir araya geldiğinde tesis gerçekten güvenli olur. Taşpınar ve Hacılar taraflarında kurulum yaparken bu katmanları birlikte değerlendiriyor, eksik olanı tamamlıyoruz. 28 yılı aşkın tecrübeyle öğrendiğimiz şey şu: güvenlik tek bir cihaz değil, doğru kurulmuş bir bütündür.",
    ],
    neighborhoods: ["İncek", "Karagedik", "Oğulbey", "Hacılar", "Taşpınar", "Segmenler"],
    faq: [
      {
        q: "Gölbaşı İncek'te sık gerilim dalgalanması oluyor, cihazlarımı nasıl korurum?",
        a: "Panoya parafudr, yani ani aşırı gerilim koruması kurmak en etkili yol. Gerilim tehlikeli biçimde yükseldiği an devreye girip fazlalığı toprağa akıtarak cihazlarınızı korur.",
      },
      {
        q: "Parafudr taktırdım, bir daha ilgilenmesem olur mu?",
        a: "Ara sıra üstündeki gösterge penceresine bakmanız yeterli; rengi kırmızıya dönmüşse büyük bir darbe karşılamış ve ömrü bitmiş demektir, o zaman değiştirmek gerekir.",
      },
      {
        q: "Parafudr tek başına yeterli koruma mı?",
        a: "Tek başına değil; sağlam topraklama ve kaçak akım rölesiyle birlikte iş görür. Kurulumdan önce bu katmanların hepsini kontrol edip eksik olanı tamamlıyoruz.",
      },
    ],
    seoTitle: "Gölbaşı Elektrikçi – Mr Volt Elektrik Servisi",
    seoDescription:
      "Gölbaşı ve İncek'te parafudr ile ani gerilim koruması, topraklama ve pano güvenliği. Cihazlarınızı dalgalanmalara karşı koruyoruz: 0506 254 76 78.",
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}
