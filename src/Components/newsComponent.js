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
      className={`flex gap-4 box-border flex-col justify-self-center items-center  text-white border-none outline-none hover:opacity-75  transition delay-150 ease-in-out`}
    >
      <div
        className={`w-80 h-60 bg-slate-700 rounded-xl ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <LazyLoadImage
          className={`w-80 h-60  object-cover rounded-xl bg-black`}
          alt={singleNewData?.title}
          effect="blur"
          src={singleNewData?.cover_image.url}
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`h-20 w-80 text-3xl flex items-center justify-center box-border text-center bg-[#d4b8f96b] rounded-xl ${
          textLoading ? "animate-pulse" : ""
        }`}
      >
        {singleNewData?.title}
      </div>
    </button>
  );
};

export default NewsComponent;
