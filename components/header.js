//hydration problem solve https://github.com/vercel/next.js/discussions/17443 for logical menu & SSR

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Store } from '../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'store-js';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'

const { locales } = i18nConfig
export default function Header({ children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [mounted, setMounted] = useState(false);
  const { userInfo } = state;
  const { t, lang } = useTranslation('common')
  useEffect(() => {
    setMounted(true)
  }, []);

// Persisting user defined translation for the next time
    const { locale, defaultLocale } = useRouter()

    useEffect(persistLocaleCookie, [locale, defaultLocale])
    function persistLocaleCookie() {
      if(locale !== defaultLocale) {
         const date = new Date()
         const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
         date.setTime(date.getTime() + expireMs)
         document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
      }
    }
//logout handler 
  const logoutClickHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    router.push('/');
  };

return ( 
    <>
    <Head>
        <title>Dutao</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

    </Head>
    {/* topbar */}

      {/* <aside className="p-3 text-white bg-gradient-to-r from-red-600 to-orange-600 hidden md:block">
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>

          <a className="ml-1.5 text-sm font-medium underline underline-offset-1" href={'/members'}>
            Claim upto 80% discount on special product with VIP membership!!
            &rarr;
          </a>
        </div>
      </aside> */}

      {/* Navbar */}

      <header className="shadow-sm mb-16 md:mb-1">
        <div className="max-w-screen-xl pt-7 px-2 fixed lg:relative z-50 w-full bg-white mx-auto lg:mt-3 sm:mt-0">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex items-center lg:w-0 lg:flex-1">
              {router.pathname !== '/' ? <p onClick={()=> router.back()} className="flex lg:hidden mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-arrow-left-circle bg-black rounded-full" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                  </svg>
              </p> : ''}
            <Link href={'/'}>
              <div>
              <Image src="/dutao.png" alt="Picture of the author" width={130} height={40}/>
              </div>
            </Link>
            </div>


            <div className="items-center justify-end flex-1 hidden sm:space-x-4 sm:flex">

            {/* translate change group  */}
            <div className="relative group text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
              <div className="absolute right-0 left-auto z-30 hidden w-32 bg-grey-200 group-hover:block ">       
                        <div className="px-2 pt-2 group-hover:block pb-4 bg-white-500 bg-white-500 bg-gray-50 rounded-lg shadow-lg">
                          <div className="flex-column text-left text-xs space-y-4 p-2 rounded text-gray-700">
                             <div><button onClick={async () => await setLanguage('en')}>English</button></div>
                             <div><button onClick={async () => await setLanguage('cn')}>中国人</button></div>
                          </div>
                        </div>
                    </div>
            </div>
            {/* <translate end  */}
            <a className="text-gray-500" href={'/profile/favorite'}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg></a>

              <a className="text-gray-500" href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg></a>
            
            { mounted && userInfo ? 
              <div className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
                  {/* svg for user if logged in */}
                  <div className="relative group">
                      <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-1 focus:outline-none font-montserrat">
                        <span className='inline-flex'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg><span className='pl-2'>{t('myAccount')} </span></span>
                      </button>

                      <div className="absolute right-0 left-auto z-30 hidden w-64 bg-grey-200 group-hover:block ">       
                        <div className="px-2 pt-2 group-hover:block pb-4 bg-white-500 bg-white-500 bg-gray-50 rounded-lg shadow-lg">
                          <div className="flex-column text-left text-xs space-y-5 p-2 rounded ">
                                  <Link href={'/profile'}><li className='list-none text-size[8px] cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>{userInfo.email}</li></Link>
                                  <Link href={'/profile'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>{t('myProfile')}</li></Link>
                                  <Link href={'/profile/manage/property-for-sale'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>{t('myAds')}</li></Link>
                                  <Link href={'/'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'><a onClick={logoutClickHandler}>{t('logout')}</a></li></Link>
                          </div>
                        </div>
                    </div>
                    </div>                  
                </div>

              : <Link href="/login"><a className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
               {t('login')} 
              </a></Link>
              

            }
              

              <Link href="/post-ad">
              <a
                className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg">
               {t('postAd')} 
              </a>
              </Link>
            </div>
            <div className="relative group text-gray-500 sm:hidden pr-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
              <div className="absolute right-5 left-auto z-30 hidden w-32 bg-grey-200 group-hover:block ">       
                  <div className="px-2 pt-2 group-hover:block pb-4 bg-white-500 bg-white-500 bg-gray-50 rounded-lg shadow-lg">
                    <div className="flex-column text-left text-xs space-y-4 p-2 rounded text-gray-700">
                        <div><button onClick={async () => await setLanguage('en')}>English</button></div>
                        <div><button onClick={async () => await setLanguage('cn')}>中国人</button></div>
                    </div>
                  </div>
              </div>
            </div>
          
          
          </div>
        </div>

        <div className="sm:max-w-screen-xl py-5 mx-auto flex-auto ">
          <div className="hidden justify-around text-center text-sm font-medium md:flex text-gray-700">

          <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                <Link href={"/property-for-rent"}>
                  {t('propertyRent')}
                </Link>
                </button>

                <div className="absolute z-20 hidden w-44 bg-grey-200 group-hover:block">       
                  <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                    <div className="flex-column text-left text-xs space-y-4 p-4 rounded">
                          <Link href={'/property-for-rent/list?category=apartment'}><li className='list-none cursor-pointer'>{t('apartmentForRent')}</li></Link>
                          <Link href={'/property-for-rent/list?category=villa'}><li className='list-none cursor-pointer'>{t('villaHouse')}</li></Link>
                          <Link href={'/property-for-rent/list?category=studio'}><li className='list-none cursor-pointer'>{t('studioForRent')}</li></Link>
                          <Link href={'/property-for-rent/list?category=short%term'}><li className='list-none cursor-pointer'>{t('shortTermMonthly')}</li></Link>
                          <Link href={'/property-for-rent/list?category=townhouse'}><li className='list-none cursor-pointer'>{t('townhouseForRent')}</li></Link>
                          <Link href={'/property-for-rent/list?category=commercial'}><li className='list-none cursor-pointer'>{t('commercialFloor')}</li></Link>
                          <Link href={'/property-for-rent/list?category=residential%floor'}><li className='list-none cursor-pointer'>{t('residentialFloor')}</li></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                  <Link href={"/property-for-sale"}>
                     {t('propertySale')}
                  </Link>
                </button>

                <div className="absolute z-30 hidden w-44 bg-grey-200 group-hover:block">       
                  <div className="px-2 pt-2 group-hover:block pb-4 bg-white-500 bg-white-500 bg-gray-50 shadow-lg">
                    <div className="flex-column text-left text-xs space-y-5 p-2 rounded ">
                            <Link href={'/property-for-sale/list?category=apartment'}><li className='list-none cursor-pointer'>{t('apartmentForSale')}</li></Link>
                            <Link href={'/property-for-sale/list?category=villa'}><li className='list-none cursor-pointer'>{t('villaForSale')}</li></Link>
                            <Link href={'/property-for-sale/list?category=studio'}><li className='list-none cursor-pointer'>{t('studioForSale')}</li></Link>
                            <Link href={'/property-for-sale/list?category=townhouse'}><li className='list-none cursor-pointer'>{t('townhouse')}</li></Link>
                            <Link href={'/property-for-sale/list?category=penthouse'}><li className='list-none cursor-pointer'>{t('penthouse')}</li></Link>
                            <Link href={'/property-for-sale/list?category=res%building'}><li className='list-none cursor-pointer'>{t('residentialBuilding')}</li></Link>
                            <Link href={'/property-for-sale/list?category=res%floor'}><li className='list-none cursor-pointer'>{t('residentialFloor')}</li></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                <Link href={'/motors'}><span>
                  {t('motors')}
                  </span></Link>
                </button>

                <div className="absolute z-20 hidden w-44 bg-grey-200 group-hover:block">       
                  <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                    <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                        <Link href={'/motors/list?category=cars'}><li className='list-none cursor-pointer'>{t('cars')}</li></Link>
                        <Link href={'/motors/list?category=motorcycle'}><li className='list-none cursor-pointer'>{t('motorcycle')}</li></Link>
                        <Link href={'/motors/list?category=accessories'}><li className='list-none cursor-pointer'>{t('accessories')}</li></Link>
                        <Link href={'/motors/list?category=heavy&vehicles'}><li className='list-none cursor-pointer'>{t('heavyVehicles')}</li></Link>
                        <Link href={'/motors/list?category=boats'}><li className='list-none cursor-pointer'>{t('boats')}</li></Link>
                        <Link href={'/motors/list?category=boats'}><li className='list-none cursor-pointer'>{t('numberPlates')}</li></Link>
                        <Link href={'/motors/list?category=boats'}><li className='list-none cursor-pointer'>{t('exportCars')}</li></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                <Link href={'/special-products'}><span>{t('specialProducts')}</span></Link>
                </button>

              </div>
              
              <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                <Link href={'/jobs'}><span> {t('jobs')} </span></Link>
                </button>

                <div className="absolute z-20 hidden w-48 bg-grey-200 group-hover:block">       
                  <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                    <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                        <Link href={'/jobs/list?category=accounting'}><li className='list-none cursor-pointer'>{t('accounting')}</li></Link>
                        <Link href={'/jobs/list?category=business-development'}><li className='list-none cursor-pointer'>{t('businessDevelopment')}</li></Link>
                        <Link href={'/jobs/list?category=human-resource'}><li className='list-none cursor-pointer'>{t('humanResource')}</li></Link>
                        <Link href={'/jobs/list?category=banking-and-finances'}><li className='list-none cursor-pointer'>{t('banking')}</li></Link>
                        <Link href={'/jobs/list?category=healthcare'}><li className='list-none cursor-pointer'>{t('healthcare')}</li></Link>
                        <Link href={'/jobs/list?category=information-tech'}><li className='list-none cursor-pointer'>{t('infoTech')}</li></Link>
                        <Link href={'/jobs/list?category=sales-and-marketing'}><li className='list-none cursor-pointer'>{t('salesAndMarketing')}</li></Link>
                        <Link href={'/jobs/list?category=legal-services'}><li className='list-none cursor-pointer'>{t('legalService')}</li></Link>
                        <Link href={'/jobs/list?category=real-estate'}><li className='list-none cursor-pointer'>{t('realEstate')}</li></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                <Link href={'/community'}><span> {t('community')} </span></Link>
                </button>

                <div className="absolute z-20 hidden w-48 bg-grey-200 group-hover:block">       
                  <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                    <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                        <Link href={'/community/list?category=auto-service'}><li className='list-none cursor-pointer'>{t('autoService')}</li></Link>
                        <Link href={'/community/list?category=event-management'}><li className='list-none cursor-pointer'>{t('eventManagement')}</li></Link>
                        <Link href={'/community/list?category=human-freelancers'}><li className='list-none cursor-pointer'>{t('freelancers')}</li></Link>
                        <Link href={'/community/list?category=health-service'}><li className='list-none cursor-pointer'>{t('healthService')}</li></Link>
                        <Link href={'/community/list?category=home-maintenance'}><li className='list-none cursor-pointer'>{t('homeMaintenance')}</li></Link>
                        <Link href={'/community/list?category=movers'}><li className='list-none cursor-pointer'>{t('movers')}</li></Link>
                        <Link href={'/community/list?category=restoration-service'}><li className='list-none cursor-pointer'>{t('restoration')}</li></Link>
                        <Link href={'/community/list?category=tutor-services'}><li className='list-none cursor-pointer'>{t('tutorService')}</li></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                <Link href={'/used-items'}><span> {t('usedItems')} </span></Link>
                </button>

                <div className="absolute z-20 hidden w-48 bg-grey-200 group-hover:block">       
                  <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                    <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                        <Link href={'/used-items/list?category=electronics'}><li className='list-none cursor-pointer'>{t('electronics')}</li></Link>
                        <Link href={'/used-items/list?category=clothing-accessories'}><li className='list-none cursor-pointer'>{t('clothing')}</li></Link>
                        <Link href={'/used-items/list?category=jewerly-wacthes'}><li className='list-none cursor-pointer'>{t('jewelry')}</li></Link>
                        <Link href={'/used-items/list?category=music-instruments'}><li className='list-none cursor-pointer'>{t('musicInstrument')}</li></Link>
                        <Link href={'/used-items/list?category=furniture'}><li className='list-none cursor-pointer'>{t('furniture')}</li></Link>
                        <Link href={'/used-items/list?category=books'}><li className='list-none cursor-pointer'>{t('books')}</li></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/info-center'}><span> {t('infoCenter')} </span></Link>
            </button>

            <div className="absolute z-20 hidden w-[700px] lg:w-[1000px] bg-grey-200 right-0 group-hover:block">       
              <div className="px-4 pt-2 pb-4 bg-white-500 bg-gray-50 rounded shadow-lg">
                <p className='text-left text-base py-4'>{t('locSearchText')}</p>
                <div className='flex text-left space-x-16'>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>{t('dubai')}</h6>
                    <hr/>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('bBay')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('safa')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('barsha')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('ranch3')}</p></Link>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>{t('morePlace')}</h6>
                    <hr/>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('dHill')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('bDubai')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('eHill')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('jAli')}</p></Link>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>{t('morePlace')}</h6>
                    <hr/>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('jPark')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('jadaf')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('internet')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('dWater')}</p></Link>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>{t('morePlace')}</h6>
                    <hr/>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('quoz')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('spring')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer"> {t('creek')}</p></Link>
                    <Link href={'/info-center'}><p className="cursor-pointer">{t('suqeim')}</p></Link>
                  </div>
                   <div className='text-left space-y-1'>
                   <Link href="/info-center">
                        <a className="inline-flex items-center px-8 py-3 text-red-500">
                          <span className="text-sm font-medium">
                            {t('viewMore')}
                          </span>

                          <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                        </Link>
                    </div>
                  </div>
              </div>
            </div>
              </div>

          </div>
        </div>
        <div className='relative'>
          <div className="fixed max-w-screen items-center bottom-0  pb-1 left-0 right-0 z-50 overflow-hidden lg:hidden h-[50px] bg-red-600">
            <div className='flex items-center h-full justify-evenly'>
              <Link href={'/post-ad'}>
              <div className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
              </Link>
              <Link href={'/'}>
              <div className='text-white'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                  </svg>
              </div>
              </Link>
              <Link href={'/'}>
              <div className='text-white'>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
              </div>
              </Link>
              <Link href={'/profile/favorite'}>
              <div className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </div>
              </Link>
              <Link href={'/profile'}>
              <div className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
              </div>
              </Link>

            </div>
          </div>  
        </div>
      </header>

    </>
  )
}