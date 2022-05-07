import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'

export default function settings() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [ userData, setUserData] = useState({})

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
            else {
                setUserData(userInfo)
            }
        }, []);

    const logoutClickHandler = () => {
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        router.push('/');
        };

        
  return (
      <>
        <Header></Header>
        <div className='max-w-screen-xl w-screen mx-auto sm:py-4 px-8 sm:my-4 rounded-lg shadow '>
        <h2 className="font-bold py-5"> Dutao User Dashboard</h2>
            <div className="grid sm:grid-cols-[1fr_3fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                        <Link href={'/profile'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Profile</li></Link>
                        <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Ads</li></Link>
                        <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Recruitments</li></Link>
                        <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Information</li></Link>
                        <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Searches</li></Link>
                        <Link href={'/profile/settings'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg ">Settings</li></Link>
                        <Link href={'/profile/subscription'}><li className="py-2 px-4 rounded-lg text-white active">Subscription</li></Link>
                        <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">Logout</li>
                    </ul>
                </div>
                <div>
                    <div className="py-5 w-full bg-gray-100 mt-4 rounded-lg p-5">
                        <h2 className="font-bold">Account Subscription</h2>
                        <hr/>
                        <div className="grid grid-cols-2">
                        <section className="max-w-screen-xl mx-auto p-8" id="purchaseCard">
                            <div className="block w-screen max-w-sm p-10 border sm:px-12 bg-white rounded-2xl"
                            ariaModal="true" ariaLabel="Item added to your cart" role="dialog"
                            tabindex="-1">
                            <div className="flex items-start justify-between">
                                <h2 className="flex items-center ">
                                    <span className="ml-2 text-sm"> ready with the basics </span>
                                </h2>
                                <button className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
                                type="button" aria-label="Close" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex pt-8 pb-6 items-end">
                            <h1 className="text-6xl font-bold">0 dhs</h1>
                                <div className="ml-4">
                                <h3 className="text-sm">user/year</h3>
                                </div>
                            </div>

                            <div className="pb-12 text-base">
                                <p>✓ Free ad listing</p>
                                <p>✓ Managing Ads and email notification</p>
                                <p>✓ Dutao event regular pass</p>
                            </div>
                            <div className="space-y-4 text-center">

                                <form action="/cart" method="post">
                                <button className="block w-full p-3 text-sm rounded-lg bg-red-600 text-stone-100 hover:bg-black"
                                    type="submit"> Activated by default
                                </button>
                                </form>
                            </div>
                            </div>
                        </section>        
                        <section className="max-w-screen-xl mx-auto p-8" id="purchaseCard">
                        <div
                        className="block w-screen max-w-sm p-10 border sm:px-12 bg-gray-900 text-gray-100 rounded-2xl"
                        aria-modal="true" aria-label="Item added to your cart" role="dialog" tabindex="-1" >
                        <div className="flex items-start justify-between">
                            <h2 className="flex items-center text-gray-200">
                            <span className="ml-2 text-sm"> Get started with VIP </span>
                            </h2>

                            <button
                            className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
                            type="button"
                            aria-label="Close"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            </button>
                        </div>

                        <div className="flex pt-8 pb-6 items-end">
                        <h1 className="text-6xl font-bold">50 dhs</h1>
                            <div className="ml-4">
                            <h3 className="text-sm">user/year</h3>
                            </div>
                        </div>

                        <div className="pb-12 text-base">
                            <p>✓ Special Product Access</p>
                            <p>✓ Quick offers through email</p>
                            <p>✓ Dutao event priority pass</p>
                        </div>
                        <div className="space-y-4 text-center">

                            <form action="/cart" method="post">
                            <button className="block w-full p-3 text-sm rounded-lg bg-red-600 text-stone-100 hover:bg-black"
                                type="submit">Contact us for this
                            </button>
                            </form>
                        </div>
                        </div>
                        </section> 
                            
                        </div>       
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}