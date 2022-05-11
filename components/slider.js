//Optimal size for slider images are 1200 x 800

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

// import required modules
import { Pagination } from "swiper";

export default function homeSlider(props){
    const data = props.data;

    return(
    
    <section>
        <div className="max-w-[350px] sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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