// My Listings or ads page accessible after a user is logged in
// image deletion is yet to be implemented

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import TextTruncate from 'react-text-truncate'
import axios from "axios"
import React, { useEffect,useState, useContext, useReducer } from 'react';
import { Store } from '../../../lib/Store';
import { useRouter } from 'next/router';
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'


export default function FeatureAds() {
  const router = useRouter()
  const { state } = useContext(Store);
  const { userInfo } = state;
  const { t, lang } = useTranslation('common')
  const [budget, setBudget] = useState('')
  const [loading, setLoading] = useState(false)
  const {title, id} = router.query
  
//   console.log(router.query.price)
console.log(id)
  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
  }, []);

const handleBudget = (e) => {
    setBudget(e.target.value)
}
let x = (50 * budget);

  return (
      <>
        <Header></Header>

        <div className='sm:max-w-screen-xl sm:w-screen mx-auto py-4 px-4 my-4 rounded-lg shadow' data-aos="zoom-y-out">
        <h2 className="font-bold py-0 sm:py-5"> {t('dashboard')} </h2>
            <div className="grid gap-4">
                <div>
                    <p onClick={()=> router.back()} className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-left-circle bg-black rounded-full" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg><span className="text-lg ml-2">Go back</span></p>
                <div className="overflow-hidden max-w-screen-md mx-auto overflow-x-auto border border-gray-100 rounded">
                <h3>Promote your ad</h3>
                <table className="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-50">
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Ad Title</th>
                        <th>Ref id</th>
                        </tr>
                        
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        <tr >
                        <td className="flex px-4 py-2 font-medium text-gray-900">
                        {/* <Image
                            src={`https://dutao-public.s3.amazonaws.com/${property.images[0]}`}
                            alt="dutao image"
                            width={90}
                            height={70}
                            className="object-cover rounded-lg"
                        /> */}
                        <div className="pl-4">
                        <h5 className="text-gray-500 text-base font-light">
                            <TextTruncate
                            line={1}
                            element="span"
                            truncateText="…"
                            text={title}
                        /></h5>
                        </div>
                        
                        </td>
                        <td>{id}</td>
                        </tr>
                    </tbody>
                </table>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="mb-3">
                            <label className="text-base">For how many days you want to run the ad?</label>
                            <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                            rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                            >
                                <option value="">select one</option>
                                <option value="7">7 days</option>
                                <option value="15">15 days</option>
                                <option value="30">30 days</option>
                            </select>
                        </div>
                        <div className="mb-3 text-right">
                            <label className="text-base">Whats your budget?</label>
                            <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                            rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white" onChange={handleBudget}
                            >
                                <option value="">select one</option>
                                <option value="5000">AED 5000</option>
                                <option value="10000">AED 10000</option>
                                <option value="15000">AED 15000</option>
                            </select>
                            <p className="w-full text-base pt-5 text-gray-500">Estimated Reach : {x}</p>
                            <p className="w-full text-sm pb-5 text-gray-500">via Dutao smart network</p>
                            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg sm:w-auto">
                            <span className="text-base">&#9889; Start Campaign </span>

                            { !loading ?
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 ml-3" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            :
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            }

                            </button>  
                        </div> 
                    </div>
                </div>              
                </div>        
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}
