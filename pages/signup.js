import Link from 'next/link'
import Header from '../components/header';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import Footer from '../components/footer';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../lib/Store';

export default function Signup() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [success, setSuccess] = useState(false)
    const[loading, setLoading] = useState(false)
    const [duplicate, setDuplicate] = useState(false)


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
          const { data } = await axios.post(`/api/user/registration`, {
            name, email, password, phone })
            .then((response)=> {
              if(response.status == 203){
                console.log("duplicate email")
                setDuplicate(true)
              }
              else{
                console.log('user created')
                const oneYearFromNow = new Date();
                oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
                axios.post('/api/user/create-profile-data', {
                    name,
                    userId : data._id,
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

            <h1 className="text-2xl font-bold sm:text-6xl">Sign Up</h1>
            <p className="mt-4 text-gray-500 text-base">
            Create a free account to Dutao and get more accessible and free platform
            </p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
        <div>
            <label htmlFor="name" className="sr-only">Your Full Name</label>

            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Your Full Name"
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
                placeholder="Enter email"
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
                placeholder="New password"
                {...register('password',{
                    minLength: {
                      value: 5,
                      message: 'password needs to be more than 5' // JS only: <p>error message</p> TS only support string
                    }
                  })}/>
                  {errors.password && <p className='text-[9px] text-red-500 px-4'>a strong password is needed which should be 5 character</p> }

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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                </svg>
                </span>
            </div>
            </div>

            <div>
            <label htmlFor="confirmPassword" className="sr-only">Retype Password</label>
            <div className="relative">
                <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Confirm password"
                {...register('confirmPassword')}/>

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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                </svg>
                </span>
            </div>
            </div>

            <div>
            <label htmlFor="phone" className="sr-only">Your Mobile Number</label>
            <div className="relative">
                <input
                type="number"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Your Mobile Number"
                {...register('phone')}/>

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                </span>
            </div>
            </div>
            <p className='px-4 text-gray-500 text-sm'>By Signing up I agree to Dutao user's terms and conditions</p>

            <div className="flex items-center justify-between py-4">
            <p className="text-sm text-gray-500">
                Have already a account?
                <Link className="underline" href="/login"> Sign in</Link>
            </p>

            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                {loading ? "processing..." : "Create account" }
            </button>
            </div>
        </form>

        {/* on successful email send show success alert  */}
        { success && 
              <div className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
              role="alert">
                <strong className="text-sm font-medium"> Check your email! </strong>
                <p className='text-base'>Please activate your account within next 3 minutes</p>
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


  