import db from '../../lib/dbConnect';
//--import Jobs from '../../models/jobs';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';
import Filter from '../../components/filters/job';
import { useRouter } from 'next/router'


// number of post in 1 page
const PAGE_SIZE = 3;


export default function infoList(props) {
  const router = useRouter();
  const {jobs} = props


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
          <div className="max-w-screen-xl w-full px-4 mx-auto sm:px-6 lg:px-6">
          <Filter></Filter>

            <p className='text-sm text-gray-500 py-3'>Total {props.countProducts} listings found</p>
            <div className='grid grid-cols-[3fr_1fr] gap-4'>
                <div className=''>
                    {/* {jobs && jobs.map((job) => ( */}
                    <div className=" flex justify-center' py-4" >
                    {/* <Link href={'/jobs/'+ job._id}> */}
                    <div className="flex w-full rounded-lg bg-white shadow-lg">
                    {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-2xl " src={"https://dutao.s3.me-south-1.amazonaws.com/"+job.images[0]} alt="" /> */}
                        {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/51/d9/b5/51d9b5fb038fbe2a8959bcf1f42d2dea.jpg" alt="" /> */}
                        
                        <div className="py-3 px-6 w-full">
                        <div className="flex items-end justify-between mb-2">
                            <div>
                                <h5 className="text-gray-500 text-xl">
                                <TextTruncate
                                    line={1}
                                    element="h4"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                /></h5>
                                <p className="mb-1 text-sm text-gray-600">
                                    <TextTruncate
                                    line={2}
                                    element="span"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </p>
                                <div className='flex flex-inline justify-between'>
                                    <p className='flex text-sm py-1 text-gray-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        Business Bay, Dubai
                                    </p>                      
                                </div>
                                <div className='flex flex-inline'>
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-calendar-minus" viewBox="0 0 16 16">
                                        <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>30 mins ago</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                    </svg>
                                        <p className='text-[12px] ml-2'>business</p>
                                    </button> 
                                    <button className='bg-green-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>verified</p>
                                    </button> 
                                </div>
                            </div>

                            <div className='mx-4'>
                                <a className="inline-block whitespace-nowrap text-center px-3 text-sm text-red-600 bg-red-100 focus:outline-none focus:ring" href=""> 
                                    View Details
                                </a> 
                            </div>       
                        </div>                        
                        </div>
                    </div>
                    {/* </Link> */}
                    </div>
                    <div className=" flex justify-center' py-4" >
                    {/* <Link href={'/jobs/'+ job._id}> */}
                    <div className="flex w-full rounded-lg bg-white shadow-lg">
                    {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-2xl " src={"https://dutao.s3.me-south-1.amazonaws.com/"+job.images[0]} alt="" /> */}
                        {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/51/d9/b5/51d9b5fb038fbe2a8959bcf1f42d2dea.jpg" alt="" /> */}
                        
                        <div className="py-3 px-6 w-full">
                        <div className="flex items-end justify-between mb-2">
                            <div>
                                <h5 className="text-gray-500 text-xl">
                                <TextTruncate
                                    line={1}
                                    element="h4"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                /></h5>
                                <p className="mb-1 text-sm text-gray-600">
                                    <TextTruncate
                                    line={2}
                                    element="span"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </p>
                                <div className='flex flex-inline justify-between'>
                                    <p className='flex text-sm py-1 text-gray-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        Business Bay, Dubai
                                    </p>                      
                                </div>
                                <div className='flex flex-inline'>
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-calendar-minus" viewBox="0 0 16 16">
                                        <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>30 mins ago</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                    </svg>
                                        <p className='text-[12px] ml-2'>business</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>verified</p>
                                    </button> 
                                </div>
                            </div>

                            <div className='mx-4'>
                                <a className="inline-block whitespace-nowrap text-center px-3 text-sm text-red-600 bg-red-100 focus:outline-none focus:ring" href=""> 
                                    View Details
                                </a> 
                            </div>       
                        </div>                        
                        </div>
                    </div>
                    {/* </Link> */}
                    </div>
                    <div className=" flex justify-center' py-4" >
                    {/* <Link href={'/jobs/'+ job._id}> */}
                    <div className="flex w-full rounded-lg bg-white shadow-lg">
                    {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-2xl " src={"https://dutao.s3.me-south-1.amazonaws.com/"+job.images[0]} alt="" /> */}
                        {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/51/d9/b5/51d9b5fb038fbe2a8959bcf1f42d2dea.jpg" alt="" /> */}
                        
                        <div className="py-3 px-6 w-full">
                        <div className="flex items-end justify-between mb-2">
                            <div>
                                <h5 className="text-gray-500 text-xl">
                                <TextTruncate
                                    line={1}
                                    element="h4"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                /></h5>
                                <p className="mb-1 text-sm text-gray-600">
                                    <TextTruncate
                                    line={2}
                                    element="span"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </p>
                                <div className='flex flex-inline justify-between'>
                                    <p className='flex text-sm py-1 text-gray-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        Business Bay, Dubai
                                    </p>                      
                                </div>
                                <div className='flex flex-inline'>
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-calendar-minus" viewBox="0 0 16 16">
                                        <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>30 mins ago</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                    </svg>
                                        <p className='text-[12px] ml-2'>business</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>verified</p>
                                    </button> 
                                </div>
                            </div>

                            <div className='mx-4'>
                                <a className="inline-block whitespace-nowrap text-center px-3 text-sm text-red-600 bg-red-100 focus:outline-none focus:ring" href=""> 
                                    View Details
                                </a> 
                            </div>       
                        </div>                        
                        </div>
                    </div>
                    {/* </Link> */}
                    </div>
                    <div className=" flex justify-center' py-4" >
                    {/* <Link href={'/jobs/'+ job._id}> */}
                    <div className="flex w-full rounded-lg bg-white shadow-lg">
                    {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-2xl " src={"https://dutao.s3.me-south-1.amazonaws.com/"+job.images[0]} alt="" /> */}
                        {/* <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/51/d9/b5/51d9b5fb038fbe2a8959bcf1f42d2dea.jpg" alt="" /> */}
                        
                        <div className="py-3 px-6 w-full">
                        <div className="flex items-end justify-between mb-2">
                            <div>
                                <h5 className="text-gray-500 text-xl">
                                <TextTruncate
                                    line={1}
                                    element="h4"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                /></h5>
                                <p className="mb-1 text-sm text-gray-600">
                                    <TextTruncate
                                    line={2}
                                    element="span"
                                    truncateText="…"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </p>
                                <div className='flex flex-inline justify-between'>
                                    <p className='flex text-sm py-1 text-gray-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        Business Bay, Dubai
                                    </p>                      
                                </div>
                                <div className='flex flex-inline'>
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-calendar-minus" viewBox="0 0 16 16">
                                        <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>30 mins ago</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                    </svg>
                                        <p className='text-[12px] ml-2'>business</p>
                                    </button> 
                                    <button className='bg-gray-100 text-sm rounded-2xl px-4 py-1 flex flex-inline items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                        </svg>
                                        <p className='text-[12px] ml-2'>verified</p>
                                    </button> 
                                </div>
                            </div>

                            <div className='mx-4'>
                                <a className="inline-block whitespace-nowrap text-center px-3 text-sm text-red-600 bg-red-100 focus:outline-none focus:ring" href=""> 
                                    View Details
                                </a> 
                            </div>       
                        </div>                        
                        </div>
                    </div>
                    {/* </Link> */}
                    </div>

                    {/* ))} */}
                    {/* end of map loop */}
                </div>
                <div className=''>
                    <div className='bg-red-100 h-full rounded-lg'></div>
                </div>
            </div>
        </div>
     </section>

      {/* pagination */}

          <div className="w-30 m-auto inline-flex items-center justify-center py-1 text-white bg-red-600 rounded">
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



// export async function getServerSideProps({ query }) {
//   await db.connect();
//   const pageSize = query.pageSize || PAGE_SIZE;
//   const page = query.page || 1;
//   const category = query.category || '';
//   const area = query.area || '';
//   const workExp = query.work_experience || '';
//   const sort = query.sort || '';
//   const searchQuery = query.searchQuery || '';
//   const minEduLevel = query.education_requirement || '';
//   const employmentType = query.employment_type || '';
//   const isRemote = query.remote || '';
//   const city = query.city || '';


//   const queryFilter =
//     searchQuery && searchQuery !== 'all'
//       ? {
//           title: {
//             $regex: searchQuery,
//             $options: 'i',
//           },
//         }
//       : {};

//   const categoryFilter = category && category !== 'all' ? { category } : {};
//   const cityFilter = city && city !== 'all' ? { city } : {};
//   const areaFilter = area && area !== 'all' ? { area } : {};
//   const remoteFilter = isRemote && isRemote !== 'all' ? { isRemote } : {};
//   const minEducationFilter = minEduLevel && minEduLevel !== 'all' ? { minEduLevel } : {};
//   const employmentTypeFilter = employmentType && employmentType !== 'all' ? { employmentType } : {};


//   const workExperienceFilter =
//   workExp && workExp !== 'all'
//       ? {
//           minWorkExp: {
//             $gte: Number(workExp.split('-')[0]),
//             $lte: Number(workExp.split('-')[1]),
//           },
//         }
//       : {};


//   const order =
//     sort === 'featured'
//       ? { featured: -1 }
//       : sort === 'lowest'
//       ? { price: 1 }
//       : sort === 'highest'
//       ? { price: -1 }
//       : sort === 'toprated'
//       ? { div: -1 }
//       : sort === 'newest'
//       ? { createdAt: -1 }
//       : { _id: -1 };

//   const categories = await Jobs.find().distinct('category');
//   const areas = await Jobs.find().distinct('area');
//   const productDocs = await Jobs.find(
//     {
//       ...queryFilter,
//       ...categoryFilter,
//       ...workExperienceFilter,
//       ...minEducationFilter,
//       ...areaFilter,
//       ...cityFilter,
//       ...remoteFilter,
//       ...employmentTypeFilter,
//     },
//   )
//     .sort(order)
//     .skip(pageSize * (page - 1))
//     .limit(pageSize)
//     .lean();

//   const countProducts = await Jobs.countDocuments({
//     ...queryFilter,
//     ...categoryFilter,
//     ...workExperienceFilter,
//     ...minEducationFilter,
//     ...areaFilter,
//     ...cityFilter,
//     ...remoteFilter,
//     ...employmentTypeFilter,
//   });
//   await db.disconnect();

//   const jobs = JSON.parse(JSON.stringify(productDocs));

//   return {
//     props: {
//       jobs,
//       countProducts,
//       page,
//       pages: Math.ceil(countProducts / pageSize),
//       categories,
//       areas,
//     },
//   };
// }