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
      to={singleNewData ? `news/${singleNewData.id}` : "/"}
      className={`flex gap-4 box-border flex-col justify-self-center items-center  text-white border-none outline-none hover:opacity-75  transition ease-in-out`}
    >
      {" "}
      {/* THERE IS NO DELAY TIME IN HERE BECAUSE THE DELAY TIME VARIES ON THE LAZYLOADIMAGE'S DELAY TIME */}
      <div
        className={`max-[400px]:w-64 max-[400px]:h-40 w-80 h-60 bg-slate-700 rounded-xl ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <LazyLoadImage
          className={`max-[400px]:w-64 max-[400px]:h-40 w-80 h-60  object-cover rounded-xl bg-black`}
          alt={singleNewData?.title}
          effect="blur"
          src={singleNewData?.cover_image.url}
          delayTime={200}
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`max-[400px]:w-64 max-[400px]:h-14 max-[400px]:text-xl h-20 w-80 text-3xl flex items-center justify-center box-border text-center bg-[#d4b8f96b] rounded-xl ${
          textLoading ? "animate-pulse" : ""
        }`}
      >
        {singleNewData?.title}
      </div>
    </Link>
  );
};

export default NewsComponent;
