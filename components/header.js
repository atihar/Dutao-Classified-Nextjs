//hydration problem solve https://github.com/vercel/next.js/discussions/17443 for logical menu & SSR

import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'store-js';
import { useRouter } from 'next/router';

export default function Header({ children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [mounted, setMounted] = useState(false);
  const { userInfo } = state;
  
  
  useEffect(() => {
    setMounted(true)
  }, []);

  const mobileMenu = 0;
  function openMobileMenu(){
    console.log('clicked in mobile');
  }

  const logoutClickHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    router.push('/');
  };

  return ( 
    <>
    {/* topbar */}

      {/* <aside className="p-3 text-white bg-gradient-to-r from-red-500 to-orange-500">
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>

          <a className="ml-1.5 text-sm font-medium underline underline-offset-1" href='">
            Claim upto 80% discount with VVIP access!!
            &rarr;
          </a>
        </div>
      </aside> */}

      {/* Navbar */}

      <header className="shadow-sm">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <Link href="/">
            <div className="flex lg:w-0 lg:flex-1">
              <Image src="/dutao.jpeg" alt="Picture of the author" width={200} height={63}/>
            </div>
            </Link>


            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a className="text-gray-500" href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg></a>

              <a className="text-gray-500" href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg></a>
            
            { mounted && userInfo ? 
              <div className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
                  {/* svg for user if logged in */}
                  <div className="relative group">
                      <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                        <span className='inline-flex'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>My Account</span>
                      </button>

                      <div className="absolute right-0 left-auto z-30 hidden w-48 bg-grey-200 group-hover:block ">       
                        <div className="px-2  pt-2 group-hover:block pb-4 bg-white-500 bg-white-500 bg-gray-50 rounded-lg shadow-lg">
                          <div className="flex-column text-left text-xs space-y-5 p-2 rounded ">
                                  <Link href={'/profile'}><li className='list-none text-size[8px] cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>{userInfo.email}</li></Link>
                                  <Link href={'/profile'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>My Profile</li></Link>
                                  <Link href={'/favourites'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>Favourites</li></Link>
                                  <Link href={'/profile/manage/property-for-sale'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>My Ads</li></Link>
                                  <Link href={'/profile'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'>Account Settings</li></Link>
                                  <Link href={'/'}><li className='list-none cursor-pointer hover:underline hover:decoration-red-200 hover:decoration-2'><a onClick={logoutClickHandler}>Sign Out</a></li></Link>
                          </div>
                        </div>
                    </div>
                    </div>                  
                </div>

              : <Link href="/login"><a className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
              Log in
              </a></Link>
              

            }
              

              <Link href="/post-ad">
              <a
                className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg">
                Post your ad
              </a>
              </Link>
            </div>

            <div className="lg:hidden">
              <button onClick={openMobileMenu} className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl p-4 mx-auto flex-auto ">
          <div className="hidden justify-around space-x-12 text-center text-sm font-medium md:flex text-gray-700">
          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
              <span><Link href={"/property-for-sale"}>Property for Sale</Link></span>
            </button>

            <div className="absolute z-30 hidden w-40 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 group-hover:block pb-4 bg-white-500 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-5 p-2 rounded ">
                        <Link href={'/property-for-sale/list?category=apartment'}><li className='list-none cursor-pointer'>Apartment for sale</li></Link>
                        <Link href={'/property-for-sale/list?category=villa'}><li className='list-none cursor-pointer'>Villas for sale</li></Link>
                        <Link href={'/property-for-sale/list?category=studio'}><li className='list-none cursor-pointer'>Studio for sale</li></Link>
                        <Link href={'/property-for-sale/list?category=townhouse'}><li className='list-none cursor-pointer'>Townhouse</li></Link>
                        <Link href={'/property-for-sale/list?category=penthouse'}><li className='list-none cursor-pointer'>Penthouse</li></Link>
                        <Link href={'/property-for-sale/list?category=res%building'}><li className='list-none cursor-pointer'>Residential Building</li></Link>
                        <Link href={'/property-for-sale/list?category=res%floor'}><li className='list-none cursor-pointer'>Residential Floor</li></Link>
                </div>
              </div>
          </div>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={"/property-for-rent"}>Property for Rent</Link>
            </button>

            <div className="absolute z-20 hidden w-40 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                      <Link href={'/property-for-rent/list?category=apartment'}><li className='list-none cursor-pointer'>Apartment for rent</li></Link>
                      <Link href={'/property-for-rent/list?category=villa'}><li className='list-none cursor-pointer'>Villa House</li></Link>
                      <Link href={'/property-for-rent/list?category=studio'}><li className='list-none cursor-pointer'>Studio Apartment</li></Link>
                      <Link href={'/property-for-rent/list?category=short%term'}><li className='list-none cursor-pointer'>Shortterm Monthly</li></Link>
                      <Link href={'/property-for-rent/list?category=townhouse'}><li className='list-none cursor-pointer'>Townhouse for rent</li></Link>
                      <Link href={'/property-for-rent/list?category=commercial'}><li className='list-none cursor-pointer'>Commercial Space</li></Link>
                      <Link href={'/property-for-rent/list?category=residential%floor'}><li className='list-none cursor-pointer'>Residential Floor</li></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/motors'}><span>Motors</span></Link>
            </button>

            <div className="absolute z-20 hidden w-40 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                    <Link href={'/motors/list?category=cars'}><li className='list-none cursor-pointer'>Cars</li></Link>
                    <Link href={'/motors/list?category=motorcycle'}><li className='list-none cursor-pointer'>Motorcycles</li></Link>
                    <Link href={'/motors/list?category=accessories'}><li className='list-none cursor-pointer'>Accessories & Parts</li></Link>
                    <Link href={'/motors/list?category=heavy&vehicles'}><li className='list-none cursor-pointer'>Heavy Vehicles</li></Link>
                    <Link href={'/motors/list?category=boats'}><li className='list-none cursor-pointer'>Boats</li></Link>
                    <Link href={'/motors/list?category=boats'}><li className='list-none cursor-pointer'>Number Plates</li></Link>
                    <Link href={'/motors/list?category=boats'}><li className='list-none cursor-pointer'>Export Cars</li></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/special-products'}><span>Special Products</span></Link>
            </button>

            {/* <div className="absolute z-20 hidden w-40 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                    <Link href={'/special-products/list?category=cars'}><li className='list-none cursor-pointer'>Cars Offers</li></Link>
                    <Link href={'/special-products/list?category=motorcycle'}><li className='list-none cursor-pointer'>Home Items</li></Link>
                    <Link href={'/special-products/list?category=accessories'}><li className='list-none cursor-pointer'>Rare Collections</li></Link>
                    <Link href={'/special-products/list?category=heavy&vehicles'}><li className='list-none cursor-pointer'>Weekly Deals</li></Link>
                    <Link href={'/special-products/list?category=boats'}><li className='list-none cursor-pointer'>Entertainment</li></Link>
                    <Link href={'/special-products/list?category=boats'}><li className='list-none cursor-pointer'>VIP Coupns</li></Link>
                    <Link href={'/spacial-products/list?category=boats'}><li className='list-none cursor-pointer'>Hotel Deals</li></Link>
                </div>
              </div>
            </div> */}
          </div>
          
          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/jobs'}><span>Jobs</span></Link>
            </button>

            <div className="absolute z-20 hidden w-60 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                    <Link href={'/jobs/list?category=accounting'}><li className='list-none cursor-pointer'>Accounting</li></Link>
                    <Link href={'/jobs/list?category=business-development'}><li className='list-none cursor-pointer'>Business Development</li></Link>
                    <Link href={'/jobs/list?category=human-resource'}><li className='list-none cursor-pointer'>Human Resource</li></Link>
                    <Link href={'/jobs/list?category=banking-and-finances'}><li className='list-none cursor-pointer'>Banking and Finances</li></Link>
                    <Link href={'/jobs/list?category=healthcare'}><li className='list-none cursor-pointer'>Health Care and Medical</li></Link>
                    <Link href={'/jobs/list?category=information-tech'}><li className='list-none cursor-pointer'>Information Technology</li></Link>
                    <Link href={'/jobs/list?category=sales-and-marketing'}><li className='list-none cursor-pointer'>Sales and Marketing</li></Link>
                    <Link href={'/jobs/list?category=leagal-services'}><li className='list-none cursor-pointer'>Legal Services</li></Link>
                    <Link href={'/jobs/list?category=real-estate'}><li className='list-none cursor-pointer'>Real Estate</li></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/community'}><span>Community</span></Link>
            </button>

            <div className="absolute z-20 hidden w-60 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                    <Link href={'/community/list?category=auto-service'}><li className='list-none cursor-pointer'>Auto Service</li></Link>
                    <Link href={'/community/list?category=event-management'}><li className='list-none cursor-pointer'>Event Management</li></Link>
                    <Link href={'/community/list?category=human-freelancers'}><li className='list-none cursor-pointer'>Freelancers</li></Link>
                    <Link href={'/community/list?category=health-service'}><li className='list-none cursor-pointer'>Health Service</li></Link>
                    <Link href={'/community/list?category=home-maintenance'}><li className='list-none cursor-pointer'>Home Maintenancel</li></Link>
                    <Link href={'/community/list?category=movers'}><li className='list-none cursor-pointer'>Movers & Removals</li></Link>
                    <Link href={'/community/list?category=restoration-service'}><li className='list-none cursor-pointer'>Restoration & Repair</li></Link>
                    <Link href={'/community/list?category=tutor-services'}><li className='list-none cursor-pointer'>Tutor service</li></Link>
                </div>
              </div>
            </div>
          </div>


          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/used-items'}><span>Used Items</span></Link>
            </button>

            <div className="absolute z-20 hidden w-60 bg-grey-200 group-hover:block">       
              <div className="px-2 pt-2 pb-4 bg-white-500 bg-gray-50 shadow-lg">
                <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                    <Link href={'/used-items/list?category=electronics'}><li className='list-none cursor-pointer'>Electronics</li></Link>
                    <Link href={'/used-items/list?category=home-appliances'}><li className='list-none cursor-pointer'>Home Appliances</li></Link>
                    <Link href={'/used-items/list?category=clothing-accessories'}><li className='list-none cursor-pointer'>CLothing & Accessories</li></Link>
                    <Link href={'/used-items/list?category=jewerly-wacthes'}><li className='list-none cursor-pointer'>Jewelry watches</li></Link>
                    <Link href={'/used-items/list?category=music-instruments'}><li className='list-none cursor-pointer'>Music Instruments</li></Link>
                    <Link href={'/used-items/list?category=gaming'}><li className='list-none cursor-pointer'>Gaming</li></Link>
                    <Link href={'/used-items/list?category=furniture'}><li className='list-none cursor-pointer'>Furniture</li></Link>
                    <Link href={'/used-items/list?category=books'}><li className='list-none cursor-pointer'>Books</li></Link>
                    <Link href={'/used-items/list?category=tickets-vouchers'}><li className='list-none cursor-pointer'>Ticket & Vouchers</li></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex flex-row items-center w-full mt-2 text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <Link href={'/info-center'}><span>Info Center</span></Link>
            </button>

            <div className="absolute z-20 hidden w-[1000px] bg-grey-200 right-0 group-hover:block">       
              <div className="px-4 pt-2 pb-4 bg-white-500 bg-gray-50 rounded shadow-lg">
                {/* <div className="flex-column text-left text-xs space-y-4 p-2 rounded">
                    <Link href={'/used-items/list?category=electronics'}><li className='list-none cursor-pointer'>Electronics</li></Link>
                    <Link href={'/used-items/list?category=home-appliances'}><li className='list-none cursor-pointer'>Home Appliances</li></Link>
                    <Link href={'/used-items/list?category=clothing-accessories'}><li className='list-none cursor-pointer'>CLothing & Accessories</li></Link>
                    <Link href={'/used-items/list?category=jewerly-wacthes'}><li className='list-none cursor-pointer'>Jewelry watches</li></Link>
                    <Link href={'/used-items/list?category=music-instruments'}><li className='list-none cursor-pointer'>Music Instruments</li></Link>
                    <Link href={'/used-items/list?category=gaming'}><li className='list-none cursor-pointer'>Gaming</li></Link>
                    <Link href={'/used-items/list?category=furniture'}><li className='list-none cursor-pointer'>Furniture</li></Link>
                    <Link href={'/used-items/list?category=books'}><li className='list-none cursor-pointer'>Books</li></Link>
                    <Link href={'/used-items/list?category=tickets-vouchers'}><li className='list-none cursor-pointer'>Ticket & Vouchers</li></Link>
                </div> */}
                <p className='text-left text-base py-4'>Find your location to see whats nearby</p>
                <div className='flex text-left space-x-16'>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>Dubai</h6>
                    <hr/>
                    <p>Business Bay</p>
                    <p>Marina</p>
                    <p>Al Barsha</p>
                    <p>Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>Abu Dhabi</h6>
                    <hr/>
                    <p>Business Bay</p>
                    <p>Marina</p>
                    <p>Al Barsha</p>
                    <p>Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>Ajman</h6>
                    <hr/>
                    <p>Business Bay</p>
                    <p>Marina</p>
                    <p>Al Barsha</p>
                    <p>Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>Ras al Khaimah</h6>
                    <hr/>
                    <p>Business Bay</p>
                    <p>Marina</p>
                    <p>Al Barsha</p>
                    <p>Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='text-base font-bold'>Fujiran</h6>
                    <hr/>
                    <p>Business Bay</p>
                    <p>Marina</p>
                    <p>Al Barsha</p>
                    <p>Deira</p>
                  </div>
                   <div className='text-left space-y-1'>
                        <a className="inline-flex items-center px-8 py-3 text-red-500  focus:ring" href="/info-center">
                          <span className="text-sm font-medium">
                            view more
                          </span>

                          <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                    </div>
                  </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </header>

    </>
  )
}