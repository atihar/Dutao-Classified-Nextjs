import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Router from 'next/router';


export default function featuredProducts(props){
    const data = props.data

    return(
           <div className="max-w-3xl">
                <Swiper modules={[Navigation]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }} >
                    {data && data.map((image, key) => (
                        <SwiperSlide key={key} className="swiper-slide">
                                <Image
                                src={`https://dutao-public.s3.amazonaws.com/`+ image}
                                alt="Picture of the author"
                                width={800}
                                height={450}
                                className="object-contain rounded-t-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    )
}

export async function getServerSideProps() {
    //connecting db
    await db.connect();
  
    //setting data constant for the result for database
    const data = await SaleProperty.find().limit(5).lean();;
    await db.disconnect();
    const allProperties = JSON.parse(JSON.stringify(data));
  
    //setting props for frontend
    return {
      props: { allProperties }
    };
  }