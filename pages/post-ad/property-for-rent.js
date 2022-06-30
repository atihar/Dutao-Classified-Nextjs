import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import cityData from '../../lib/data.json'
import useTranslation from 'next-translate/useTranslation'
import moment from 'moment'

export default function PropertyForRentPost({ children }) {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ userEmail, setUserEmail] = useState("");
    const [ bizName, setBizName ] = useState("")
    const [ bizLogo, setBizLogo ] = useState("")
    const [parent, setParent] = useState("");
    const [imageFiles, setImages] = useState([]);
    const { t, lang } = useTranslation('common')
    const { locale, defaultLocale } = useRouter()
    const [loading, setLoading] = useState('')

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
        else {
            setUserEmail(userInfo.email)
            bizData()
            }
        }, []);

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
        buildingName, amenities, bathroom, bedroom, size, furnished, maintenanceFee, video, phone}) => {

        try {
            setLoading(true)
          const { data } = await axios.post('/api/property-for-rent', {
            title,
            category,
            images: imageFiles,
            address,
            description,
            city,
            area,
            postedBy,
            price,
            buildingName,
            amenities,
            latitude: "10.998877",
            longitude: "8798.789",
            video,
            bathroom,
            bedroom,
            size,
            furnished,
            maintenanceFee,
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
          router.push('/property-for-rent/list');
        } catch (err) {
            console.log(err)
        }
        // console.log({errors})
      };

      const amenity = "ATM Facility-Balcony-Internet-Business Center-Cleaning Services-Cafeteria-Central A/C & Heating-Covered Parking-Kids Play Area-Electricity Backup-Pets Allowed-Maid Service-Private Garden-Private Gym-Private Jacuzzi-Private Pool-Shared Kitchen-Waste Disposal-View of Water".split('-');
      const amenityCN = "自动柜员机设施-阳台-互联网-商业中心-清洁服务-自助餐厅-中央空调和暖气-有盖停车场-儿童游乐区-备用电力-可带宠物-女佣服务-私家花园-私人健身房-私人按摩浴缸-私人泳池-废物处理-水景".split('-');


  return (
      <>     
    <Header></Header>
        <section className='mb-20'>
        {/*starting submission form */}
        <div className="max-w-lg text-center px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10" data-aos="zoom-y-out">
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">{t('enterDetails')}</h1>
            <p className='text-base text-gray-400'>{t('propertyForRent')}</p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4 px-3">
            {/* property images */}
            <div className="">
                <div className="mb-3 w-100">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">{t('addImage')}</label>
                    <input className="form-control
                    block
                    w-full
                    p-3
                    text-sm
                    text-gray-100
                    bg-red-600 bg-clip-padding
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
                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none border-2" placeholder={t('title')}
                {...register('title', {required:true})}/>
                 {errors.category && <p className='text-[9px] text-red-500 px-4'>ad title required</p> }
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
                    m-0  border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('category',{required: true})}>
                         <option value="">{t('propertyType')}</option>
                        <option value="villa">{t('villa')}</option>
                        <option value="apartment">{t('apt')}</option>
                        <option value="townhouse">{t('townhouse')}</option>
                        <option value="building">{t('building')}</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>select a property type</p> }
                </div>
                </div>
            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none border-2"
                    placeholder={t('address')}
                    {...register('address')}/>

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 
                    0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 
                    0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 
                    0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                    </svg>
                </span>
            </div>
            </div>
                


            {/* property description */}
            <div>
            <label className="sr-only" htmlFor="description">Property Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none border-2"
              placeholder={t('description')}
              rows="8"
              id={t('description')}
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('city', {required:true})} onChange={(e) => setParent(e.target.value)}>
                        <option defaultValue>{t('selectCity')}</option>
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
                    {...register('area',{required:true})}>
                        <option defaultValue>{t('locality')}</option>
                        {/* looping through data to find parent cities and showing it areas */}
                        {cityData.cities
                        .find((x) => x.name === parent)
                        ?.child_categories?.map((category) => (
                            <option value={category.value} key={category.id}>{category.name}</option>
                        ))}
                    </select>
                    {errors.area && <p className='text-[9px] text-red-500 px-4'>select a city</p> }
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
                        <option value="landlord">{t('landlord')}</option>
                        <option value="agency">{t('agency')}</option>
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('bedroom',{required:true})}>
                        <option defaultValue>{t('bed')}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5 +">5+</option>
                    </select>
                    {errors.bedroom && <p className='text-[9px] text-red-500 px-4'>number of bed required</p> }
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
                    {...register('bathroom',{required:true})}>
                        <option defaultValue>{t('bath')}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>
                    {errors.bathroom && <p className='text-[9px] text-red-500 px-4'>number of bath required</p> }
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
                    {...register('furnished',{required:true})}>
                        <option defaultValue>{t('furnished')}?</option>
                        <option value="yes">{t('yes')}</option>
                        <option value="no">{t('no')}</option>
                    </select>
                    {errors.furnished && <p className='text-[9px] text-red-500 px-4'>Is the property furnished?</p> }
                </div>
            </div>

            <div>
            <label htmlFor="size" className="sr-only">Size</label>
            <div className="relative">
                <input
                type="number"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                placeholder={t('propertySize')}
                {...register('size')}/>

            </div>
            </div>

            <div>
                <label htmlFor="price" className="sr-only">Price</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder={t('monthlyRent')}
                    {...register('price',{required:true})}/>
                    {errors.price && <p className='text-[9px] text-red-500 px-4'>monthly rental price is required</p> }
                </div>
            </div>


            <div>
                <label htmlFor="maintenanceFee" className="sr-only">Maintenance Fees</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder={t('maintenanceFee')}
                    {...register('maintenanceFee')}/>

                </div>
            </div>
            
            <div>
                <label htmlFor="video" className="sr-only">Video</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder={t('videoLink')}
                    {...register('video')}/>
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="tel"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm border-2"
                    placeholder={t('phNo')}
                    {...register('phone',{required:true})}/>
                    {errors.phone && <p className='text-[9px] text-red-500 px-4'>contact number is required</p> }
                </div>
            </div>
            {/* amenities */}
            <div className='p-4'>
                <h2 className='text-base'>{t('facilities')}</h2>
                { locale == 'en' ?
                <fieldset className='text-sm text-gray-500'>
                    {
                        amenity.map((c,i) => 
                        <div key={i} className='pr-10 py-3 inline-block'><label><input type="checkbox" value={c} {...register('amenities')} />&nbsp;{c}</label></div>
                        )
                    }
                </fieldset>
                    : 
                    <fieldset className='text-sm text-gray-500'>
                    {
                        amenityCN.map((c,i) => 
                        <div key={i} className='pr-10 py-3 inline-block'><label><input type="checkbox" value={c} {...register('amenities')} />&nbsp;{c}</label></div>
                        )
                    }
                </fieldset>
                }
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
