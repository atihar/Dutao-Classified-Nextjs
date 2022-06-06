import Header from '../components/header'
import Link from 'next/link'; 
import Footer from '../components/footer';
import axios from 'axios';
import { Store } from '../lib/Store';
import Cookies from 'store-js';
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation'

export default function ResetPassword() {
    const router = useRouter();
    const { redirect } = router.query
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [stateError, setStateerror] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t, lang } = useTranslation('common')
    const [message, setMessage] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();


    const submitHandler = async ({ email }) => {
        try {
          setLoading(true);
          const { data } = await axios.post('/api/user/reset-password', {
            email
          });
          setMessage(true)
          setLoading(false)
        } catch (err) {
        //   console.log(err.message)
          setStateerror(true)
          setLoading(false)
        }
      };

  return (
      <>
      <Header></Header>
      
      {/* form */}
        <div className="sm:max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div id='animation'></div>
                <h1 className="text-2xl font-bold sm:text-6xl">{t('resetPassword')}</h1>
        </div>
        {stateError && 
        <div className="p-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10" role="alert">
            <strong className="text-sm font-medium"> {t('invalid')} </strong>
            </div> }
        

        <form onSubmit={handleSubmit(submitHandler)} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
                <input type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('enterEmail')}{...register('email')}/>
            </div>
            </div>

            <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {t('noaccount')}
                <a className="underline" href="/signup"> {t('signup')}</a>
            </p>

            <button type="submit" className="transition duration-700 ease-in-out inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                 <p>{loading ?  t('load') : t('sendReset') }</p>
            </button>
            </div>
            { message && 
              <div className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
              role="alert">
                <strong className="text-sm font-medium"> {t('checkEmail')} </strong>
                <p className='text-base'>{t('pleaseConfirm')}</p>
              </div>
            }
        </form>
        </div>
        <Footer></Footer>
      </>
  )
}