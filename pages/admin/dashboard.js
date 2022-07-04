import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from 'next/link'
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'
import db from '../../lib/dbConnect';
import User from '../../models/user';
import Community from '../../models/community'
import PropertySale from '../../models/propertyForSale'
import PropertyRent from '../../models/propertyForRent'
import Jobs from '../../models/jobs'
import UsedItems from '../../models/usedItems'
import Motors from '../../models/motors'
import PlaceItems from '../../models/place'

export default function AdminDashboard(props) {
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

    //logout click handler
    const logoutClickHandler = () => {
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        router.push('/');
        };

  return (
    <>
    <Header></Header>
    <div className='max-w-screen-2xl mx-auto sm:py-4 px-8 sm:my-4 rounded-lg shadow bg-gray-100 '>
    <h2 className="font-bold py-5"> Dutao Management Dashboard</h2>
        <div className="grid sm:grid-cols-[1fr_3fr] gap-4">
            <div>
                <ul className="text-base space-y-4">
                    <Link href={'#'}><li className="text-white py-2 px-4 rounded-lg active">Overview</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Ads</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Users</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Trending Searches</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Global Settings</li></Link>
                    <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">Logout</li>
                </ul>
            </div>
            <div>
                <div className="flex space-x-1 sm:space-x-8">
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base whitespace-nowrap">Total ads</p>
                        <p className="font-bold">30</p>
                    </div>
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base">Total Users</p>
                        <p className="font-bold">{props.usersNumber}</p>
                    </div>
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base">Property(Sale)</p>
                        <p className="font-bold">{props.propertySaleNumber}</p>
                    </div>                                          
                </div>

                <div className="flex space-x-1 sm:space-x-8 mt-5">
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base whitespace-nowrap">Property(rent)</p>
                        <p className="font-bold">{props.propertyRentNumber}</p>
                    </div>
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base">Total Community</p>
                        <p className="font-bold">{props.communityNumber}</p>
                    </div>
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base">Total Used Items</p>
                        <p className="font-bold">{props.usedItemsNumber}</p>
                    </div>                                          
                </div>

                <div className="flex space-x-1 sm:space-x-8 mt-5">
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base whitespace-nowrap">Motors</p>
                        <p className="font-bold">{props.motorsNumber}</p>
                    </div>
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        <p className="text-base">Total Places</p>
                        <p className="font-bold">{props.placeNumbers}</p>
                    </div>
                    <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                        {/* <p className="text-base">Total Used Items</p>
                        <p className="font-bold">{props.usedItemsNumber}</p> */}
                    </div>                                          
                </div>
            </div>
            
        </div>
    </div>
    <Footer></Footer>
  </>
  )
}


export async function getServerSideProps({ query }) {
    await db.connect();
    const user = await User.find().lean();
    const community = await Community.find().lean();
    const propertySale = await PropertySale.find().lean();
    const propertyRent = await PropertyRent.find().lean();
    const usedItems = await UsedItems.find().lean();
    const jobs = await Jobs.find().lean();
    const motors = await Motors.find().lean();
    const places = await PlaceItems.find().lean();
    await db.disconnect();
    
    const usersNumber = user.length
    const communityNumber = community.length
    const propertySaleNumber = propertySale.length
    const propertyRentNumber = propertyRent.length
    const usedItemsNumber = usedItems.length
    const jobsNumber = jobs.length
    const motorsNumber = motors.length
    const placeNumbers = places.length
  
    return {
      props: {
        usersNumber,
        communityNumber,
        propertySaleNumber,
        propertyRentNumber,
        usedItemsNumber,
        jobsNumber,
        motorsNumber,
        placeNumbers
      },
    };
  }