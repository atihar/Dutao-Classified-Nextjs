import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'

export default function Settings() {
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
            <div className="grid lg:grid-cols-[1fr_3fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                        <Link href={'/profile'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Profile</li></Link>
                        <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Ads</li></Link>
                        <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Recruitments</li></Link>
                        <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Information</li></Link>
                        <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Searches</li></Link>
                        <Link href={'/profile/settings'}><li className="py-2 px-4 rounded-lg text-white active">Settings</li></Link>
                        {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg ">Subscription</li></Link> */}
                        <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">Logout</li>
                    </ul>
                </div>
                <div>
                    <div className="py-5 w-full bg-gray-100 mt-4 rounded-lg p-5">
                        <h2 className="font-bold">Profile Settings</h2>
                        <hr/>
                        <p className="text-base"><input type="checkbox" className="checked:bg-blue-500 mr-5" />
                        Receive promotional email about events</p>            
                        <p className="text-base"><input type="checkbox" className="checked:bg-blue-500 mr-5" />
                        Receive dutao special products deals in email</p>          
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}