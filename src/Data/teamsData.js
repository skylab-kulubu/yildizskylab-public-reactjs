import algolabLogo from "../Assets/Images/algolab-logo.png";
import airlabLogo from "../Assets/Images/airlab-logo.jpg";
import chainlabLogo from "../Assets/Images/chainlab-logo.png";
import gamelabLogo from "../Assets/Images/gamelab-logo.png";
import mobilabLogo from "../Assets/Images/mobilab-logo.jpg";
import skysisLogo from "../Assets/Images/skysis-logo.jpg";
import skysecLogo from "../Assets/Images/skysec-logo.jpg";
import weblabLogo from "../Assets/Images//weblab-logo.png";
import skylabLogo from "../Assets/Images/skylab-logo.png";
import gecekoduLogo from "../Assets/Images/gecekodu-logo.png";

const TeamsData = {
    arge: [
      {
        name: "algolab",
        details: "ALGOLAB ekibi olarak algoritma ve programlama konusunda kendimizi geliştiren, temel ve orta düzeyde algoritma/CPP eğitimleri veren, insanları yazılım ve algoritma dünyasına hazırlayan bir ekibiz. Bu süreçte ekip olarak çalışmayı da öğreniyoruz. Ekip olarak competitive programming dünyasında emin adımlarla ilerliyoruz. Zaman zaman İnzva'nın veya diğer okulların yarışmalarına katılıyoruz. Ayrıca, her hafta AGC (Algorithm Games Challenge) isminde bir algoritma yarışması da düzenliyoruz. ALGOLAB, üç temel alt ekipten oluşur: Beginner: Başlangıç seviyesinde CPP ve algoritma eğitimi verir. Algolearning: Orta düzey algoritma eğitimi sağlar. Algostdy: Algoritma ve yarışmalar konusunda ekip çalışması odaklı bir eğitim sunar. Bu ekipler sayesinde hem bireysel hem de ekip olarak yeteneklerimizi geliştiriyoruz.",
        logo: algolabLogo
      },
      {
        name: "airlab",
        details: "AIRLAB ekibi olarak yapay zeka alanında çalışmalar yapıyoruz. Makine öğrenmesi, derin öğrenme gibi konularla uğraşmakta ve bu yönde yarışmalara katılmaktayız. Şu anda alt ekip olarak ulaşımda yapay zeka yarışmasında yer alıyoruz. Hedefimiz SKY LAB'i teknofestte en iyi şekilde temsil etmek. Bu sene ek olarak iki yarışmaya daha katılmak istiyoruz, bunlar türkçe doğal dil işleme ve sağlıkta yapay zeka. Aynı şekilde kaggle gibi platformlardan datathonlara katılmaya devam edeceğiz. Yaz döneminde ise ekipçe kendimizi geliştirmek adına eğitimler alacağız ve ARTLAB'de sergilemek istediğimiz projelerin üretimine başlayacağız.",
        logo: airlabLogo
      },
      {
        name: "chainlab",
        details: "ChainLab ekibi olarak blokchain ve teknolojisini anlayarak web1 web2 web3 alanlarında kendimizi geliştirmeyi, projeler çıkarmayı, hackathonlara katılmayı ve daha fazla insanın bu ekosistemi tanımasını sağlamayı amaçlıyoruz. Önümüzdeki hackathonlara hazırlanıyoruz ve ekipler çıkarmaya ve adımızı daha çok duyurmaya çalışıyoruz.",
        logo: chainlabLogo
      },
      {
        name: "gamelab",
        details: "GAMELAB ekibi olarak oyun geliştirme alanında çalışmalar yapıyoruz. Etkinlikler ve eğitimlerle, insanların bu alana girmesine vesile olup bir arada toplanabilecekleri ekip ortamı sağlıyoruz. Alt ekiplere bölünmüş şekilde çeşitli platformlar için oyunlar geliştiriyoruz. Bu sene oyun geliştirme yarışmalarına ekipçe veya bölünmüş birkaç ekip olarak katılmayı planlıyoruz.",
        logo: gamelabLogo
      },
      {
        name: "mobilab",
        details: "MOBILAB ekibi olarak SKY LAB Kulübünün ve okulumuzun mobil uygulama ihtiyaçlarını karşılamak için Flutter ile mobil uygulama projeleri yürütüyoruz. Aynı zamanda mobil programlamaya ilgi duyan ve bu alanda yeni olan arkadaşlarımızı projelerde yer almaya hazır olacak şekilde yetiştirerek yeni ekip arkadaşları edinmeye can atıyoruz. Okulumuzu ve kulübümüzü Teknofest gibi ulusal ve uluslararası yarışma ve etkinliklerde en iyi şekilde temsil etmeyi ve yaratıcı uygulama fikirlerini hayata geçirmeyi hedefliyoruz.",
        logo: mobilabLogo
      },
      {
        name: "skysis",
        details: "SKYSIS ekibi olarak gömülü sistemler üzerine projeler geliştirip çeşitli yarışmalara katılıyoruz. Şu anda TEKNOFEST’te son aşamasında olan Skylite ve Çedar ekibimiz büyük bir heyecanla çalışmaya devam ediyor. Ekibimizde farklı bölümlerden insanlara yer vererek, disiplinler arası bir çalışma ortamı yaratıyoruz. Hep birlikte gömülü sistemler alanında gömülü yazılım, donanım ve mekanik tasarımı alt başlıklarında kendimizi geliştiriyor bu alanlarda araştırma yazıları yazarak teknolojiyi takip ediyoruz. Temel amacımız, gömülü sistemlere ilgi duyan veya henüz bu alanda bilgi sahibi olmayan kişiler için bir topluluk oluşturmak. Ekip üyelerimiz, birlikte proje geliştirerek hem akademik hem de kariyer anlamında kendilerine katkı sağlıyorlar. Aynı zamanda grup çalışması deneyimi kazanarak, iş hayatına daha deneyimli ve donanımlı bir şekilde hazırlanıyorlar.",
        logo: skysisLogo
      },
      {
        name: "skysec",
        details: "SKY-SEC ekibi olarak biz 2020 den beri legal olarak ondan önce 2018 yılından beri ekip olmadan siber güvenlik alanında araştırma ekipleri olarak ilerlemekteydi. Şu anda ekip dinamiklerine yeni katılan biri pentesting, local pentesting (sızma testi ve kapalı ağ sızma testi) çalışmalarına ardından red teaming (saldırı senaryolarına) ardından blue team senaryoları (savunma senaryoları) üzerine çalışıyor. Sosyallik olarak Tryhackme hackthebox stackoverflow, wireshark forum ve underground platformlarda skydays ctf çağrılarıyla Türkiye de hacktrickten sonra siber güvenliğin merkezini İstanbula çekmeyi başardık. bu platformlarda dünyada ve Türkiyede ytü temsilciliği yapmaktayız. Bunların yanında SKY LAB ekipleri ve çalışmaları üzerine otomasyon güvenlik sistemi yazmaktayız. ismimiz siber güvenlik çalışma alanımız Bilgisayar bilimleri diyerek ilerleyen Mottomuz var.",
        logo: skysecLogo
      },
      {
        name: "weblab",
        details: "WEBLAB ekibi olarak, web uygulama geliştirme konusunda geniş bir yelpazede projeler yürütüyoruz. Kulübümüzün ihtiyaçlarını karşılamak amacıyla, React, Next.js, Java ve .NET gibi modern teknolojileri kullanarak hem frontend hem de backend geliştirmeleri yapıyoruz. Bu süreçte, çeşitli siteler ve uygulamalar oluşturuyor, kullanıcı deneyimini ve performansı ön planda tutarak etkili çözümler sunuyoruz. Ekip olarak, birçok farklı web uygulaması ve site geliştirerek, kulübümüzün ve diğer ilgili projelerin dijital ihtiyaçlarını karşılamayı hedefliyoruz.",
        logo: weblabLogo
      }
    ],
    social: [
        {
            "name": "organizasyon",
            "logo": skylabLogo,
            "details": "Organizasyon ekibi olarak sene içerisinde ARTLAB : Yapay Zeka Zirvesi, SKYDAYS : Türkiye'nin En Büyük Siber Güvenlik Zirvesi, YILDIZ JAM : Oyun Geliştirme Zirvesi ve Yarışması olmak üzere üç büyük organizasyon düzenliyoruz. Bunların yanı sıra mezunlarımızla buluştuğumuz, iş hayatını tanımamızda ve bağlantılar kurmamızda yardımcı olan söyleşi temalı BİZBİZE etkinliğimiz ve sosyal sorumluluklarımızı yerine getirmemizi sağlayan etkinliklerimizle hem kulübümüze hem üniversitemize sosyal ve akademik anlamda değer sağlamayı amaçlıyoruz."
          },
          {
            "name": "gecekodu",
            "logo": gecekoduLogo,
            "details": "Haftanın bir günü toplanarak sabaha kadar ilgi alanlarımıza bağlı olarak zaman zaman ekipler halinde zaman zaman bireysel çalışmalar yapıyoruz. Farklı alanlarda Workshop veriyor ve gruplar halinde veya bireysel çalışmalarla projeler geliştiriyoruz."
          },
          {
            "name": "socilab",
            "logo": skylabLogo,
            "details": "Sosyalleşme ve etkileşim konusunda yaratıcı fikirlerle SOCILAB ekibi olarak kulüp üyelerinin keyifli vakit geçirebileceği etkinlikler düzenlemek ve kulüp içi bağları güçlendirmek için çalışıyoruz. Aynı zamanda Sosyal sorumluluk projelerine katılmak isteyenleri bir araya getiriyor ve SOCILAB ekibi olarak çeşitli yardım etkinlikleri ve projeleri koordine ediyoruz."
          },
          {
            "name": "skymedya",
            "logo": skylabLogo,
            "details": "Grafik tasarım, animasyon ve video düzenleme gibi alanlarda eğitimler ve çalışmalar yürütüp kulübümüzün görsel kimliğini oluşturmak, etkileyici medya içerikleri üretmek ve kulübümüzün hikayesini anlatmak için çalışıyoruz"
          }
    ]
  };
  
  export default TeamsData;
  