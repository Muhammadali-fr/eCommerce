"use client";

import { use, useEffect, useState } from "react";

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

  useEffect(() => {
    const product = famousItems.find((item) => {
      return item.id === Number(id);
    })

    setCurrentProduct(product);
  }, [])

  if (!currentProduct) {
    return (
      <h1>loading</h1>
    )
  }

  return (
    <div className="w-[90%] max-w-[990px] mx-auto flex items-start justify-between py-5">
      <div className="w-[50%]">
        <div className="w-full relative">
          <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
            loop={true}
            className="rounded-lg relative">
            {currentProduct.images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <img className="rounded-lg" src={image} alt={`Current image: ${index + 1}`} />
              </SwiperSlide>
            ))}

            <button className="swiper-button-prev bg-white  w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-800 cursor-pointer hover:bg-gray-300 absolute left-2 top-1/2 -translate-y-1/2 z-10"><ChevronLeft /></button>
            <button className="swiper-button-next bg-white  w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-800 cursor-pointer hover:bg-gray-300 absolute right-2 top-1/2 -translate-y-1/2 z-10"><ChevronRight/></button>
          </Swiper>
        </div>
      </div>

      <div className="w-[50%]">
        <p>Mahsulot narxi: <span>{currentProduct.price}</span></p>
        <p>Mahsulot haqida: <span>{currentProduct.description}</span></p>
        <button>Add to Card</button>
      </div>
    </div>
  )
}
