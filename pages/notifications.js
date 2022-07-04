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

export default function Notifications() {
    const router = useRouter();
    const { redirect } = router.query
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [stateError, setStateerror] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t, lang } = useTranslation('login')

    useEffect(() => {
        if (!userInfo) {
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
        <section className='max-w-screen-lg p-6 mx-auto'>
            <h3 className='text-medium text-left font-bold'>Notifications</h3>
            <div className='mt-2 border-2 bg-gray-50 min-w-max min-h-[400px]'>
                <p className='text-gray-400 text-sm'>No notifications</p>
                </div>
            </section>
        <Footer></Footer>
      </>
  )
}