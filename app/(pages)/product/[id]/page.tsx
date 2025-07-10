"use client";

import { use, useEffect, useRef, useState } from "react";

// data 
import famousItems from "../../../../data/data";

// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// lucide 
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  console.log(swiperRef.current);


  useEffect(() => {
    const product = famousItems.find((item) => item.id === Number(id));
    setCurrentProduct(product);
  }, []);

  if (!currentProduct) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-[90%] max-w-[990px] mx-auto flex items-start justify-between py-5 gap-5">
      <div className="w-[50%] space-y-2">
        <div className="w-full relative">
          <button
            ref={prevRef}
            className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-800 cursor-pointer hover:bg-gray-300 absolute left-2 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-800 cursor-pointer hover:bg-gray-300 absolute right-2 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight />
          </button>

          {/* Swiper here  */}
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            className="rounded-lg relative border-3 border-gray-300"
          >
            {currentProduct.images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <img className="rounded-lg" src={image} alt={`Image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center gap-2">
          {currentProduct.images.map((image: string, index: number) => (
            <img key={index} onClick={() => swiperRef.current?.slideToLoop(index)} className={`h-[100px] rounded-lg border-3 border-gray-300 cursor-pointer ${currentIndex === index && " border-violet-700"}`} src={image} alt={`Image number: ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* right  */}
      <div className="w-[50%]">
        <p>
          Mahsulot narxi: <span>{currentProduct.price}</span>
        </p>
        <p>
          Mahsulot haqida: <span>{currentProduct.description}</span>
        </p>
        <button className="w-full py-4 bg-violet-700 text-white rounded-lg cursor-pointer hover:bg-violet-600">Add to Cart</button>
      </div>
    </div>
  );
}
