import { useEffect, useState } from "react";
import { newsFetcher } from "../apis/newsFetcher";
import NewsComponent from "../Components/newsComponent";

export default function NewsPage() {
  const [news, setNews] = useState([]);
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
        className="w-screen lg:pt-36 bg-customDarkPurple box-border"
      >
        {loading && <div>Haberler Yükleniyor...</div>}

        {error && (
          <div>{`Haberler Yüklenirken Hatayla Karşılaşıldı ${error}`}</div>
        )}
        {news && (
          <>
            <div className="w-screen flex justify-center md:mt-10 mb-24 tracking-widest mt-12">
              <h2 className="text-customAccent text-3xl lg:text-5xl">
                HABERLER
              </h2>
            </div>
            <div className="flex gap-10 justify-center">
              {news.map((newData) => (
                <NewsComponent key={newData.id} singleNewData={newData} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
