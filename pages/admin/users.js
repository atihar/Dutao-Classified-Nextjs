import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from 'next/link'
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import Cookies from 'store-js';
import React, { useContext, useEffect, useState } from 'react'
import db from '../../lib/dbConnect';
import axios from "axios"
import DataTable from 'react-data-table-component';


export default function AdminUserDashboard(props) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [ userData, setUserData] = useState({})
    const [usersD, setUsersD] = useState({})
    const [pending, setPending] = useState(true)

    const columns = [
        {
            name: 'Ref ID',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name of user',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
    ];
    
    const data = Object.values(usersD)
    console.log(usersD)

    useEffect(() => {
        if(!userInfo){
            router.push('/login')
        }
        else if (!userInfo.isAdmin) {
            router.push('/profile');
            }
        else {
            setUserData(userInfo)
            fetchUserHandler();
            }
        }, []);

    
    //logout click handler
    const logoutClickHandler = () => {
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        router.push('/');
        };

    //fetch user handler
    const fetchUserHandler = async () => {
        await axios.get('/api/user/')
        .then((response) =>{
        setUsersD(response.data)
        setPending(false)
        })
    };


  return (
    <>
    <Header></Header>
    <div className='max-w-screen-xl w-full mx-auto sm:py-4 px-8 sm:my-4 rounded-lg shadow bg-gray-100 '>
    <h2 className="font-bold py-5"> Dutao Admin Dashboard</h2>
        <div className="grid sm:grid-cols-[1fr_4fr] gap-4">
            <div>
                <ul className="text-base space-y-4">
                    <Link href={'/admin/dashboard'}><li className="py-2 px-4 rounded-lg cursor-pointer">Overview</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Manage Ads</li></Link>
                    <Link href={'#'}><li className="py-2 px-4 rounded-lg cursor-pointer text-white active">View Users</li></Link>
                    <Link href={'/admin/add-place'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Add Place</li></Link>
                    <Link href={'/admin/promotions'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Promotion Requests</li></Link>
                    <Link href={'/admin/contacts'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Contact Submissions</li></Link>
                    <Link href={'/admin/reports'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Fraud Reports</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Trending Searches</li></Link>
                    <Link href={'#'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">Global Settings</li></Link>
                    <li onClick={logoutClickHandler} className="hover:bg-gray-100 py-2 px-4 rounded-lg">Logout</li>
                </ul>
            </div>
            <div>
            <DataTable columns={columns} data={data} progressPending={pending} 
            selectableRows
            pagination
            />
            </div>
            
        </div>
    </div>
    <Footer></Footer>
  </>
  )
}
