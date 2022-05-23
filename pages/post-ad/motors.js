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
    const [imageFiles, setImages] = useState([]);

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
                const filename = Date.now()+encodeURIComponent(file.name);
                const res = await fetch(`/api/upload-url?file=${filename}`);
                //setting the filenames to the local array before setting to state because the filenames are spreading
                //into words
                imgFiles.push(filename);
                //solving the spread array problem using state to send the filenames in the db
                setImages(imgFiles)
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
      const onSubmit = async ({ title, category, address, description,price, city, area, listedBy, 
        kilometers, warranty, color, marketYear, doors, bodyCondition, mechanicalCondition, sellerType,
        bodyType, cylinders, transmissionType, regionalSpec, horsePower, fuelType, steeringSide,  video}) => {

        try {
          const { data } = await axios.post('/api/motor', {
            title,
            category,
            images: imageFiles,
            video,
            address,
            description,
            city,
            area,
            listedBy,
            price,
            kilometers,
            warranty,
            color,
            marketYear,
            doors,
            bodyCondition,
            mechanicalCondition,
            sellerType,
            bodyType,
            cylinders,
            transmissionType,
            regionalSpec,
            horsePower,
            fuelType,
            steeringSide,
            userEmail: userEmail,
            phone
          },
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          }
          );
          router.push('/motors/list');
        } catch (err) {
            console.log(err)
        }
        // console.log({errors})
      };


  return (
      <>     
    <Header></Header>
        <section className="mb-20">
        {/*starting submission form */}
        <div className="max-w-lg text-center px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10">
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">Enter details of your motor for ad</h1>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            {/* property images */}
            <div className="">
                <div className="mb-3 w-100 p-3">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">Upload Motor Images</label>
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
                    accept="image/png, image/jpeg, image/jpg"
                    type="file" id="formFileMultiple" onChange={uploadPhoto}
                    // tried button with onClick.. But its submitting the whole form. So onChange is fine for now
                    placeholder="File Images" multiple />
                </div>
            </div>
        <div>
            <label htmlFor="title" className="sr-only">Ad Title</label>

            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" placeholder="Enter Ad Title"
                {...register('title',{required:true})}/>
                {errors.title && <p className='text-[9px] text-red-500 px-4'>ad title is required</p> }
            </div>
            </div>

            {/* Motors category */}
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
                    {...register('category',{required:true})}>
                        <option defaultValue>Select Category</option>
                        <option value="motorcycle">Motorcycles</option>
                        <option value="accessories">Parts & Accessories</option>
                        <option value="heavy-vehicles">Heavy Vehicles</option>
                        <option value="boats">Boats</option>
                        <option value="number-plates">Number Plates</option>
                        <option value="export-car">Export Cars</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>select a category</p> }
                </div>
            </div>

            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none "
                    placeholder="Garage Address"
                    {...register('address',{required:true})}/>
                    {errors.address && <p className='text-[9px] text-red-500 px-4'>your address is required</p> }

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
                <label className="sr-only" htmlFor="description">Ad Description</label>
                <textarea
                className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none"
                placeholder="Ad Description"
                rows="8"
                id="description"
                {...register('description',{required:true})}
            ></textarea>
            {errors.description && <p className='text-[9px] text-red-500 px-4'>some details are missing</p> }
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
                    {...register('city',{required:true})} onChange={(e) => setParent(e.target.value)}>
                    <option defaultValue>Select City</option>
                    {cityData.cities.map((city) => (
                    <option value={city.value} key={city.id}>{city.name}</option>
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
                    m-0
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
                    {errors.area && <p className='text-[9px] text-red-500 px-4'>select a area</p> }
                </div>
                </div>

            {/* select user type */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('sellerType')}>
                        <option defaultValue>Posting as a</option>
                        <option value="owner">Owner</option>
                        <option value="agency">Seller Agent</option>
                    </select>
                </div>
            </div>


            <div>
            <label htmlFor="kilometers" className="sr-only">Kilometers</label>
            <div className="relative">
                <input
                type="number"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="kilometers onroad"
                {...register('kilometers')}/>
            </div>
            </div>

            <div>
            <label htmlFor="warranty" className="sr-only">Warranty</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="Warranty in days"
                {...register('warranty')}/>
            </div>
            </div>

            <div>
            <label htmlFor="color" className="sr-only">Color</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="Color"
                {...register('color')}/>
            </div>
            </div>

            <div>
            <label htmlFor="marketYear" className="sr-only">Released Year</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="Released Year"
                {...register('marketYear',{required:true})}/>
                {errors.marketYear && <p className='text-[9px] text-red-500 px-4'>select a released year</p> }
            </div>
            </div>

            <div>
                <label htmlFor="doors" className="sr-only">Doors</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Doors"
                    {...register('doors')}/>
                </div>
            </div>

            <div>
                <label htmlFor="doors" className="sr-only">cylinders</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Number of Cylinders (optional)"
                    {...register('cylinders')}/>
                </div>
            </div>


            <div>
                <label htmlFor="price" className="sr-only">Price</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Sale Price in AED"
                    {...register('price',{required:true})}/>
                    {errors.price && <p className='text-[9px] text-red-500 px-4'>sale price is required</p> }

                </div>
            </div>


            <div>
            <label htmlFor="transmissionType" className="sr-only">transmissionType</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="Engine Transmission Type"
                {...register('transmissionType')}/>
            </div>
            </div>
            
            <div>
                <label htmlFor="video" className="sr-only">Video</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Youtube/Vimeo Video URL"
                    {...register('video')}/>
                </div>
            </div>

            <p className=' p-4 font-bold text-sm text-gray-400'>We need a few more details for processing verification</p>


            {/* listing as */}

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('bodyType')}>
                        <option defaultValue>Body Type</option>
                        <option value="">Not Applicable</option>
                        <option value="sedan">Sedan</option>
                        <option value="long body">Long Body</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>
            </div>

            <div>
            <label htmlFor="regionalSpec" className="sr-only">Regional Spec</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="Regional Specification"
                {...register('regionalSpec')}/>
            </div>
            </div>

            <div>
            <label htmlFor="horsePower" className="sr-only">Horse Power</label>
            <div className="relative">
                <input
                type="number"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder="Engine Horse Power"
                {...register('horsePower')}/>
            </div>
            </div>

            <div>
                <label htmlFor="fuelType" className="sr-only">Fuel Type</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="What is the engine fuel type"
                    {...register('fuelType')}/>
                </div>
            </div>

            <div>
                <label htmlFor="steeringSide" className="sr-only">Steering Space</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Steering Space"
                    {...register('steeringSide')}/>
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Contact Number"
                    {...register('phone', {required:true})}/>
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
