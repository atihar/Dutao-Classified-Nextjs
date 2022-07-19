// My Listings or ads page accessible after a user is logged in
// image deletion is yet to be implemented

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import TextTruncate from 'react-text-truncate'
import axios from "axios"
import React, { useEffect, useState, useContext, useReducer } from 'react';
import { Store } from '../../../lib/Store';
import { useRouter } from 'next/router';
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'


export default function ManageUsedItems() {
  const router = useRouter()
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0)
  const [ popUp, setPopup] = useState(false);
  const { t, lang } = useTranslation('common')


  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }

    //doing CSR for fetching users posts using axios and setting data to state to render it
    const userEmail = userInfo.email
    axios.get(`/api/user/manage/used-items/?userEmail=${userEmail}`,{
      headers: { authorization: `Bearer ${userInfo.token}` }
    })
      .then(function (response) {
        setPosts(response.data)
        setPostCount(response.data.length)
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

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
              const res = await fetch(`https://dutao.ae/api/delete-s3Object?file=${filename}`);
          }
          ))
      } catch(e){console.error(e)}
  }

 const deleteHandler = async (productId, productImages) => {
    try {
      await deletePhoto(productImages);
      await axios.delete(`/api/user/manage/used-items/?id=${productId}`);
      router.reload()
    } catch (err) {
      console.log(err)
    }
  };


  return (
      <>
        <Header></Header>
        <div className='max-w-screen-xl w-screen mx-auto md:py-4 px-8 md:my-4 rounded-lg shadow '>
        <h2 className="font-bold py-5"> {t('dashboard')} </h2>
            <div className="grid lg:grid-cols-[1fr_1fr_4fr] gap-4">
                <div>
                    <ul className="text-base space-y-0 md:space-y-4">
                          <Link href={'/profile'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myProfile')}</li></Link>
                          <Link href={'/profile/my-ads'}><li className="py-2 px-4 rounded-lg text-white active">{t('myAds')}</li></Link>
                          <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('manageRecruit')}</li></Link>
                          <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myInfo')}</li></Link>
                          <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('mySearches')}</li></Link>
                          <Link href={'/profile/settings'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('settings')}</li></Link>
                          {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li></Link> */}
                    </ul>
                </div>
                <div className="overflow-scroll lg:overflow-auto">
                  <ul className="inline-flex lg:block whitespace-nowrap lg:ml-0 text-base space-y-0 md:space-y-4">
                          <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('propertyForSale')}</li></Link>
                          <Link href={'/profile/manage/property-for-rent'}><li className="hover:bg-gray-100  py-2 px-4 rounded-lg ">{t('propertyForRent')}</li></Link>
                          <Link href={'/profile/manage/motors'}><li className="hover:bg-gray-100  py-2 px-4 rounded-lg ">{t('motors')}</li></Link>
                          <Link href={'/profile/manage/community'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('community')}</li></Link>
                          <Link href={'/profile/manage/used-items'}><li className="py-2 px-4 rounded-lg text-white active">{t('usedItems')}</li></Link>
                      </ul>
                </div>
                <div>
                  <div className="flex flex-inline justify-between">
                    <p className="text-base text-gray-600">You have {postCount} posted Ads</p>
                    <p className="text-sm text-gray-600">Manage ad</p>
                  </div> 
                  
                  <hr></hr>
                {posts && posts.map((ad) => (
                <div className=" flex justify-center' py-2" key={ad._id} >
                  <div className="flex w-full rounded-lg bg-white shadow-lg">
                  <Image
                        src={`https://dutao-public.s3.amazonaws.com/${ad.images[0]}`}
                        alt="dutao image"
                        width={380}
                        height={240}
                        className="object-cover rounded-t-lg"
                    />
                    <div className="py-4 px-6 w-full">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h5 className="text-gray-500 text-xl font-light">
                              <TextTruncate
                                line={2}
                                element="span"
                                truncateText="…"
                                text={ad.title}
                            /></h5>
                        </div>
                        <div>
                        <Link href={'/used-items/'+ ad._id}>
                        <p className="flex border ml-5 r-0 border-red-600 text-red-600 uppercase px-3 py-2 rounded-full text-[9px] tracking-wide hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg><button className='pl-2'>View</button></p></Link>

                        {/* <p className="flex border mt-2 ml-5 r-0 border-black-600 text-white bg-black uppercase px-3 py-2 rounded-full text-[9px] tracking-wide hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg><span className='pl-2'>Edit</span></p> */}
                        
                        <p className="flex border mt-2 ml-5 r-0 border-red-600 text-white bg-red-600 uppercase px-3 py-2 rounded-full text-[9px] tracking-wide hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg><button onClick={showpopupHandler} className='pl-2'>Delete</button></p>
                            { popUp && 
                          <div className="absolute left-[30%] top-[30%] max-w-screen-sm  p-8 bg-white rounded-lg shadow-2xl">
                              <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

                              <p className="mt-2 text-sm text-gray-500">
                                Doing that could have cause some issues elsewhere, are you 100% sure it's OK?
                              </p>

                              <div className="flex items-center justify-end mt-8 text-xs">
                                <button type="button" onClick={() => deleteHandler(ad._id, ad.images)} className="px-4 py-2 font-medium text-green-600 rounded bg-green-50">Yes, I'm sure</button>
                                <button type="button" onClick={hidepopupHandler} className="px-4 py-2 ml-2 font-medium text-gray-600 rounded bg-gray-50">No, go back</button>
                              </div>
                          </div>}
                        </div>       
                      </div>
                      

                      <p className="mb-1 text-lg font-bold text-red-600">AED {ad.price}</p>

                      <p className="text-gray-400 py-1 text-xs">Last updated 3 mins ago</p>

                        <p className='flex text-sm py-1 text-gray-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            {ad.address}
                        </p>  
                        
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
