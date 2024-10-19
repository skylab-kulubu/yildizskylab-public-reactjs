import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function NewsDetail({ singleNewData, loading }) {
  const publishDate = singleNewData
    ? new Date(singleNewData.publish_date).toLocaleDateString()
    : "";
  return (
    <div className={`${loading ? "animate-pulse" : ""}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 text-white p-4 flex items-center">
        <Link to="/" className="mr-4">
          <HiArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Haber Detayı</h1>
      </nav>

      {/* İçerik */}
      <div className="flex justify-center text-center content-center pt-16">
        <div className="p-4 text-white custom-prose max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">{singleNewData?.title}</h1>
          <p className="text-gray-200 mb-4">
            {singleNewData ? "Yayınlanma Tarihi: " : ""}
            {publishDate}
          </p>

          <div
            className="prose prose-lg text-white"
            dangerouslySetInnerHTML={{ __html: singleNewData?.description }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
