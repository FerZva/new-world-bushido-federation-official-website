// components/InfiniteSlider.tsx
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { slides } from "../services/data";
import Image from "next/image";

type SwiperRef = SwiperCore & {
  slideNext: () => void;
  slidePrev: () => void;
};

const InfiniteSlider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="w-full text-white py-8">
      <div className="container mx-auto px-4">
        {/* Título y botones */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[80px] font-extrabold">OUR DISCIPLINES</h2>
          <div className="flex space-x-4">
            <button
              className="w-[50px] p-[10px] text-center bg-slate-800 text-amber-400 transform skew-x-[-15deg] no-underline hover:bg-amber-400 hover:text-slate-800"
              onClick={handlePrev}
            >
              <AiOutlineLeft className="h-6 w-6 text-white" />
            </button>
            <button
              className="w-[50px] p-[10px] text-center bg-slate-800 text-amber-400 transform skew-x-[-15deg] no-underline hover:bg-amber-400 hover:text-slate-800"
              onClick={handleNext}
            >
              <AiOutlineRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="pb-8"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full max-w-[481.33px] max-h-[586.55px]  object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 text-center bg-slate-800 p-4  flex justify-between">
                  <h3 className="text-xl font-bold text-amber-400">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InfiniteSlider;
