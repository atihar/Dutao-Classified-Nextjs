import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import cityData from '../../lib/data.json'
import Link from 'next/link'

const DynamicMap = dynamic(() => import("../../components/map-add"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

export default function AddPlace() {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ userEmail, setUserEmail] = useState("");
    const [parent, setParent] = useState("");
    const [locP, setLPin] = useState({})

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
        else if(userInfo && userInfo.isAdmin){
            setUserEmail(userInfo.email)
        }
        else {
            router.push('/profile');
            }
        }, []);

        
        
    //form starting
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
        
        //map data from child component DynamicData
    const passData = (data) => {
        setLPin(data)
    }
        
        // handling onchange photo upload
        const imgFiles = [];
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
      const onSubmit = async ({ title, category, address, description, city, area,
         video, phone, website, latitude, longitude }) => {

        try {
          const { data } = await axios.post('/api/admin/places', {
            title,
            category,
            images: imgFiles,
            video,
            description,
            address,
            website,
            phone,
            city,
            area,
            latitude,
            longitude,
          },{
            headers: { authorization: `Bearer ${userInfo.token}` }
          }
          );
          router.push('/');
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
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">Enter details of your new local place to add to the info center</h1>
        <Link href={'/admin/dashboard'}><p className='text-base py-1 px-3 bg-gray-100 cursor-pointer'>Go back to dashboard</p></Link>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            {/* property images */}
            <div className="">
                <div className="mb-3 w-100 p-3">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">Cover Images</label>
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
                <input type="text" className="w-full border-2 p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" 
                placeholder="Place/Business title"
                {...register('title')}/>
            </div>
            </div>

            {/* category */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-3
                    text-sm border-2
                    text-gray-400
                    bg-clip-padding bg-no-repeat
                    rounded focus:outline-none
                    transition
                    ease-in-out
                    bg-gray-50
                    m-0
                    focus:text-gray-500 focus:bg-white"
                        {...register('category')}>
                        <option value="">Category</option>
                        <option value="business">Business</option>
                        <option value="hospital">Hospital</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="bank">Bank</option>
                        <option value="food">Food</option>
                        <option value="bar">Bar</option>
                        <option value="shopping">Shopping Mall</option>
                        <option value="events">Events</option>
                        <option value="super-market">Super Market</option>
                        <option value="hotels">Hotels</option>
                        <option value="school">School</option>
                        <option value="university">University</option>
                    </select>
                </div>
                </div>
            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 border-2 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none "
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
                


            {/* place description */}
            <div>
            <label className="sr-only" htmlFor="description">Service Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg border-2 focus:outline-none"
              placeholder="Business description"
              rows="8"
              id="place description"
              {...register('description')}
            ></textarea>
          </div>

            {/* select city */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-4 border-2
                    text-sm
                    text-gray-400
                    bg-clip-padding bg-no-repeat
                    rounded
                    transition
                    ease-in-out
                    bg-gray-50 focus:outline-none
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('city')} onChange={(e) => setParent(e.target.value)}>
                        <option defaultValue>Select City</option>
                        {cityData.cities.map((city) => (
                        <option value={city.value} key={city.id}>{city.name}</option>
                        ))}
                    </select>
                </div>
                </div>
           
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-4 border-2
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
                        <option value="">Select Area</option>
                        {/* looping through data to find parent cities and showing it areas */}
                        {cityData.cities
                        .find((x) => x.name === parent)
                        ?.child_categories?.map((category) => (
                            <option value={category.value} key={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                </div>

            {/* select user type */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-4 border-2
                    text-sm
                    text-gray-400
                    bg-clip-padding bg-no-repeat
                    rounded
                    transition
                    ease-in-out
                    bg-gray-50 focus:outline-none
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('listedBy')}>
                        <option defaultValue>Posting as a</option>
                        <option value="dutao">Dutao</option>
                        <option value="agency">Agency</option>
                    </select>
                </div>
            </div>


            <div>
                <label htmlFor="price" className="sr-only">Website</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 border-2 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Website URL"
                    {...register('website')}/>
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="tel"
                    className="w-full p-4 pr-12 text-sm border-2 bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Business Contact Number"
                    {...register('phone')}/>
                </div>
            </div>
            <DynamicMap passdata={passData}/>

            <div>
                <label htmlFor="latitude" className="sr-only">Latitude</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Enter longitude"
                    {...register('latitude')}/>
                </div>
            </div>

            <div>
                <label htmlFor="longitude" className="sr-only">Longitude</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Enter longitude"
                    {...register('longitude')}/>
                </div>
            </div>

            <div className="flex items-center justify-between">
            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                Create a new local place
            </button>
            </div>

        </form>

        </section>
    <Footer></Footer>
    </>
  )
}
