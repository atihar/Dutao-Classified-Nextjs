import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import TextTruncate from 'react-text-truncate';
import Router from 'next/router';


export default function featuredProducts(props){
    const data = props.data
    const title = props.title

    const viewMoreHandler = () =>{
        const path = Router.pathname;
        Router.push({
          pathname: path+'/list',
        });
    }

    return(
        <>
         <section>
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className='flex justify-between '>
                <h1 className='font-bold py-6'>Featured {title}</h1>
                <a onClick={viewMoreHandler}><p className='cursor-pointer font-bold text-red-600 text-sm pt-8'>View More →</p></a>
                </div>


            {/* <!-- Slider main container --> */}
            <Swiper 
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            >
                {data && data.map((property, key) => (
                        <SwiperSlide key={key}>
                        <div className="bg-white rounded-lg shadow-lg">
                                        <img src={"https://dutao.s3.me-south-1.amazonaws.com/"+ property.images[0]}  alt="" className="rounded-t-lg" placeholder="blur"/>
                                        <div className="p-2">
                                            <p className="mb-1 text-base font-bold text-red-600">AED {property.price}</p>
                                            <p className="mb-2 text-sm font-bold">                                              
                                                <TextTruncate
                                                        line={1}
                                                        element="span"
                                                        truncateText="…"
                                                        text={property.title}
                                                    />
                                                </p>
                                            <p className="mb-2 text-sm text-gray-500">{property.bedroom} Bed {property.bathroom} Baths 900sqft</p>
                                        </div>
                                        <div className='flex p-2'>
                                            <p className='flex text-sm text-gray-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                </svg>
                                                {property.address}
                                            </p>                            
                                        </div>
                                    </div>
                        </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
        </>
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