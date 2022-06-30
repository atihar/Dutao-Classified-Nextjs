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

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    fetchUserData();

    if(bizCategory == 'property'){
      fetchPropertyData()
    }
    else if(bizCategory == 'motors'){
      fetchMotorData()
    }
  }, [bizCategory]);

  // Prefetch data to check the business account details of the user
  const fetchUserData = async () => {
    //doing CSR for fetching users posts using axios and setting data to state to render it
    setLoading(true)
    const userEmail = userInfo.email
    const { data } = await axios.get(`/api/user/biz-data/?id=${userInfo._id}`,{
      headers: { authorization: `Bearer ${userInfo.token}` }
    })
    // setting business cateogory which will lead to the category based data fetching
    setBizCategory(data.businessCategory)
 }
 

  const fetchPropertyData = () => {
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
      // await deletePhoto(productImages);
      await axios.delete(`/api/user/manage/property-for-sale/?id=${productId}`);
      await deletePhoto(productImages);
      setLoading(false)
      router.reload()
    } catch (err) {
      console.log(err)
    }
  };


  return (
      <>
        <Header></Header>

        <div className='sm:max-w-screen-xl sm:w-screen mx-auto py-4 px-4 my-4 rounded-lg shadow' data-aos="zoom-y-out">
        <h2 className="font-bold py-0 sm:py-5"> {t('dashboard')} </h2>
        <p className="pb-5">Business Name</p>
            <div className="grid lg:grid-cols-[1fr_4fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                          <Link href={'/profile/business'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myProfile')}</li></Link>
                          <Link href={'/profile/manage/business/ads'}><li className="py-2 px-4 rounded-lg text-white active">{t('myAds')}</li></Link>
                          <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myInfo')}</li></Link>
                          {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li></Link> */}
                    </ul>
                </div>
                <div>
                  <div className="flex flex-inline justify-between">
                    <p className="text-base text-gray-600">You have {postCount} posted Ads</p>
                    <p className="text-sm text-gray-600">Manage ad</p>
                  </div> 
                  {loading && <p className="text-base">loading...</p>}
                  <hr></hr>
                

                <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                <table className="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-50">
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">List</th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Last Update</th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Views</th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                    {posts && posts.map((property) => (
                        <tr key={property._id}>
                        <td className="flex px-4 py-2 font-medium text-gray-900">
                        <Image
                            src={`https://dutao-public.s3.amazonaws.com/${property.images[0]}`}
                            alt="dutao image"
                            width={90}
                            height={70}
                            className="object-cover rounded-lg"
                        />
                        <div className="pl-4">
                        <h5 className="text-gray-500 text-base font-light">
                            <TextTruncate
                            line={1}
                            element="span"
                            truncateText="…"
                            text={property.title}
                        /></h5>
                        <p className="text-xs text-gray-500">{property.bedroom} Bed - {property.bathroom} Baths - {property.size}sqft</p>
                        <p className="text-xs">Price : {property.price}</p>
                        </div>
                        
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">22 days</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">0</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">

                            <div className="grid grid-cols-3 gap-x-2">
                              <Link href={`/profile/business/promote/?title=${property.title}&price=${property.price}&id=${property._id}`}>
                                <p className="flex border-black-600 border-2 uppercase px-3 py-2 rounded-lg text-xs tracking-wide hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                                </svg>
                                    <span className='pl-2'>Promote</span>
                                </p>
                              </Link>
                                

                                <p className="flex border-2 r-0 border-black-600  uppercase px-3 py-2 rounded-lg text-xs tracking-wide hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                                    <span className='pl-2'>Feature</span>
                                </p>

                                <p className="flex border text-red-600 border-red-300 uppercase px-3 py-2 rounded-lg hover:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <button onClick={showpopupHandler} className='pl-2'>Remove</button>
                                </p>
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
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>              
                </div>        
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}
