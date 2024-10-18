import { useEffect, useState } from "react";
import { newsFetcher } from "../apis/newsFetcher";
import NewsCarousel from "../Components/newsCarousel";

export default function NewsPage() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await newsFetcher(
          "https://yusufacmaci.com/yildizskylab/news?page_id=1&page_size=5"
        );

        setNews(newsData.data);

        if (newsData.isSuccess === true) {
          setError(null);
        } else {
          setError(newsData.message);
        }
      } catch (err) {
        setError(err.message);
        setNews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  console.log(news);
  return (
    <>
      <section
        id="news"
        className="w-screen bg-customDarkPurple box-border pt-24 lg:pt-36"
      >
        <div className="w-screen flex justify-center md:mt-10 mb-24 tracking-widest mt-12">
          <h2 className="text-customAccent text-3xl lg:text-5xl">HABERLER</h2>
        </div>

        {error && error !== "Request aborted" && (
          <div className="text-white text-3xl text-center">{`Haberler Yüklenirken Hatayla Karşılaşıldı: ${error}`}</div>
        )}

        <div className="w-5/6 m-auto">
          <NewsCarousel news={news} loading={loading} />
        </div>
      </section>
    </>
  );
}
