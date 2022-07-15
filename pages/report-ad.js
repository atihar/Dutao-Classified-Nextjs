import Header from '../components/header'
import Link from 'next/link'; 
import Footer from '../components/footer';
import axios from 'axios';
import { Store } from '../lib/Store';
import Cookies from 'store-js';
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function ReportAd() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [stateError, setStateerror] = useState(false)
  
  
  useEffect(() => {
      if (!userInfo) {
      router.push('/');
      }
  }, []);

    // react hook form initialization    
    const { register, handleSubmit, formState: { errors } } = useForm();

    //   handling form on submit button
      const onSubmit = async ({ adId, category, report }) => {

        try {
          const { data } = await axios.post(`/api/report`, {
            adId,
            name : userInfo.name,
            category,
            report,
          });
          
        //   router.push('/profile');
        } catch (err) {
            console.log(err)
        }
        console.log("data sent")
      };


  return (
    <>
    <Header></Header>
    
    {/* form */}

      <div className="sm:max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
          <div id='animation'></div>

          <h1 className="text-2xl font-bold sm:text-3xl text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
          </svg> Flag/Report Ad</h1>
          <p className="mt-4 text-gray-500 text-base">
          IS there any issue with this listing? write to us mentioning that
          </p>

      </div>
      {stateError && <p className='bg-red-100 text-sm'>Something went wrong! Try again</p> }
      

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
      <div>
      <label htmlFor="adId" className="sr-only">Ad link</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder="Paste the full report URl"
                    {...register('adId')}/>
                </div>
            </div>


        {/* report category */}
          <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full
                    p-3 text-sm text-gray-400 bg-clip-padding bg-no-repeat rounded focus:outline-none
                    transition ease-in-out bg-gray-50 m-0 border-2 focus:text-gray-500 focus:bg-white"
                    {...register('category', {required:true})}>
                        <option defaultValue>Report Type</option>
                        <option value="spam">Spam</option>
                        <option value="duplicate-ad">Duplicate ad</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>select a report type</p> }
                </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="description">Property Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg border-2 focus:outline-none"
              placeholder="write something about what's wrong with the ad"
              rows="8"
              id="description"
              {...register('report')}
            ></textarea>
          </div>

          <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg"
           >
             submit report
          </button>
      </form>
      </div>
      <Footer></Footer>
    </>
  )
}
