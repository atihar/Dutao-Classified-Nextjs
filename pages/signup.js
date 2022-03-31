import Link from 'next/link'
import Header from '../components/header';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import Footer from '../components/footer';
import React, { useContext, useEffect } from 'react';
import { Store } from '../lib/Store';
import Cookies from 'store-js';

export default function Signup() {
    const router = useRouter();
    const { redirect } = router.query;

    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;

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
          const { data } = await axios.post('/api/user/registration', {
            name,
            email,
            password,
            phone
          }
          );
        dispatch({ type: 'USER_LOGIN', payload: data });
        Cookies.set('userInfo', data);
        router.push(redirect || '/');
        } catch (err) {
            console.log(err)
        }
      };
      
     return (
      <>
      <Header></Header>
      
      {/* form */}
         <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at
            itaque nostrum!
            </p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
        <div>
            <label htmlFor="name" className="sr-only">Name</label>

            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Enter Name"
                {...register('name')}/>

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
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
                {...register('email')}/>

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
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
                <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="New password"
                {...register('password')}/>

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

            <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
                Have already a account?
                <Link className="underline" href="/login">Sign in</Link>
            </p>

            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                Create a free account
            </button>
            </div>
        </form>
        </div>
        <Footer></Footer>
      </>
  )
}


  