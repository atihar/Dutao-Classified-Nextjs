//Optimal size for slider images are 1200 x 800

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Router, { useRouter } from 'next/router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation"

export default function CategorySlider(props){
    const data = props.data;
    const router = useRouter();
    const { t} = useTranslation('common')
    return(
    
    <section>
        <div className="max-w-[350px] sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-0 mx-auto sm:px-6 lg:px-8">
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
                  slidesPerView: 4,
                },
              }}
            >
                {data && data.map((x, i)=>{
                    return (
                        <SwiperSlide key={i}>
                          <Link href={`${router.pathname}/list?category=${x.slug}`}>
                            <div className="bg-white rounded-lg shadow-lg cursor-pointer ">
                            <Image
                                  src={x.image}
                                  alt="category-image"
                                  width={300}
                                  height={200}
                                  className="object-cover rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
                                  loading='lazy'
                              />
                                <div className="p-4">
                                    <h4 className="font-bold mb-2 text-base sm:text-lg text-red-600">{x.name}</h4>
                                </div>
                            </div>
                            </Link>
                    </SwiperSlide>
                    )
                })}
          </Swiper>
        </div>
      </section>
      )
}