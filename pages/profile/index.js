import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'

function profile() {
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
                        <Link href={'/profile'}><li className="text-white py-2 px-4 rounded-lg active">My Profile</li></Link>
                        <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Ads</li></Link>
                        <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Recruitments</li></Link>
                        <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Information</li></Link>
                        <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Searches</li></Link>
                        <Link href={'/profile/settings'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Settings</li></Link>
                        {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg ">Subscription</li></Link> */}
                        <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">Logout</li>
                    </ul>
                </div>
                <div>
                    <div className="flex space-x-1 sm:space-x-8">
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base whitespace-nowrap">My Ads</p>
                            <p className="font-bold">30</p>
                        </div>
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base">Searches</p>
                            <p className="font-bold">4</p>
                        </div>
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base">Favorites</p>
                            <p className="font-bold">10</p>
                        </div>                                          
                    </div>

                    <div className="py-5 w-full bg-gray-100 mt-4 rounded-lg p-5">
                        <h2 className="font-bold">Profile Summary</h2>
                        <hr/>
                        <p className="text-base py-2">{userData.name}</p>
                        <p className="text-base py-2 hidden lg:block">Membership Plan : Free</p>
                        <p className="text-base py-2">{userData.email}</p>                          
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}

export default profile