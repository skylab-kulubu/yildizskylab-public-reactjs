import React from "react";


const AboutPage = () => {
  return (
    <section className="h-screen w-screen  md:pt-36 bg-customDarkPurple" id="description">
        
      <div className="w-screen flex justify-center md:mt-10 mb-24 tracking-widest">
        <h2 className="text-customAccent text-3xl lg:text-5xl">HAKKIMIZDA</h2>
      </div>
      <div className="text-center lg:text-left h-full flex justify-center sm:items-center lg:items-start px-6  md:px-12 text-sm md:text-lg lg:text-base font-inter tracking-widest ">
        <p className="lg:w-1/2 text-customLightPink">
          SKY LAB Bilgisayar Bilimleri Kulübü
          Yıldız Teknik Üniversitesi bünyesinde ar-ge,proje, organizasyon, iş
          geliştirme ve tanıtım ekipleri ile ana yapısını oluşturan en aktif ve
          etkin kulüplerden biridir.
          <br />
          <br />
          Akran öğrenmesini baz alan workshop ve bootcamp programları ile
          temel-orta-ileri seviyede eğitimler sunmayı, sektör-öğrenci
          buluşmaları için büyük-küçük düzeyde seminer etkinlikleri ile
          networking anları yaratmayı hedefler.Yapay zekadan mobile, gömülü
          sistemlerden siber güvenliğe bilgisayar bilimlerinin 8 farklı alanını
          besleyen ar-ge ekipleri ile öğren-uygula metodunu kullanarak proje
          ekiplerini dinamik yapıda tutmayı hedefler.
          <br />
          <br />
          Bilgisayar bilimleri ekosisteminde hem sosyalleşerek hem de öğrenip
          geliştirerek var olmak istiyorsanız{" "}
          <span className="text-customAccent font-bold hover:text-[#3cf6d4] transition-colors duration-150">
            <a href="#">bize katılın!</a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
