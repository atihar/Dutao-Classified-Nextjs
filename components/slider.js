//Optimal size for slider images are 1200 x 800

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function homeSlider(props){
    const data = props.data;

    return(
    
    <section>
        <div className="max-w-[350px] sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto sm:px-6 lg:px-8" data-aos="zoom-y-out">
          <Swiper pagination={true} modules={[Pagination, Autoplay ]} className="mySwiper" 
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
                {data && data.map((x, i)=>{
                    return (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src={x.url} alt="" className="rounded-t-lg"/>
                            </div>
                    </SwiperSlide>
                    )
                })}
          </Swiper>
        </div>
      </section>
      )
}