const NewsComponent = ({ singleNewData }) => {
  return (
    <div className="flex gap-4 box-border flex-col items-center max-w-80 text-white">
      <div className="w-80 h-60 ">
        <img
          src={singleNewData.cover_image.url}
          className="w-80 h-60 object-cover rounded-xl"
        ></img>
      </div>
      <div className="flex items-center justify-center h-20 w-80 p-2  text-3xl text-center bg-indigo-800 rounded-xl">
        {singleNewData.title}
      </div>
    </div>
  );
};

export default NewsComponent;
