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
  return (
    <>
      <section
        id="news"
        className="w-screen scroll-mt-40 flex flex-col items-center justify-center gap-20 py-20 bg-customDarkPurple box-border"
      >
        <div className="w-screen flex justify-center tracking-widest">
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
