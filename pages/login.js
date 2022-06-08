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

export default function Login() {
    const router = useRouter();
    const { redirect } = router.query
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [stateError, setStateerror] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t, lang } = useTranslation('login')

    useEffect(() => {
        if (userInfo) {
        router.push('/');
        }
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();


    const submitHandler = async ({ email, password }) => {
        try {
          setLoading(true);
          const { data } = await axios.post('/api/user/login', {
            email,
            password,
          });
          dispatch({ type: 'USER_LOGIN', payload: data });
          Cookies.set('userInfo', data);
          router.push(redirect || '/');
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


        <div className="sm:max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8" data-aos="zoom-y-out">
        <div className="max-w-lg mx-auto">
            <div id='animation'></div>

            <h1 className="text-2xl font-bold sm:text-6xl">{t('signin')}</h1>
            <p className="mt-4 text-gray-500 text-base">
            {t('signin text')}
            </p>

        </div>
        {stateError && 
        <div className="p-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10" role="alert">
            <strong className="text-sm font-medium"> {t('invalid')} </strong>
            </div> }
        

        <form onSubmit={handleSubmit(submitHandler)} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
            <label htmlFor="email" className="sr-only">{t('email')}</label>

            <div className="relative">
                <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('pemail')}
                {...register('email')}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                </svg>
                </span>
            </div>
            </div>

            <div>
            <label htmlFor="password" className="sr-only">{t('pwd')}</label>
            <div className="relative">
                <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('ppwd')}
                {...register('password')}
                />
            </div>
            </div>

            <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
                {t('noaccount')}
                <Link className="underline" href="/signup">{t('signup')}</Link>
            </p>

            <button type="submit" className="transition duration-700 ease-in-out inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg"
             >
                 <p>{loading ? t('load') : t('signin') }</p>

            </button>
            </div>
            <p className="text-sm text-gray-500">
                <Link className="underline" href="/reset-password">{t('forgotPassword')}</Link>
            </p>
        </form>
        </div>
        <Footer></Footer>
      </>
  )
}