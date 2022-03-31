//Optimal size for slider images are 1200 x 800

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default function categorySlider(){

    return(
    
    <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <h1 className="py-4 font-bold">Popular Categories</h1>
          <Swiper 
            modules={[]}
            spaceBetween={50}
            slidesPerView={3}
            >
            <SwiperSlide>
                <Link href="/property-for-sale/list">
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src="https://16k9k93lbits338g7b4f36r5-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/landlord-resources-blueground-boston-apt.jpg" alt="" className="rounded-t-lg"/>
                        <div className="p-4">
                            <h4 className="font-bold mb-2 text-2xl text-red-600">Apartment</h4>
                        </div>
                    </div>
                    </Link>
            </SwiperSlide>
      
            <SwiperSlide>
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src="https://www.architectandinteriorsindia.com/cloud/2021/11/15/unnamed-(83).jpg" alt="" className="rounded-t-lg"/>
                        <div className="p-4">
                            <h4 className="font-bold mb-2 text-2xl text-red-600">Duplex</h4>
                        </div>
                    </div>
            </SwiperSlide>
      
            <SwiperSlide>
                     <div className="bg-white rounded-lg shadow-lg">
                        <img src="https://croc.world/wp-content/uploads/2020/09/3sama-townhouses.jpg" alt="" className="rounded-t-lg"/>
                        <div className="p-4">
                            <h4 className="font-bold mb-2 text-2xl text-red-600">Townhouse</h4>
                        </div>
                    </div>
            </SwiperSlide>
      
            <SwiperSlide>
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src="https://www.arabianbusiness.com/cloud/2021/09/14/Uyfyy1ax-palm-villa-for-rent-1200x800.jpg" alt="" className="rounded-t-lg"/>
                        <div className="p-4">
                            <h4 className="font-bold mb-2 text-2xl text-red-600">Villas</h4>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg">
                        <img src="https://i.pinimg.com/originals/3b/4f/fb/3b4ffbe685105f0f9d648d221415e54d.jpg" alt="" className="rounded-t-lg"/>
                        <div className="p-4">
                            <h4 className="font-bold mb-2 text-2xl text-red-600">Commercial</h4>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className="bg-white rounded-lg shadow-lg">
                            <img src="https://www.cntravellerme.com/2021/05/rOhCf6oN-FPJD---The-Penthouse-(18)-1200x800.jpg" alt="" className="rounded-t-lg"/>
                            <div className="p-4">
                                <h4 className="font-bold mb-2 text-2xl text-red-600">Penthouse</h4>
                            </div>
                        </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      )
}