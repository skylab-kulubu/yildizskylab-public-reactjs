import NewsComponent from "./newsComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselButtonGroup from "./carouselButtons";

export default function NewsCarousel({ news, loading }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1201 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 801 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      arrows={false}
      customButtonGroup={<CarouselButtonGroup />}
      responsive={responsive}
      infinite={true}
      itemClass="carousel"
    >
      {loading &&
        Array.from({ length: 4 }).map((_, index) => (
          <NewsComponent
            key={index}
            singleNewData={null}
            textLoading={loading}
          />
        ))}
      {news &&
        !loading &&
        news.map((newData) => (
          <NewsComponent
            key={newData.id}
            singleNewData={newData}
            textLoading={loading}
          />
        ))}
    </Carousel>
  );
}
