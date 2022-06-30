import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import cityData from '../../lib/data.json'
import useTranslation from 'next-translate/useTranslation'
import moment from 'moment';

export default function MotorPost({ children }) {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ userEmail, setUserEmail] = useState("")
    const [ bizName, setBizName ] = useState("")
    const [ bizLogo, setBizLogo ] = useState("")
    const [parent, setParent] = useState("");
    const [imageFiles, setImages] = useState([]);
    const { t, lang } = useTranslation('common')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
        else {
            setUserEmail(userInfo.email)
            bizData()
        }}, []);

    
    // fetching business data is existed and subscription is on
    const bizData = async() => {
        const { data } = await axios.get(`/api/user/biz-data/?id=${userInfo._id}`)
        
        //checking business account is activated and for which type
        if(data.subscription == 2 && data.businessCategory == "car" && moment(data.subscriptionExpr) > moment()) {
            setBizName(data.businessName);
            setBizLogo(data.businessLogo)
        }      
    }

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
        bodyType, cylinders, transmissionType, regionalSpec, horsePower, fuelType, steeringSide,  video, phone}) => {

        try {
            setLoading(true)
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
            phone,
            businessName : bizName,
            businessLogo : bizLogo
          },
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          }
          );
          setLoading(false)
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
        <div className="max-w-lg text-center px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10" data-aos="zoom-y-out">
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">{t('enterDetails')}</h1>
            <p className='text-base text-gray-400'>{t('motors')}</p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4 px-4">
            {/* property images */}
            <div>
                <div className="mb-3 w-100">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">{t('addImage')}</label>
                    <input className="form-control
                    block
                    w-full
                    p-3
                    text-sm bg-red-600
                    text-gray-100
                    bg-clip-padding
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
                <input type="text" className="w-full border-2 p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" placeholder={t('title')}
                {...register('title',{required:true})}/>
                {errors.title && <p className='text-[9px] text-red-500 px-4'>ad title is required</p> }
            </div>
            </div>

            {/* Motors category */}
            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block
                    w-full
                    p-3 border-2
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
                        <option value="">{t('selectCategory')}</option>
                        <option value="cars">{t('cars')}</option>
                        <option value="motorcycle">{t('motorcycle')}</option>
                        <option value="heavy-vehicles">{t('heavyVehicles')}</option>
                        <option value="boats">{t('boats')}</option>
                        <option value="accessories">{t('accessories')}</option>
                        <option value="number-plates">{t('numberPlates')}</option>
                        <option value="export-car">{t('exportCars')}</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>select a category</p> }
                </div>
            </div>

            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none "
                    placeholder={t('address')}
                    {...register('address',{required:true})}/>
                    {errors.address && <p className='text-[9px] text-red-500 px-4'>your address is required</p> }
            </div>
            </div>

            {/* property description */}
            <div>
                <label className="sr-only" htmlFor="description">Ad Description</label>
                <textarea
                className="w-full border-2 p-3 text-sm bg-gray-50 rounded-lg focus:outline-none"
                placeholder={t('description')}
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
                    {...register('area',{required: true})}>
                        <option value="">{t('locality')}</option>
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
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('sellerType')}>
                        <option value="">{t('postingAs')}</option>
                        <option value="owner">{t('owner')}</option>
                        <option value="agency">{t('agent')}</option>
                    </select>
                </div>
            </div>


            <div>
            <label htmlFor="kilometers" className="sr-only">Kilometers</label>
            <div className="relative">
                <input
                type="number"
                className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('kmOnRoad')}
                {...register('kilometers')}/>
            </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('warranty')}>
                        <option value="">{t('warrantyDays')}</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="not-applicable">Does not apply</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('color')}>
                        <option value="">{t('color')}</option>
                        <option value="blue">Blue</option>
                        <option value="brown">Brown</option>
                        <option value="black">Black</option>
                        <option value="gray">Gray</option>
                        <option value="gold">Gold</option>
                        <option value="orange">Orange</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="red">Red</option>
                        <option value="silver">Silver</option>
                        <option value="tan">Tan</option>
                        <option value="teal">Teal</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>


            <div>
            <label htmlFor="marketYear" className="sr-only">Released Year</label>
            <div className="relative">
                <input
                type="text"
                className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('manufacturingYear')}
                {...register('marketYear',{required:true})}/>
                {errors.marketYear && <p className='text-[9px] text-red-500 px-4'>select a released year</p> }
            </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('doors')}>
                        <option value="">Doors</option>
                        <option value="2">2 door </option>
                        <option value="3">3 door</option>
                        <option value="4">4 door</option>
                        <option value="5">5+ door</option>
                    </select>
                </div>
            </div>

            {/* <div>
                <label htmlFor="doors" className="sr-only">cylinders</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('cylinder')}
                    {...register('cylinders')}/>
                </div>
            </div> */}


            <div>
                <label htmlFor="price" className="sr-only">Price</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('price')}
                    {...register('price',{required:true})}/>
                    {errors.price && <p className='text-[9px] text-red-500 px-4'>sale price is required</p> }

                </div>
            </div>


            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('transmissionType')}>
                        <option value="">{t('transmission')}</option>
                        <option value="manual">Manual Transmission </option>
                        <option value="auto">Auto Transmission</option>
                        <option value="not-applicable">Does not apply</option>
                    </select>
                </div>
            </div>
            
            <div>
                <label htmlFor="video" className="sr-only">Video</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('videoLink')}
                    {...register('video')}/>
                </div>
            </div>

            <p className=' p-4 font-bold text-sm text-gray-400'>{t('weNeedAFewDetails')}</p>


            {/* listing as */}

            {/* <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('bodyType')}>
                        <option value="">{t('body')}</option>
                        <option value="sedan">{t('sedan')}</option>
                        <option value="sports">{t('sports')}</option>
                    </select>
                </div>
            </div> */}

            {/* <div>
            <label htmlFor="regionalSpec" className="sr-only">Regional Spec</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('regional-specs')}
                {...register('regionalSpec')}/>
            </div>
            </div> */}

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('regionalSpec')}>
                        <option value="">{t('regional-specs')}</option>
                        <option value="gcc">GCC Specs</option>
                        <option value="north-american">North American Specs</option>
                        <option value="japanese">Japanese Specs</option>
                        <option value="european">European Specs</option>
                        <option value="others">Others</option>
                    </select>
                </div>
            </div>

            <div>
            <label htmlFor="horsePower" className="sr-only">Horse Power</label>
            <div className="relative">
                <input
                type="number"
                className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('horse')}
                {...register('horsePower')}/>
            </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('fuelType')}>
                        <option value="">{t('fuel')}</option>
                        <option value="gasoline">Gasoline</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select border-2 block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('steeringSide')}>
                        <option value="">{t('sSide')}</option>
                        <option value="left">Left-hand Side</option>
                        <option value="right">Right-hand Side</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="tel"
                    className="w-full border-2 p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('phNo')}
                    {...register('phone', {required:true})}/>
                    {errors.phone && <p className='text-[9px] text-red-500 px-4'>a contact number is required</p> }
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
