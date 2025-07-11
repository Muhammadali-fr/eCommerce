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

// components 
import Loader from "@/app/components/Loader";

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
    return <Loader />;
  }

  return (
    <div className="w-[90%] max-w-[990px] mx-auto flex items-center justify-between py-5 gap-10">
      <div className="w-[50%] space-y-2">
        <div className="w-full relative space-y-2">

          {/* next prev buttons here  */}
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
      <div className="w-[50%] space-y-3">

        {/* prouduct name here */}
        <p className="text-4xl font-semibold line-clamp-2 text-gray-800">{currentProduct.name}</p>

        <p className="text-2xl font-semibold">
          Mahsulot narxi: <span className="text-violet-700">{currentProduct.price}</span> so'm
        </p>
        <p className="text-xl">
          Mahsulot haqida: <span className="text-xl text-gray-800">{currentProduct.description}</span>
        </p>
        <button className="w-full py-4 bg-violet-700 text-white rounded-lg cursor-pointer hover:bg-violet-600">Add to Cart</button>
      </div>
    </div>
  );
}
