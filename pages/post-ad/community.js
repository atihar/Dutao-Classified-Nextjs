import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import cityData from '../../lib/data.json'
import useTranslation from 'next-translate/useTranslation'

export default function PropertyForSalePost({ children }) {
    const router = useRouter()
    const { state } = useContext(Store)
    const { userInfo } = state
    const [ userEmail, setUserEmail] = useState("")
    const [parent, setParent] = useState("")
    const [imageFiles, setImages] = useState([])
    const { t, lang } = useTranslation('common')
    const [loading, setLoading] = useState(false)

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
      const onSubmit = async ({ title, category, address, description,price, city, area, postedBy, 
         video, phone}) => {

        try {
        setLoading(true)
          const { data } = await axios.post('/api/community', {
            title,
            category,
            images: imageFiles,
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
          setLoading(false)
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
        <div className="max-w-lg text-center px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10" data-aos="zoom-y-out">
        <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">{t('enterDetails')}</h1>
                <p className='text-base text-gray-400'>{t('community')}</p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4 px-4">
            {/* property images */}
            <div className="">
                <div className="mb-3 w-100">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">{t('addImage')}</label>
                    <input className="form-control
                    block
                    w-full
                    p-3
                    text-sm focus:text-[16px]
                    text-gray-100
                    bg-red-600 bg-clip-padding
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
                <input type="text" className="w-full p-4 pr-12 text-sm focus:text-[16px] rounded-lg bg-gray-50 shadow-sm focus:outline-none border-2" placeholder={t('title')}
                {...register('title',{required:true})}/>
                {errors.title && <p className='text-[9px] text-red-500 px-4'>You need to give a title</p> }
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
                        <option value="">{t('selectCategory')}</option>
                        <option value="auto-service">{t('autoService')}</option>
                        <option value="event-management">{t('eventManagement')}</option>
                        <option value="freelancers">{t('freelancers')}</option>
                        <option value="health-service">{t('healthService')}</option>
                        <option value="home-maintenance">{t('homeMaintenance')}</option>
                        <option value="health-service">{t('movers')}</option>
                        <option value="restoration-service">{t('restoration')}</option>
                        <option value="tutor-service">{t('tutorService')}</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>category is required</p> }
                </div>
                </div>
            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm focus:text-[16px] bg-gray-50 rounded-lg shadow-sm focus:outline-none border-2"
                    placeholder={t('address')}
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
              className="w-full p-3 text-sm focus:text-[16px] bg-gray-50 rounded-lg focus:outline-none border-2"
              placeholder={t('description')}
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
                    <option value="">{t('selectCity')}</option>
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('area',{required: true})}>
                        <option value="">{t('locality')}</option>
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
                        <option value="">{t('postingAs')}</option>
                        <option value="owner">{t('owner')}</option>
                        <option value="agency">{t('agency')}</option>
                    </select>
                </div>
            </div>


            <div>
                <label htmlFor="price" className="sr-only">Price</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm focus:text-[16px] bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder={t('price')}
                    {...register('price',{required:true})}/>
                    {errors.price && <p className='text-[9px] text-red-500 px-4'>price is required</p> }
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="tel"
                    className="w-full p-4 pr-12 text-sm focus:text-[16px] bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder={t('phNo')}
                    {...register('phone',{required:true})}/>
                    {errors.phone && <p className='text-[9px] text-red-600 px-4'>a contact number is required</p> }
                </div>
            </div>

            <div className="flex items-center justify-between">
            <button type="submit" className="w-full inline-flex justify-center px-5 py-3 text-sm font-medium text-white bg-red-600 rounded-lg">
             {t('createAd')}
             { !loading ?
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                :
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                }
            </button>
            </div>

        </form>

        </section>
    <Footer></Footer>
    </>
  )
}
