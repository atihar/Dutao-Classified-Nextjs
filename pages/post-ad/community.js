import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import cityData from '../../lib/data.json'

export default function propertyForSalePost({ children }) {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ userEmail, setUserEmail] = useState("");
    const [parent, setParent] = useState("");

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
          const { data } = await axios.post('/api/community', {
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
          },
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          }
          );
          router.push('/community/list');
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
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">Enter details of your new ad for the community</h1>
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
                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none border-2" placeholder="Enter Ad Title"
                {...register('title',{required:true})}/>
                {errors.title && <p className='text-[9px] text-red-500 px-4'>select a city</p> }
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('category', {required:true})}>
                        <option defaultValue>Select a Category</option>
                        <option value="auto-service">Auto Service</option>
                        <option value="event-management">Event Management</option>
                        <option value="freelancers">Freelancers</option>
                        <option value="health-service">Health Service</option>
                        <option value="home-maintenance">Home Maintenance</option>
                        <option value="health-service">Movers & Removals</option>
                        <option value="restoration-service">Restoration & Repari</option>
                        <option value="tutor-service">Tutor & Classes</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>category is required</p> }
                </div>
                </div>
            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none border-2"
                    placeholder="Home/Office Address"
                    {...register('address',{required:true})}/>
                    {errors.address && <p className='text-[9px] text-red-500 px-4'>a valid address is required</p> }
                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                </span>
            </div>
            </div>
                


            {/* property description */}
            <div>
            <label className="sr-only" htmlFor="description">Service Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none border-2"
              placeholder="Property Description"
              rows="8"
              id="description"
              {...register('description',{required:true})}
            ></textarea>
            {errors.description && <p className='text-[9px] text-red-500 px-4'>some description is required</p> }
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('city',{required:true})} onChange={(e) => setParent(e.target.value)}>
                    <option defaultValue>Select City</option>
                    {cityData.cities.map((city, i) => (
                    <option value={city.value} key={i}>{city.name}</option>
                    ))}
                    </select>
                    {errors.city && <p className='text-[9px] text-red-500 px-4'>select a city</p> }
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('area',{required: true})}>
                        <option defaultValue>Select Area</option>
                        {/* looping through data to find parent cities and showing it areas */}
                        {cityData.cities
                        .find((x) => x.name === parent)
                        ?.child_categories?.map((category) => (
                            <option value={category.value} key={category.id}>{category.name}</option>
                        ))}
                    </select>
                    {errors.area && <p className='text-[9px] text-red-500 px-4'>area is required</p> }
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
                    m-0 border-2
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
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder="Sale price/Service Fee"
                    {...register('price',{required:true})}/>
                    {errors.price && <p className='text-[9px] text-red-500 px-4'>price is required</p> }
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder="Contact Number"
                    {...register('phone',{required:true})}/>
                    {errors.phone && <p className='text-[9px] text-red-500 px-4'>a contact number is required</p> }
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
