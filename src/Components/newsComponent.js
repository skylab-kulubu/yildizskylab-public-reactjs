import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const NewsComponent = ({ singleNewData, textLoading }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <button
      className={`flex gap-4 box-border flex-col items-center max-w-80 text-white border-none outline-none `}
    >
      <div
        className={`w-80 h-60 bg-slate-700 rounded-xl ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <LazyLoadImage
          className={`w-80 h-60 object-cover rounded-xl $`}
          alt={singleNewData?.title}
          effect="blur"
          src={singleNewData?.cover_image.url}
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`flex items-center justify-center h-20 w-80 p-2 text-3xl text-center bg-customAccent rounded-xl ${
          textLoading ? "animate-pulse" : ""
        }`}
      >
        {singleNewData?.title}
      </div>
    </button>
  );
};

export default NewsComponent;
