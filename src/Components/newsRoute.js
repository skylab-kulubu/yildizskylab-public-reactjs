import { newsFetcher } from "../apis/newsFetcher";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsDetail from "./newsDetail";

export default function NewsRoute() {
  const { id } = useParams();

  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await newsFetcher(
          "https://api.yildizskylab.com/news?page_id=1&page_size=5"
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
      {loading && <NewsDetail loading={loading} />}
      {news && (
        <NewsDetail
          singleNewData={news.find((item) => item.id == id)}
          loading={loading}
        />
      )}
    </>
  );
}
