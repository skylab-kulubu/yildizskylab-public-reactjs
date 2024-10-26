import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const CarouselButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="carousel-button-group absolute flex justify-between justify-self-start items-center w-full">
      <button
        className="text-white p-2 block bg-customAccent rounded-full"
        onClick={() => previous()}
      >
        <FaAnglesLeft />
      </button>
      <button
        className="text-white p-2 block bg-customAccent rounded-full"
        onClick={() => next()}
      >
        <FaAnglesRight />
      </button>
    </div>
  );
};

export default CarouselButtonGroup;
