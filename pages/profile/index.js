import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation';
import axios from "axios"

function Profile() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [ userData, setUserData] = useState({})
    const {t} = useTranslation('common')
    const [accountType, setAccountType] = useState('')
    const [adCount, setAdCount] = useState('')

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
            else {
                getBusinessData();
                setUserData(userInfo)
                getAdCount();
            }
        }, []);
    
    const getBusinessData = async () => {
        const { data } = await axios.get(`/api/user/biz-data/?id=${userInfo._id}`)
        setAccountType(data.subscription)
        // console.log(accountType)
    }

    const getAdCount = async () => {
        const { data } = await axios.get(`/api/user/ad-count/?email=${userInfo.email}`)
        setAdCount(data.totalad)
    }


    const logoutClickHandler = () => {
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        router.push('/');
        };
        
  return (
      <>
        <Header></Header>
        <div className='max-w-screen-xl w-screen mx-auto sm:py-4 px-8 sm:my-4 rounded-lg shadow' data-aos="zoom-y-out">
        <h2 className="font-bold py-5"> {t('dashboard')}</h2>
            <div className="grid lg:grid-cols-[1fr_3fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                        {/* <Link href={'/profile'}><li className="text-white py-2 px-4 rounded-lg active flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mr-2" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>{t('myProfile')}</li></Link> */}
                            <Link href={'/profile'}><li className="text-white py-2 px-4 rounded-lg active">{t('myProfile')}</li></Link>
                        { accountType == 2 ? <Link href={'/profile/business'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('accessBusiness')}</li></Link> : <div></div> }
                        <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myAds')}</li></Link>
                        <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('manageRecruit')}</li></Link>
                        <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myInfo')}</li></Link>
                        <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('mySearches')}</li></Link>
                        <Link href={'/profile/settings'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('settings')}</li></Link>
                        {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg ">Subscription</li></Link> */}
                        <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('logout')}</li>
                    </ul>
                </div>
                <div>
                    <div className="flex space-x-1 sm:space-x-8">
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base whitespace-nowrap">{t('myAds')}</p>
                            <p className="font-bold">{adCount ? adCount : 0 }</p>
                        </div>
                        <div className="flex-1 text-center px-6 py-4 border-2 border-red-600 text-white rounded-lg">
                            <p className="text-base text-red-600">{t('mySearches')}</p>
                            <p className="font-bold text-red-600">0</p>
                        </div>                                         
                    </div>

                    <div className="py-5 w-full bg-gray-100 mt-4 rounded-lg p-5">
                        <h2 className="font-bold">{t('summary')}</h2>
                        <hr/>
                        <p className="text-base py-2">{userData.name}</p>
                        <p className="text-base py-2 hidden lg:block">{t('membership')} : Free</p>
                        <p className="text-base py-2">{userData.email}</p>                          
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}

export default Profile
