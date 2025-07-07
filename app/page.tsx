"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

// components 
import Famous from "./components/Famous"

export default function Home() {
  const swiperRef = useRef(null)

  return (

    <div>
      <div className="relative max-w-[990px] w-[90%] mx-auto py-5">
        {/* Custom arrows */}
        <button
          className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight size={20} />
        </button>

        {/* Swiper */}
        <Swiper
          className="w-full h-[400px] rounded-lg"
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          <SwiperSlide>
            <img className="h-full w-full object-top-left object-cover" src="/swiper/sw1.png" alt="swiper1" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="h-full w-full object-top-left object-cover" src="/swiper/sw1.png" alt="swiper1" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="h-full w-full object-top-left object-cover" src="/swiper/sw1.png" alt="swiper1" />
          </SwiperSlide>
        </Swiper>

      </div>

      {/* Famous  */}
      <Famous />
    </div>

  )
}
