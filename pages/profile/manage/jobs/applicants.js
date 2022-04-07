// job applicants page - recruiters view

import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { Store } from '../../../../lib/Store'
import axios from 'axios'
import Header from '../../../../components/header'
import Footer from '../../../../components/footer'
import Link from 'next/link'


export default function applicants(){
    const router = useRouter();
    const jobid = router.query.jobId
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState('')


    useEffect(()=>{
            // router.isReady is from https://github.com/vercel/next.js/discussions/12661
            if(!router.isReady) return;

            // if no user info then push the user to login page
            if(!userInfo){
                router.push('/login');       
            }
            else{
                const applications = axios.get(`/api/jobs/apply?jobId=${jobid}`)
                // manual test code
                // const applications = axios.get('/api/jobs/apply?jobId=6245adcb9a4892fa4eb15924')
                .then(function (response){
                    setData(response.data.applications)
                })
            }

    }, [router.isReady]);

    //function for sending status change request to the API
    const statusHandler = async (i, e) => {
        const JobId = jobid
        const newStatus = { 
        status : e.target.value, 
        appId : i
        }

        await axios.put(`/api/jobs/application_status/?jobId=${JobId}`, newStatus)
        .then(data => {
        //something
        router.reload({ shallow: true })
        })
        .catch(error => {
            //something
            // console.log(error)
        });
        }


    return(
        <>
        <Header></Header>
        <div className='max-w-screen-xl w-screen mx-auto py-4 px-8 my-4 rounded-lg shadow '>
        <h2 className="font-bold py-5"> Dutao User Dashboard</h2>
            <div className="grid grid-cols-[1fr_3fr] gap-4">
                <div>
                        <ul className="text-base space-y-4">
                            <Link href={'/profile'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Profile</li></Link>
                            <Link href={'/profile/manage/property-for-sale'}><li className="py-2 px-4 rounded-lg hover:bg-gray-100">My Ads</li></Link>
                            <Link href={'/profile/manage/jobs'}><li className="active text-white 100 py-2 px-4 rounded-lg">Manage Recruitments</li></Link>
                            <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Information</li></Link>
                            <li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Searches</li>
                            <li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Settings</li>
                            <li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li>
                      </ul>
                </div>
                <div>
                  <div className="">
                    <div className="text-sm text-gray-600 flex flex-inline ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                        <p className='ml-2'>You have {data && data.length} Applicants on this job</p></div>
                        <p>Go back to jobs</p>
                  </div> 

                  <hr></hr>

                    <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                    <table className="min-w-full text-sm divide-y divide-gray-200 ">
                        <thead>
                        <tr className="active rounded-lg">
                            <th className="px-4 py-2  text-left text-white whitespace-nowrap font-bold">Profile Summary</th>
                            <th className="px-4 py-2 font-bold text-left text-white whitespace-nowrap">Job Experience</th>
                            <th className="px-4 py-2 font-bold text-left text-white whitespace-nowrap">CV</th>
                            <th className="px-4 py-2 font-bold text-left text-white  whitespace-nowrap">Status</th>
                        </tr>
                        </thead>
                        {isLoading ? <div>Loading ...</div> : <></>}

                        <tbody className="divide-y divide-gray-100">
                        {data && data.map((x, i) => {
                            return( <tr  key={i}>
                                <td className="px-4 py-2 font-medium text-gray-600 ">{x && x.profileSummary}</td>
                                <td className="px-4 py-2 text-gray-500">{x && x.jobExperience}</td>
                                <td className="px-4 py-2 text-gray-500 whitespace-nowrap">
                                <a className="inline-flex items-center px-3 py-3 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white active:bg-red-500 focus:outline-none focus:ring" href={`https://dutao.s3.me-south-1.amazonaws.com/{${x && x.cv}`}>
                                    <span className="text-sm font-medium px-3">
                                        Download CV
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                    </svg>
                                    </a>
                                </td>

                                <td className="px-4 py-2 text-gray-600 ">
                                    <select value={x && x.status} onChange={(e) => statusHandler(x.applicantsUserId, e)}>
                                        <option value="">Pending</option>
                                        <option className='bg-yellow-300' value="shotlisted">Shortlisted</option>
                                        <option className='bg-red-300' value="rejected">Rejected</option>
                                        <option className='bg-green-300' value="hired">Hired</option>
                                    </select>
                                </td>
                              </tr>)                   
                        })}
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


