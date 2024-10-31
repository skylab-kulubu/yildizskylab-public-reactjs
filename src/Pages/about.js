import React from "react";

const AboutPage = () => {
  return (
    <section
      className="flex flex-col scroll-mt-40 justify-center items-center box-border gap-20 bg-customDarkPurple"
      id="description"
    >
      <div className="w-screen flex justify-center tracking-widest">
        <h2 className="text-customAccent text-3xl lg:text-5xl">HAKKIMIZDA</h2>
      </div>
      <p className="text-customLightPink px-20 font-inter tracking-widest text-base md:text-lg lg:text-2xl xl:w-4/6 text-justify">
        SKY LAB Bilgisayar Bilimleri Kulübü Yıldız Teknik Üniversitesi
        bünyesinde ar-ge,proje, organizasyon, iş geliştirme ve tanıtım ekipleri
        ile ana yapısını oluşturan en aktif ve etkin kulüplerden biridir.
        <br />
        <br />
        Akran öğrenmesini baz alan workshop ve bootcamp programları ile
        temel-orta-ileri seviyede eğitimler sunmayı, sektör-öğrenci buluşmaları
        için büyük-küçük düzeyde seminer etkinlikleri ile networking anları
        yaratmayı hedefler.Yapay zekadan mobile, gömülü sistemlerden siber
        güvenliğe bilgisayar bilimlerinin 8 farklı alanını besleyen ar-ge
        ekipleri ile öğren-uygula metodunu kullanarak proje ekiplerini dinamik
        yapıda tutmayı hedefler.
        <br />
        <br />
        Bilgisayar bilimleri ekosisteminde hem sosyalleşerek hem de öğrenip
        geliştirerek var olmak istiyorsanız{" "}
        <span className="text-customAccent font-bold hover:text-[#3cf6d4] transition-colors duration-150">
          <a href="#">bize katılın!</a>
        </span>
      </p>
    </section>
  );
};

export default AboutPage;
