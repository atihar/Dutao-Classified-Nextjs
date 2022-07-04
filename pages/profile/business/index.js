import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import { useRouter } from "next/router"
import { Store } from '../../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation';
import axios from "axios"

function MyBusiness() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [ userData, setUserData] = useState({})
    const {t} = useTranslation('common')
    const [bizData, setBizData] = useState({})

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
        }
        else {
                getBusinessData();
                setUserData(userInfo)
            }
        }, []);

    const getBusinessData = async () => {
        const { data } = await axios.get(`/api/user/biz-data/?id=${userInfo._id}`)
        setBizData(data)
        console.log(bizData)
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
        <h2 className="font-bold pt-5"> Dutao Business Dashboard</h2>
        <p className="pb-5">{bizData.businessName}</p>
            <div className="grid lg:grid-cols-[1fr_3fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                        <Link href={'/profile'}><li className="text-white py-2 px-4 rounded-lg active">{t('myProfile')}</li></Link>
                        <Link href={'/profile/business/ads'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('myAds')}</li></Link>
                        {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg ">Subscription</li></Link> */}
                        <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">{t('logout')}</li>
                    </ul>
                </div>
                <div>
                    <div className="flex space-x-1 sm:space-x-8">
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base whitespace-nowrap">{t('myAds')}</p>
                            <p className="font-bold">30</p>
                        </div>
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base">{t('mySearches')}</p>
                            <p className="font-bold">0</p>
                        </div>                                         
                    </div>

                    <div className="py-5 w-full bg-gray-100 mt-4 rounded-lg p-5">
                        <h2 className="font-bold">{t('summary')}</h2>
                        <hr/>
                        <p className="text-base py-2">{userData.name}</p>
                        <h3 className="text-base font-bold">My Subscription</h3>
                        <p className="text-base py-2">Activated on : 12 Jan, 2023</p>
                        <p className="text-base py-2">Expires on : 13 Jun, 2023</p>
                        <p className="text-base py-2 hidden lg:block">{t('membership')} : Free</p>
                        {/* <p className="text-base py-2">{userData.email}</p>                           */}
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}

export default MyBusiness