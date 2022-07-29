// detecting user location from map, bringing it as child data(callback) from Dynamicmap component and passing it to
//the map-filter (parent to child) as props 
import db from '../../lib/dbConnect';
import Places from '../../models/place';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';
import Filter from '../../components/filters/map';
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import { useState } from 'react';
import staticData from '../../lib/data.json'
import useTranslation from 'next-translate/useTranslation';


const DynamicMap = dynamic(() => import("../../components/map"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});


// number of post in 1 page
const PAGE_SIZE = 10;


export default function InfoList(props) {

  const {t} = useTranslation('common')
  const router = useRouter();
  const {products} = props
  const [userCity, setUserCity] = useState('dubai')

  //setting callback for user city data from Dynamic map and setting it to Map(index) component
  const passData = (data) => {
    setUserCity(data);
  };


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
          <div className="max-w-sm sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full px-4 mx-auto sm:px-6 lg:px-6" data-aos="zoom-y-out">
            <h3 className='text-base'>{t('popularSearches')}</h3>
            <div className='overflow-y-scroll'>
              <div className='flex-inline space-x-5 w-max'>
                  <Link href={`info-center/?category=bar&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('bar')}</span></Link>
                  <Link href={`info-center/?category=malls&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('mall')}</span></Link>
                  <Link href={`info-center/?category=hotel&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('hotel')}</span></Link>
                  <Link href={`info-center/?category=restaurant&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('restaurants')}</span></Link>
                  <Link href={`info-center/?category=bank&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('bank')}</span></Link>
                  <Link href={`info-center/?category=pharmacy&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('pharmacy')}</span></Link>
                  <Link href={`info-center/?category=gas&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('gas')}</span></Link>
                  <Link href={`info-center/?category=coffee&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('coffee')}</span></Link>
                  <Link href={`info-center/?category=grocery&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('groceries')}</span></Link>
                  <Link href={`info-center/?category=exchange&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('exchange')}</span></Link>
                  <Link href={`info-center/?category=typing-center&city=all`}><span className='text-gray-600 bg-gray-200 px-4 rounded-lg text-lg '>{t('typing-center')}</span></Link>
              </div>
            </div>

          <DynamicMap data={products} passData={passData} />
          <div className='flex'>
            <a className="inline-block px-5 py-2 text-sm font-medium text-white bg-gray-600 border border-gray-600 rounded active:text-gray-500 hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring" href={`/info-center/?category=all&city=${userCity}`}>
              {t('searchNearby')}
            </a>
            <a className="ml-3 inline-block px-5 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring" href={`/info-center/?category=all&city=${userCity}`}>
            {t('searchCity')}
            </a>
          </div>
          <Filter data={userCity}></Filter>
            <p className='text-sm text-gray-500 py-3'>{t('total')} {props.countProducts} {t('listingsFound')}</p>
            <div className='grid sm:grid-cols-[3fr_1fr] gap-4'>
                <div className=''>
                { products && products.map((place) => ( 
                    <div className="flex justify-center py-4" key={place._id}>
                      <Link href={'/info-center/'+ place._id}>
                        <div className="flex w-full rounded-lg bg-white shadow-lg">
                        {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-2xl " src={"https://dutao.s3.me-south-1.amazonaws.com/"+job.images[0]} alt="" /> */}
                            {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/51/d9/b5/51d9b5fb038fbe2a8959bcf1f42d2dea.jpg" alt="" /> */}
                            
                            <div className="py-3 px-3 w-full">
                              <div className="relative grid mb-2">
                                  <div>
                                      <h5 className="text-gray-500 text-sm md:text-xl">
                                      <TextTruncate
                                          line={1}
                                          element="span"
                                          truncateText="…"
                                          text={place.title}
                                      /></h5>
                                      <p className="mb-1 text-sm text-gray-600">
                                          <TextTruncate
                                          line={2}
                                          element="span"
                                          truncateText="…"
                                          text={place.description}
                                          />
                                      </p>
                                      <div className='flex flex-inline justify-between'>
                                          <p className='flex text-sm py-1 text-gray-500'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                              </svg>
                                              {place.address}
                                          </p>                      
                                      </div>
                                      <div className='flex flex-inline'>
                                          {/* <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 hidden sm:flex flex-inline items-center'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-calendar-minus" viewBox="0 0 16 16">
                                              <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                              </svg>
                                              <p className='text-[12px] ml-2'>30 mins ago</p>
                                          </button>  */}
                                          <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                          </svg>
                                              <p className='text-[12px] ml-2'>{place.category}</p>
                                          </button> 
                                          <button className='bg-green-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                                              <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 
                                              0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 
                                              0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89
                                              0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                              </svg>
                                              <p className='text-[12px] ml-2'>{t('verified')}</p>
                                          </button> 
                                      </div>
                                      <div className='absolute right-0 bottom-0 mx-4'>
                                          <a className="inline-block whitespace-nowrap text-center px-3 text-sm text-red-600 bg-red-100 focus:outline-none focus:ring" href=""> 
                                            {t('viewDetails')}
                                          </a> 
                                      </div> 
                                  </div>      
                              </div>                        
                            </div>
                        </div>
                      </Link>
                    </div>

                    ))} 
                    {/* end of map loop */}
                </div>
                <div className='hidden sm:block'>
                    <div className='bg-gray-200 h-full rounded-lg'></div>
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
    const city = query.city || '';
    const sort = query.sort || '';
    const searchQuery = query.searchQuery || '';
    const area = query.area || '';
  
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
    const cityFilter = city && city !== 'all' ? { city : { $regex: city, $options: 'i',} } : {};
    const areaFilter = area && area !== 'all' ? { area } : {};
  
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
        : { _id: -1 };
  
    const categories = await Places.find().distinct('category');
    const cities = await Places.find().distinct('city');
    const areas = await Places.find().distinct('area');
    const productDocs = await Places.find(
      {
        ...queryFilter,
        ...categoryFilter,
        ...cityFilter,
        ...areaFilter,
      },
    )
      .sort(order)
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .lean();
  
    const countProducts = await Places.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...cityFilter,
      ...areaFilter,
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
        cities,
        areas,
      },
    };
  }