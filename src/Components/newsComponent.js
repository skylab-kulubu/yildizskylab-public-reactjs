import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const NewsComponent = ({ singleNewData, textLoading }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Link
      to={`news/${singleNewData?.id}`}
      className={`flex gap-4 box-border flex-col justify-self-center items-center  text-white border-none outline-none hover:opacity-75  transition delay-150 ease-in-out`}
    >
      <div
        className={`w-60 h-40 sm:w-80 sm:h-60 bg-slate-700 rounded-xl ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <LazyLoadImage
          className={`w-60 h-40 sm:w-80 sm:h-60  object-cover rounded-xl bg-black`}
          alt={singleNewData?.title}
          effect="blur"
          src={singleNewData?.cover_image.url}
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`w-60 h-14 text-xl sm:h-20 sm:w-80 sm:text-3xl flex items-center justify-center box-border text-center bg-[#d4b8f96b] rounded-xl ${
          textLoading ? "animate-pulse" : ""
        }`}
      >
        {singleNewData?.title}
      </div>
    </Link>
  );
};

export default NewsComponent;
