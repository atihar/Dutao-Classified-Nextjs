import db from '../../lib/dbConnect';
import Community from '../../models/community';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';
import Filter from '../../components/filters/community'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image'
import moment from 'moment';

// number of post in 1 page
const PAGE_SIZE = 10;


export default function CommunityList(props) {
  const router = useRouter();
  const {products} = props
  const {t} = useTranslation('common')


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
          <div className="max-w-screen-xl w-full px-4 mx-auto sm:px-6 lg:px-6" data-aos="zoom-y-out">
          <Filter></Filter>
            <p className='text-sm text-gray-500 py-3'>{t('total')} {props.countProducts} {t('offeringCommunity')}</p>
          <div className='grid lg:grid-cols-[3fr_1fr] gap-4'>
            <div className=''>
                {products && products.map((items) => (
                <div className=" lg:flex justify-center' py-2" key={items._id} >
                  <Link href={'/community/'+ items._id}>
                  <div className="md:flex w-full rounded-lg bg-white shadow-lg">
                  <Image
                        src={`https://dutao-public.s3.amazonaws.com/${items.images[0]}`}
                        alt="list image"
                        width={450}
                        height={320}
                        className="object-cover rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
                        loading='lazy'
                    />
                    <div className="py-4 px-6 w-full">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h5 className="text-gray-500 text-xl font-light">
                              <TextTruncate
                                line={1}
                                element="span"
                                truncateText="???"
                                text={items.title}
                            /></h5>
                        </div>
                        <div>
                        <p className="flex border ml-5 r-0 border-yellow-600 text-white bg-yellow-600 uppercase px-4 py-1 rounded-full text-[9px] tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 
                          0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 
                          0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg><span className='pl-2'>{t('featured')}</span></p>
                        </div>       
                      </div>
                      

                      <p className="mb-1 text-lg font-bold text-red-600">AED {items.price}</p>

                      <p className="text-gray-400 py-1 text-xs">{moment(items.createdAt).startOf('hour').fromNow()}</p>

                        <p className='flex text-sm py-1 text-gray-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            {items.address}
                        </p>  
                        <a className="inline-block text-center px-4 py-1 text-sm font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring" href="">
                          <div className="flex"> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                              </svg>
                              
                              <span className="px-5">{t('call')}</span></div>
                          </a>                          
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
  const cityFilter = city && city !== 'all' ? { city } : {};
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

  const categories = await Community.find().distinct('category');
  const cities = await Community.find().distinct('city');
  const areas = await Community.find().distinct('area');
  const productDocs = await Community.find(
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

  const countProducts = await Community.countDocuments({
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