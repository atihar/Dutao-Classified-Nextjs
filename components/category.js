//Optimal size for slider images are 1200 x 800

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation"

export default function categorySlider(props){
    const data = props.data;
    const { t} = useTranslation('common')
    return(
    
    <section>
        <div className="max-w-[350px] sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <h1 className="py-4 font-bold">{t('pCategories')}</h1>
          <Swiper 
            modules={[]}
            spaceBetween={50}
            breakpoints={{
                // when window width is >= 640px
                320: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
                {data && data.map((x, i)=>{
                    return (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src={x.image} alt="" className="rounded-t-lg"/>
                                <div className="p-4">
                                    <h4 className="font-bold mb-2 text-base sm:text-2xl text-red-600">{x.name}</h4>
                                </div>
                            </div>
                    </SwiperSlide>
                    )
                })}
          </Swiper>
        </div>
      </section>
      )
}