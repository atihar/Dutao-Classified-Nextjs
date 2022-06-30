//this page will expect a token that will come from user verification email
import Link from 'next/link'
import Header from '../../components/header';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import Footer from '../../components/footer';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../lib/Store';
import useTranslation from 'next-translate/useTranslation'

export default function ChangePassword() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const[loading, setLoading] = useState(false)
    const { token } = router.query
    const [message, setMessage] = useState(false)
    const { t, lang } = useTranslation('common')


    useEffect(() => {
      if (userInfo) {
        router.push('/');
    }}, [userInfo, router]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    //   const onSubmit = (data) => console.log(data);
      const onSubmit = async ({ password, confirmPassword }) => {
        if (password !== confirmPassword) {
            alert("try similar password");
          return;
        }
        setLoading(true)
        try {
          //waiting for data for being signed in and a jwt tokenized data will be set as {data} from response of the API
         await axios.put(`/api/user/change-password/?token=${token}`, 
         { password, confirmPassword })
         .then((response)=> {
           console.log(response)
            setLoading(false)
            router.push('/login')
         })
            
       
          // router.push(redirect || '/');
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
        setMessage(true)
      };
      
      
     return (
      <>
      <Header></Header>
      
      {/* form */}
         <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">

            <h1 className="text-2xl font-bold sm:text-6xl">{t('changePassword')}</h1>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">

            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
                <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('enterNewP')}
                {...register('password',{
                    minLength: {
                      value: 5,
                      message: 'password needs to be more than 5' // JS only: <p>error message</p> TS only support string
                    }
                  })}/>
                  {errors.password && <p className='text-[9px] text-red-500 px-4'>a strong password is needed which should be 5 character</p> }
            </div>
            </div>

            <div>
            <label htmlFor="confirmPassword" className="sr-only">Retype Password</label>
            <div className="relative">
                <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('confirmP')}
                {...register('confirmPassword')}/>
            </div>
            </div>

            <div className="flex items-center justify-between py-4">
            <p className="text-sm text-gray-500">
                {t('facingIssue')}
                <Link className="underline" href={'/contact'}> {t('contactUs')}</Link>
            </p>

            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                {loading ? t('load') : t('updateProfile') }
            </button>
            </div>
        </form>

        {/* on successful email send show success alert  */}
        { message && 
              <div className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
              role="alert">
                <strong className="text-sm font-medium"> {t('passChanged')} </strong>
                <p className='text-base'>{t('tryLogin')}</p>
              </div>
            }
        </div>
        <Footer></Footer>
      </>
  )
}


  