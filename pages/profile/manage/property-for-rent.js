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
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'
import moment from "moment"


export default function ManagePropertyForRent() {
  const router = useRouter()
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ popUp, setPopup] = useState(false)
  const { t, lang } = useTranslation('common')


  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    fetchData()
  }, []);

  const fetchData = () => {
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

  const showpopupHandler = () =>{
    setPopup(true)
  }
  const hidepopupHandler = () => {
    setPopup(false)
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
      setLoading(true)
      if(productImages){
        await deletePhoto(productImages);
      }
      await axios.delete(`/api/user/manage/property-for-rent/?id=${productId}`);
      setLoading(false)
      router.reload()
    } catch (err) {
      console.log(err)
    }
  };


  return (
      <>
        <Header></Header>
        <div className='sm:max-w-screen-xl sm:w-screen mx-auto md:py-4 px-8 md:my-4 rounded-lg shadow' data-aos="zoom-y-out">
        <h2 className="font-bold py-5"> {t('dashboard')}</h2>
            <div className="grid lg:grid-cols-[1fr_1fr_4fr] gap-4">
                <div>
                <ul className="text-base space-y-0 md:space-y-4">
                          <Link href={'/profile'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myProfile')}</li></Link>
                          <Link href={'/profile/manage/property-for-sale'}><li className="py-2 px-4 rounded-lg text-white active">{t('myAds')}</li></Link>
                          <Link href={'/profile/manage/job'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('manageRecruit')}</li></Link>
                          <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myInfo')}</li></Link>
                          <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('mySearches')}</li></Link>
                          <Link href={'/profile/settings'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('settings')}</li></Link>
                          {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li></Link> */}
                    </ul>
                </div>
                <div className="overflow-scroll lg:overflow-auto">
                  <ul className="inline-flex lg:block whitespace-nowrap lg:ml-0 text-base space-y-0 md:space-y-4">
                          <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('propertyForSale')}</li></Link>
                          <Link href={'/profile/manage/property-for-rent'}><li className=" py-2 px-4 rounded-lg text-white active">{t('propertyForRent')}</li></Link>
                          <Link href={'/profile/manage/motors'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('motors')}</li></Link>
                          <Link href={'/profile/manage/community'}><li className="hover:bg-gray-100  py-2 px-4 rounded-lg ">{t('community')}</li></Link>
                          <Link href={'/profile/manage/used-items'}><li className="hover:bg-gray-100  py-2 px-4 rounded-lg ">{t('usedItems')}</li></Link>
                      </ul>
                </div>
                <div>
                  <div className="flex flex-inline justify-between">
                    <p className="text-base text-gray-600">You have {postCount} posted Ads</p>
                    <p className="text-sm text-gray-600">Manage ad</p>
                  </div> 

                {loading && <p className="text-base">loading...</p>}
                  <hr></hr>
                {posts && posts.map((property) => (
                 <div className=" flex justify-center' py-2" key={property._id} >
                 <div className="md:flex w-full rounded-lg bg-white shadow-lg">
                 <Image
                       src={`https://dutao-public.s3.amazonaws.com/${property.images[0]}`}
                       alt="dutao image"
                       width={340}
                       height={200}
                       className="object-cover rounded-t-lg"
                   />
                   <div className="py-2 px-6 w-full">
                     <div className="flex items-center justify-between">
                       <div className="relative w-full">
                         <h5 className="text-gray-500 text-xl font-light">
                             <TextTruncate
                               line={1}
                               element="span"
                               truncateText="…"
                               text={property.title}
                           /></h5>
                       
                       <div className="absolute inline-flex right-0 top-16 lg:top-0">
                       <Link href={'/property-for-rent/'+ property._id}>
                         <p className="border-black border-[1px] px-2 py-1 rounded-lg bg-white hover:bg-gray-100 hover:cursor-pointer">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                           <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                           <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                           </svg>
                         </p>
                       </Link>
                       
                       <p className="flex border ml-2 r-0 border-red-600 text-white bg-red-600 uppercase px-3 py-1 rounded-lg text-xs tracking-wide hover:cursor-pointer">
                       <button onClick={showpopupHandler} className='pl-2'>Remove</button></p>
                           { popUp && 
                         <div className="absolute left-[30%] top-[30%] max-w-screen-sm  p-8 bg-white rounded-lg shadow-2xl">
                             <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>
 
                             <p className="mt-2 text-sm text-gray-500">
                               Doing that could have cause some issues elsewhere, are you 100% sure it's OK?
                             </p>
 
                             <div className="flex items-center justify-end mt-8 text-xs">
                               <button type="button" onClick={() => deleteHandler(property._id, property.images)} className="px-4 py-2 font-medium text-green-600 rounded bg-green-50">Yes, I'm sure</button>
                               <button type="button" onClick={hidepopupHandler} className="px-4 py-2 ml-2 font-medium text-gray-600 rounded bg-gray-50">No, go back</button>
                             </div>
                         </div>}
                       </div> 
                       </div>   
                     </div>
                             
                     <p className="text-gray-700 pb-1 text-xs">{property.category}</p>
                     <p className="text-sm font-bold text-red-600">AED {property.price}</p>
 
                     <p className="text-gray-400 pt-1 text-xs">Last updated {moment(property.createdAt).startOf('hour').fromNow()}</p>
                       <p className="mb-2 text-sm pt-1 text-gray-500">{property.bedroom} Bed - {property.bathroom} Baths - {property.size}sqft</p>     
                   </div>
                 </div>
               </div>
                ))}
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}
