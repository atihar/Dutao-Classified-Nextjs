import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TextTruncate from 'react-text-truncate';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';


export default function FeaturedProducts(props){
    const router = useRouter();
    const data = props.data
    const title = props.title
    const {t} = useTranslation('common')

    const viewMoreHandler = () =>{
        const path = Router.pathname;
        Router.push({
          pathname: path+'/list',
        });
    }

    return(
        <>
         <section>
            <div className="max-w-[350px] sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className='flex justify-between '>
                <h1 className='font-bold py-6'>{t("featured")} {title}</h1>
                <a onClick={viewMoreHandler}><p className='cursor-pointer font-bold text-red-600 text-sm pt-8'> {t('viewMore')} →</p></a>
                </div>


            {/* <!-- Slider main container --> */}
            <Swiper 
            modules={[Navigation]}
            spaceBetween={50}
            breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
              }}
            navigation
            pagination={{ clickable: true }}
            >
                {data && data.map((property, key) => (
                        <SwiperSlide key={key} className="swiper-slide">
                            <Link href={`${router.pathname}/${property._id}`}>
                        <div className="bg-white rounded-lg shadow-lg">
                            {property.images &&
                                <Image
                                src={`https://dutao-public.s3.amazonaws.com/`+ property.images[0]}
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={380}
                                height={243}
                                className="rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
                                loading='lazy'
                            /> }
                                 {/* <img src={`https://dutao-public.s3.amazonaws.com/`+ property.images[0]}  alt="" className="rounded-t-lg" placeholder="blur"/>} */}
                                <div className="p-2">
                                    {property.price ? <p className="mb-1 text-base font-bold text-red-600">{t('aed')} {property.price}</p> : "" }
                                    <p className="mb-2 text-base font-bold">                                              
                                        <TextTruncate
                                                line={1}
                                                element="span"
                                                truncateText="…"
                                                text={property.title}
                                            />
                                        </p>
                                   { property.bedroom ? <p className="mb-2 text-sm text-gray-500">{property.bedroom} {t('bed')} {property.bathroom} {t('bath')} 900{t('sqft')}</p>  : "" }
                                </div>
                                <div className='flex px-2'>
                                    <p className='flex text-sm text-gray-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        {property.address}
                                    </p>                            
                                </div>
                            </div>
                            </Link>
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