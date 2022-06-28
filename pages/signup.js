import Link from 'next/link'
import Header from '../components/header';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import Footer from '../components/footer';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../lib/Store';
import useTranslation from 'next-translate/useTranslation'

export default function Signup() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [success, setSuccess] = useState(false)
    const[loading, setLoading] = useState(false)
    const [duplicate, setDuplicate] = useState(false)
    const { t, lang } = useTranslation('common')


    useEffect(() => {
      if (userInfo) {
        router.push('/');
      }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    //   const onSubmit = (data) => console.log(data);
      const onSubmit = async ({ name, email, password, confirmPassword, phone }) => {
        if (password !== confirmPassword) {
            alert("try similar password");
          return;
        }
        try {
          //waiting for data for being signed in and a jwt tokenized data will be set as {data} from response of the API
          setLoading(true)
           await axios.post(`/api/user/registration`, {
            name, email, password, phone })
            .then((response)=> {
              const userid = response.data._id
              // console.log(response)
              if(response.status == 203){
                // console.log("duplicate email")
                setDuplicate(true)
              }
              else{
                // console.log("user id is" + userid)
                // console.log('user created')
                const oneYearFromNow = new Date();
                oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
                axios.post('/api/user/create-profile-data', {
                    name,
                    userId : userid,
                    subscription: 1,// 0-non. 1-basic, 2-standard, 3-premium (this will be set by the payment)
                    subscriptionDate: Date.now(),
                    subscriptionExpr: oneYearFromNow
                  });
                  setSuccess(true)
              }
            })    
            setLoading(false)
          // router.push(redirect || '/');
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
      };
      
     return (
      <>
      <Header></Header>
      
      {/* form */}
         <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8" data-aos="zoom-y-out">
        <div className="max-w-lg mx-auto">

            <h1 className="text-2xl font-bold sm:text-6xl">{t('signup')}</h1>
            <p className="mt-4 text-gray-500 text-base">
            {t('createFreeAcc')}
            </p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
        <div>
            <label htmlFor="name" className="sr-only">Your Full Name</label>

            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder={t('yourname')}
                {...register('name')}/>

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
                </span>
            </div>
            </div>
            <div>
            <label htmlFor="email" className="sr-only"></label>

            <div className="relative">
                <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('yourEmail')}
                {...register("email", {
                    required: 'Email Needs'
                  })}/>
                  {errors.email && <p className='text-[9px] text-red-500 px-4'>a valid email is required</p> }

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 
                    008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
                </span>
            </div>
            </div>

            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
                <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('newPass')}
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
                placeholder={t('confirmPass')}
                {...register('confirmPassword')}/>

            </div>
            </div>

            <div>
            <label htmlFor="phone" className="sr-only">Your Mobile Number</label>
            <div className="relative">
                <input
                type="tel"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder={t('phNo')}
                {...register('phone')}/>

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                </span>
            </div>
            </div>
            <p className='px-4 text-gray-500 text-sm'>{t('agreeToTerms')}</p>

            <div className="flex items-center justify-between py-4">
            <p className="text-sm text-gray-500">
                {t('haveAcc')}
                <a className="underline" href="/login"> {t('signin')}</a>
            </p>

            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                {loading ? t('load') : t('createAcc')}
            </button>
            </div>
        </form>

        {/* on successful email send show success alert  */}
        { success && 
              <div className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
              role="alert">
                <strong className="text-sm font-medium"> {t('pleaseConfirm')} </strong>
                <p className='text-base'>{t('activateYourAcc')}</p>
              </div>
            }
            {duplicate && 
                <div className="p-4 text-gray-500 border rounded border-green-900/10 bg-yellow-50"
                role="alert">
                  <strong className="text-sm font-medium"> Email is already registered </strong>
                  <p className='text-base'>Please try login to your account</p>
                </div>
              }
        </div>
        <Footer></Footer>
      </>
  )
}


  