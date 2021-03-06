// My Listings or ads page accessible after a user is logged in
// image deletion is yet to be implemented

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import TextTruncate from 'react-text-truncate'
import axios from "axios"
import React, { useEffect,useState, useContext, useReducer } from 'react';
import { Store } from '../../../lib/Store';
import { useRouter } from 'next/router';
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import moment from "moment"


export default function ManageBizAds() {
  const router = useRouter()
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [ popUp, setPopup] = useState(false)
  const { t, lang } = useTranslation('common')
  const [bizCategory, setBizCategory] = useState('')
  const [propertyType, setPropertyType] = useState('sale')
  const [bizData, setBizData] = useState({})
  const [selected, setSelected] = useState({})
  const [images, setImages] = useState([])
  const [adCount, setAdCount] = useState('')


  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    fetchUserData();
    getAdCount();

    if(bizCategory == 'property'){
      propertyType == 'sale' ? fetchPropertySaleData()
     : fetchPropertyRentData()
    }
    else if(bizCategory == 'motors'){
      fetchMotorData()
    }
  }, [bizCategory, propertyType]);


  // Prefetch data to check the business account details of the user
  const fetchUserData = async () => {
    //doing CSR for fetching users posts using axios and setting data to state to render it
    setLoading(true)
    const { data } = await axios.get(`/api/user/biz-data/?id=${userInfo._id}`,{
      headers: { authorization: `Bearer ${userInfo.token}` }
    })
    // setting business cateogory which will lead to the category based data fetching
    setBizCategory(data.businessCategory)
    setBizData(data)
 }
 

  const fetchPropertySaleData = () => {
     //doing CSR for fetching users posts using axios and setting data to state to render it
     setLoading(true)
     const userEmail = userInfo.email
     axios.get(`/api/user/manage/property-for-sale/?userEmail=${userEmail}`,{
       headers: { authorization: `Bearer ${userInfo.token}` }
     })
       .then(function (response) {
         setPosts(response.data)
         setPostCount(response.data.length)
         setLoading(false)
         // handle success
       })
       .catch(function (error) {
         // handle error
         console.log(error);
         setLoading(false)
       });
  }

  const getAdCount = async () => {
    const { data } = await axios.get(`/api/user/ad-count/?email=${userInfo.email}`)
    setAdCount(data.totalad)
}

  const fetchPropertyRentData = () => {
    //doing CSR for fetching users posts using axios and setting data to state to render it
    setLoading(true)
    const userEmail = userInfo.email
    axios.get(`/api/user/manage/property-for-rent/?userEmail=${userEmail}`,{
      headers: { authorization: `Bearer ${userInfo.token}` }
    })
      .then(function (response) {
        setPosts(response.data)
        setPostCount(response.data.length)
        setLoading(false)
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false)
      });
 }

  const fetchMotorData = () => {
    //doing CSR for fetching users posts using axios and setting data to state to render it
    setLoading(true)
    const userEmail = userInfo.email
    axios.get(`/api/user/manage/motors/?userEmail=${userEmail}`,{
      headers: { authorization: `Bearer ${userInfo.token}` }
    })
      .then(function (response) {
        setPosts(response.data)
        setPostCount(response.data.length)
        setLoading(false)
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false)
      });
 }

  const deletePhoto = async (e) => {
    try{
      const myFileList = e;
      const newArr = [...myFileList]
      const v = await Promise.all(
        newArr.map(async (file) => {
              const filename = encodeURIComponent(file);
              const res = await fetch(`/api/delete-s3Object?file=${filename}`);
          }
          ))
      } catch(e){console.error(e)}
  }

 const deleteHandler = async (productId, productImages) => {
    try {
      setPopup(true);
      setSelected(productId)
      setImages(productImages)
    } catch (err) {
      console.log(err)
    }
  };

  const deleteFn = async() => {
    await axios.delete(`/api/user/manage/property-for-sale/?id=${selected}`);
    await deletePhoto(images);
    router.reload()
  }

  return (
      <>
        <Header></Header>

        <div className='sm:max-w-screen-xl sm:w-screen min-h-[60vh] mx-auto py-4 px-4 my-4 rounded-lg shadow' data-aos="zoom-y-out">
        <h2 className="font-bold"> {t('manageBizAds')}</h2>
        
            <div className="grid lg:grid-cols-[1fr_4fr] gap-4">
                <div>
                <p className="pb-5 font-medium text-red-600">{bizData.businessName}</p>
                <h3 className="text-base font-bold">{t('subsDetails')}</h3>
                    <p className="text-base p-2">{t('activatedOn')}: 12 Jan, 2023</p>
                    <p className="text-base p-2">{t('expireOn')}: 13 Jun, 2023</p>
                    <p className="text-base p-2 hidden lg:block">{t('membership')} : Business</p>
                    <p className="text-base p-2">{t('credits')} : 0/75 </p>
                    <p className="text-base p-2">{t('liveListing')} : {adCount}</p>
                    <ul className="text-base space-y-4">
                        <Link href={'/profile/manage/business/ads'}><li className="py-2 px-4 rounded-lg text-white active">{t('myAds')}</li></Link>
                        {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li></Link> */}
                    </ul>
                </div>
                <div>
                  {bizCategory == 'property' ? 
                  <div className="flex space-x-2 text-sm mb-3">
                    <p onClick={() => setPropertyType('rent')}  className="cursor-pointer border-b-2 px-6 py-2 bg-red-50 border-b-red-200"> {t('propertyRent')}</p>
                    <p onClick={() => setPropertyType('sale')} className="cursor-pointer border-b-2 px-6 py-2 bg-red-50 border-b-red-200"> {t('propertySale')}</p>
                  </div>
                  : <div></div> }
                <p className="text-base text-gray-600">You have {postCount} posted Ads</p>

                  {loading && <p className="text-base">loading...</p>}
                  <hr></hr>
                

                <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                <table className="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-50">
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{t('list')}</th>
                        {/* <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{t('lastUpdates')}</th> */}
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{t('views')}</th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{t('actions')}</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                    {posts && posts.map((property) => (
                        <tr key={property._id}>
                        <td className="flex px-4 py-2 font-medium text-gray-900">
                        <div className="hidden md:block">
                        <Image
                            src={`https://dutao-public.s3.amazonaws.com/${property.images[0]}`}
                            alt="dutao image"
                            width={90}
                            height={70}
                            className="object-cover rounded-lg"
                        />
                        </div>
                        <div className="pl-0 sm:pl-4">
                        <h5 className="text-gray-500 text-base font-light">
                            <TextTruncate
                            line={1}
                            element="span"
                            truncateText="???"
                            text={property.title}
                        /></h5>
                        <p className="text-xs text-gray-500">{property.bedroom} Bed - {property.bathroom} Baths - {property.size}sqft</p>
                        <p className="text-xs">Price : {property.price}</p>
                        </div>
                        
                        </td>
                        {/* <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{moment(property.createdAt).format("DD MMM YY")}</td> */}
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{property.views ? property.views : 0}</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap justify-end">

                            <div className="grid lg:grid-cols-3 gap-x-2">
                            <Link href={`/profile/business/promote/?title=${property.title}&price=${property.price}&id=${property._id}`}>
                                <p className="flex border-black-600 border-2 uppercase px-3 py-2 rounded-lg text-xs tracking-wide hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                                </svg>
                                    <span className='pl-2'>{t('promote')}</span>
                                </p>
                              </Link>
                                
                              <Link href={`/profile/business/feature/?title=${property.title}&price=${property.price}&id=${property._id}`}>
                                <p className="flex border-2 r-0 border-black-600  uppercase px-3 py-2 rounded-lg text-xs tracking-wide hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                                    <span className='pl-2'>{t('feature')}</span>
                                </p>
                                </Link>
                              
                                <p className="flex border text-red-600 border-red-300 uppercase px-3 py-2 rounded-lg hover:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <button onClick={()=> deleteHandler(property._id, property.images)} className='pl-2'>{t('remove')}</button>
                                </p>
                            </div>
                          </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                {/* ----------- popup starts ----------- */}
                { popUp && 
                    <div className="absolute left-[30%] top-[30%] max-w-screen-sm  p-8 bg-white rounded-lg shadow-2xl">
                        <h2 className="text-lg font-bold">{t('areYouSure')}</h2>
                        <p className="mt-2 text-sm text-gray-500">{t('irreversibleProcess')}</p>
                        <div className="flex items-center justify-end mt-8 text-xs">
                            <button type="button" onClick={() => deleteFn()} className="px-4 py-2 font-medium text-green-600 rounded bg-green-50">{t('yes')}</button>
                            <button type="button" onClick={() => setPopup(false)} className="px-4 py-2 ml-2 font-medium text-gray-600 rounded bg-gray-50">{t('no')}</button>
                        </div>
                    </div>}
                    {/* ---------- popup ends ---------------  */}
                </div>              
                </div>        
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}
