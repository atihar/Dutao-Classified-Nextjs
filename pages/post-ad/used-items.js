import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';

export default function propertyForSalePost({ children }) {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ userEmail, setUserEmail] = useState("");

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
        else {
            setUserEmail(userInfo.email)
            }
        }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

   
    // handling onchange photo upload
    const imgFiles = [];
    const userData = { userInfo }
    const uploadPhoto = async (e) => {
      try{
        const myFileList = e.target.files;
        const newArr = [...myFileList]
        const v = await Promise.all(
          newArr.map(async (file) => {
                const filename = encodeURIComponent(file.name);
                const res = await fetch(`/api/upload-url?file=${filename}`);
                imgFiles.push(filename);
                const { url, fields } = await res.json();
                const formData = new FormData();

                  Object.entries({ ...fields, file }).forEach(([key, value]) => {
                    formData.append(key, value);
                  });
              
                  const upload = await fetch(url, {
                    method: 'POST',
                    body: formData,
                  });
     
                  if (upload.ok) {
                    console.log('Uploaded successfully!');
                    
                  } else {
                    console.error('Upload failed.');
                  }
            })
            )
        } catch(e){console.error(e)}
    }
        
    //   handling form on submit button
      const onSubmit = async ({ title, category, address, description,price, city, area, postedBy, 
         video, phone}) => {

        try {
          const { data } = await axios.post('/api/used-items', {
            title,
            category,
            images: imgFiles,
            address,
            description,
            city,
            area,
            postedBy,
            price,
            video,
            userEmail: userEmail,
            phone
          }
          );
          router.push('/used-items/list');
        } catch (err) {
            console.log(err.message)
        }
      };


  return (
      <>     
    <Header></Header>
        <section className='mb-20'>
        {/*starting submission form */}
        <div className="max-w-lg text-center px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10">
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">Enter details of your used items to list</h1>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            {/* property images */}
            <div className="">
                <div className="mb-3 w-100 p-3">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">Property Images</label>
                    <input className="form-control
                    block
                    w-full
                    px-2
                    py-1.5
                    text-sm
                    text-gray-400
                    bg-white bg-clip-padding
                    focus:outline-none
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-400" 
                    accept="image/png, image/jpeg"
                    type="file" id="formFileMultiple" onChange={uploadPhoto}
                    // tried button with onClick.. But its submitting the whole form. So onChange is fine for now
                    placeholder="File Images" multiple />
                </div>
            </div>
        <div>
            <label htmlFor="title" className="sr-only">Ad Title</label>

            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" placeholder="Enter Ad Title"
                {...register('title')}/>

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
                </span>
            </div>
            </div>

            {/* category */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-3
                    text-sm
                    text-gray-400
                    bg-clip-padding bg-no-repeat
                    rounded focus:outline-none
                    transition
                    ease-in-out
                    bg-gray-50
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('category')}>
                        <option defaultValue>Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="home-appliances">Home Appliances</option>
                        <option value="clothing-accessories">CLothing & Accessories</option>
                        <option value="jewelry-watches">Jewelry & Watches</option>
                        <option value="music-instruments">Music Instruments</option>
                        <option value="health-service">Movers & Removals</option>
                        <option value="gaming">Gaming</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="tickets-vouchers">Tickets & Vouchers</option>
                    </select>
                </div>
                </div>
            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none "
                    placeholder="Office Address"
                    {...register('address')}/>

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
                


            {/* property description */}
            <div>
            <label className="sr-only" htmlFor="description">Service Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none"
              placeholder="Property Description"
              rows="8"
              id="description"
              {...register('description')}
            ></textarea>
          </div>

            {/* select city */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-4
                    text-sm
                    text-gray-400
                    bg-clip-padding bg-no-repeat
                    rounded
                    transition
                    ease-in-out
                    bg-gray-50 focus:outline-none
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('city')}>
                        <option defaultValue>Select City</option>
                        <option value="dubai">Dubai</option>
                        <option value="abu-dhabi">Abu Dhabi</option>
                        <option value="ajman">Ajman</option>
                        <option value="sharjah">Sharjah</option>
                    </select>
                </div>
                </div>
           
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-4
                    text-sm
                    text-gray-400
                     bg-clip-padding bg-no-repeat
                    rounded
                    transition
                    ease-in-out
                    bg-gray-50 focus:outline-none
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('area')}>
                        <option defaultValue>Select Area</option>
                        <option value="business-bay">Business Bay</option>
                        <option value="marina">Marina</option>
                        <option value="deira">Deira</option>
                        <option value="international-city">International City</option>
                    </select>
                </div>
                </div>

            {/* select user type */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-4
                    text-sm
                    text-gray-400
                    bg-clip-padding bg-no-repeat
                    rounded
                    transition
                    ease-in-out
                    bg-gray-50 focus:outline-none
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('postedBy')}>
                        <option defaultValue>Posting as a</option>
                        <option value="owner">Owner</option>
                        <option value="agency">Agency</option>
                    </select>
                </div>
            </div>


            <div>
                <label htmlFor="price" className="sr-only">Price</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Service Fee ( if applicable )"
                    {...register('price')}/>

                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Contact Number"
                    {...register('phone')}/>
                </div>
            </div>

            <div className="flex items-center justify-between">
            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                Create a free ad
            </button>
            </div>

        </form>

        </section>
    <Footer></Footer>
    </>
  )
}
