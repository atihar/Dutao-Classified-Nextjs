import db from '../../lib/dbConnect';
import Motors from '../../models/motors';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';
import Filter from '../../components/filters/motorFilter';
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import moment from 'moment'

// number of post in 1 page
const PAGE_SIZE = 10;


export default function MotorsList(props) {
  const router = useRouter();
  const {products} = props
  const {t} = useTranslation('common')
  // console.log(props.areas)


  // custom pagination handler - next
  const nextPageHandler = () => {
    const currentPage = props.page
    const { query } = router;
    const newObj = {...query, page:`${Number(currentPage) + 1}`}
    router.push({
      query: newObj,
    });
    
  }

  // custom pagination handler back
  const backPageHandler = () => {
    const currentPage = props.page
    console.log(currentPage)
    const { query } = router;
    const newObj = {...query, page:`${currentPage - 1}`}
    router.push({
      query: newObj,
    });
    
  }

  return (
    <>
    <Header></Header>
    <section>
          <div className="max-w-screen-xl w-full px-4 mx-auto sm:px-6 lg:px-6" data-aos="zoom-y-out">
          <Filter data={props.categories}></Filter>
            <p className='text-sm text-gray-500 py-3'>{t('total')} {props.countProducts} {t('propFound')}</p>
          <div className='grid lg:grid-cols-[3fr_1fr] gap-4'>
            <div className=''>
                {products && products.map((motor) => (
                <div className="lg:flex justify-center' py-2" key={motor._id} >
                  <Link href={'/motors/'+ motor._id}>
                  <div className="md:flex w-full rounded-lg bg-white shadow-lg">
                  <div className='relative'>
                  <Image
                        src={`https://dutao-public.s3.amazonaws.com/${motor.images[0]}`}
                        alt="Picture of the author"
                        width={450}
                        height={300}
                        className="object-cover rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
                        loading='lazy'
                    />
                      {motor.verifiedOrNot ? 
                      <p className="flex top-2 left-0 absolute border text-white bg-green-500 uppercase px-2 py-0.5 rounded-full text-[7px] tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        <span className='pl-2'>verified</span>
                        </p> : "" }
                    </div>
                    <div className="py-2 px-6 w-full">
                      <div className="grid grid-cols-[3fr-1fr] relative items-center justify-between mb-2">
                        <div>
                          <h5 className="text-gray-500 text-base lg:text-xl font-light">
                              <TextTruncate
                                line={1}
                                element="span"
                                truncateText="???"
                                text={motor.title}
                            /></h5>

                              <p className="mb-1 text-lg font-bold text-red-600">{t('aed')} {motor.price}</p>

                              <p className="text-gray-400 py-1 text-xs">{moment(motor.createdAt).startOf('hour').fromNow()}</p>

                              <p className="mb-2 text-sm pt-1 text-gray-500">{motor.marketYear} {t('builtYear')} - {motor.kilometers} {t('mileage')}</p>

                              <p className='flex text-sm py-1 text-gray-500'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                  </svg>
                                  {motor.address}
                              </p>  
                              <a className="inline-block text-center px-4 py-1 text-sm font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring" href="">
                              <div className="flex"> 
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                  </svg>
                                  
                                  <span className="px-5">{t('call')}</span></div>
                              </a>
                        </div>
                        <div>
                            {motor.isFeatured ? <p className="flex top-0 right-0 absolute border border-yellow-600 text-white bg-yellow-600 uppercase px-2 py-0.5 rounded-full text-[7px] tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                            </svg><span className='pl-2'>{t('featured')}</span>
                            </p> : "" }
                            
                            {motor.isPromoted ? <p className='text-[10px] text-gray-400 top-4 right-0 absolute px-2'>sponsored</p> : "" }
                            
                            {motor.businessLogo ? <img className=' absolute bottom-0 right-0 w-16' src={`${motor.businessLogo}`}/> : ""}
                        </div>       
                      </div>                          
                    </div>
                  </div>
                  </Link>
                </div>
                ))}
                {/* end of map loop */}
              </div>
              <div className='hidden lg:block'>
                <div className='bg-red-100 h-full rounded-lg'></div>
              </div>
          </div>
        </div>
     </section>

      {/* pagination */}

          <div className="w-30 m-auto inline-flex items-center justify-center py-2 my-3 text-white bg-red-600 rounded">
            <a onClick={backPageHandler} className="inline-flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>

            <span className="w-px h-4 bg-white/25"></span>

            <input type="number" className="w-12 p-0 text-xs font-medium text-center bg-transparent border-none rounded no-spinners" min="1" readOnly value={props.page}/>

            <span className="w-px h-4 bg-white/25"></span>

            <a onClick={nextPageHandler} className="inline-flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.or802000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
      {/* I have the access to total number of pages, current page number  */}
        <Footer></Footer>
      </>
  );
}



export async function getServerSideProps({ query }) {
  await db.connect();
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || '';
  const area = query.area || '';
  const price = query.price || '';
  const sort = query.sort || '';
  const searchQuery = query.searchQuery || '';
  const verified = query.verified || '';
  const kilometers = query.kilometers || '';
  const year = query.year || '';
  const sellerType = query.seller || '';


  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          title: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};

  const categoryFilter = category && category !== 'all' ? { category } : {};
  const areaFilter = area && area !== 'all' ? { area } : {};
  const sellerTypeFilter = sellerType && sellerType !== 'all' ? { sellerType } : {};
  const verifiedFilter = verified && verified !== 'all' ? { verifiedOrNot : verified } : {};

  const priceFilter =
    price && price !== 'all'
      ? {
          price: {
            $gte: Number(price.split('-')[0]),
            $lte: Number(price.split('-')[1]),
          },
        }
      : {};

  const yearFilter =
    year && year !== 'all'
      ? {
          year: {
            $gte: Number(year.split('-')[0]),
            $lte: Number(year.split('-')[1]),
          },
        }
      : {};


  const odometerFilter =
    kilometers && kilometers !== 'all'
      ? {
        kilometers: {
            $gte: Number(kilometers.split('-')[0]),
            $lte: Number(kilometers.split('-')[1]),
          },
        }
      : {};

  const order =
    sort === 'featured'
      ? { featured: -1 }
      : sort === 'lowest'
      ? { price: 1 }
      : sort === 'highest'
      ? { price: -1 }
      : sort === 'toprated'
      ? { div: -1 }
      : sort === 'newest'
      ? { createdAt: -1 }
      : { isFeatured: -1 , createdAt: -1 };

  const categories = await Motors.find().distinct('category');
  const areas = await Motors.find().distinct('area');
  const productDocs = await Motors.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...yearFilter,
      ...areaFilter,
      ...odometerFilter,
      ...sellerTypeFilter,
      ...verifiedFilter,
    },
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();

  const countProducts = await Motors.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...yearFilter,
    ...odometerFilter,
    ...areaFilter,
    ...sellerTypeFilter,
    ...verifiedFilter,
  });
  const products = JSON.parse(JSON.stringify(productDocs));
  // // await db.disconnect();


  return {
    props: {
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      areas,
    },
  };
}