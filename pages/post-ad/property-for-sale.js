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

export default function PropertyForSalePost({ children }) {
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
      const onSubmit = async ({ title, category, address, description,price, city, area, listedBy, 
        buildingName, propertyRef, RERApermitNo, amenities, developer, bathroom, bedroom,
        size, annualCommunityFee, buyerTransferFee, sellerTransferFee, maintenanceFee, video, phone}) => {

        try {
          const { data } = await axios.post('/api/property-for-sale', {
            title,
            category,
            images: imageFiles,
            address,
            description,
            city,
            area,
            listedBy,
            price,
            buildingName,
            propertyRef,
            RERApermitNo,
            amenities,
            latitude: "10.998877",
            longitude: "8798.789",
            video,
            developer,
            bathroom,
            bedroom,
            size,
            annualCommunityFee,
            buyerTransferFee,
            sellerTransferFee,
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
          router.push('/property-for-sale/list');
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
            <p className='text-base text-gray-400'>{t('propertyForSale')}</p>
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
                    p-3 bg-red-600
                    text-sm
                    text-gray-100
                    bg-clip-padding
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
            {/* title  */}
            <label htmlFor="title" className="sr-only">Ad Title</label>
            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm border-2 focus:outline-none" placeholder={t('title')}
                {...register('title', {required:true})}/>
                {errors.title && <p className='text-[9px] text-red-500 px-4'>a ad title is required</p> }
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
                        <option value="">{t('propertyType')}</option>
                        <option value="villa">{t('villa')}</option>
                        <option value="apartment">{t('apt')}</option>
                        <option value="townhouse">{t('townhouse')}</option>
                        <option value="building">{t('building')}</option>
                    </select>
                    {errors.category && <p className='text-[9px] text-red-500 px-4'>select a property category</p> }
                </div>
                </div>
            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm border-2 focus:outline-none "
                    placeholder={t('address')}
                    {...register('address',{required: true})}/>
                    {errors.city && <p className='text-[9px] text-red-500 px-4'>property address is required</p> }
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
            <label className="sr-only" htmlFor="description">Property Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg border-2 focus:outline-none"
              placeholder={t('description')}
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
                    m-0 border-2
                    focus:text-gray-500 focus:bg-white"
                    {...register('city',{required:true})} onChange={(e) => setParent(e.target.value)}>
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
                    {errors.area && <p className='text-[9px] text-red-500 px-4'>select a area</p> }
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
                    {...register('listedBy')}>
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
                        <option value="">{t('bed')}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5 +">5+</option>
                    </select>
                    {errors.bedroom && <p className='text-[9px] text-red-500 px-4'>number of bed is required</p> }
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
                    {errors.bathroom && <p className='text-[9px] text-red-500 px-4'>number of bath is required</p> }
                </div>
            </div>

            <div>
            <label htmlFor="size" className="sr-only">Size</label>
            <div className="relative">
                <input
                type="number"
                className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none border-2 rounded-lg shadow-sm"
                placeholder={t('propertySize')}
                {...register('size',{required:true})}/>
                {errors.size && <p className='text-[9px] text-red-500 px-4'>property area size is required</p> }
            </div>
            </div>

            <div>
                <label htmlFor="price" className="sr-only">Price</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('price')}
                    {...register('price',{required:true})}/>
                    {errors.price && <p className='text-[9px] text-red-500 px-4'>sale price is required</p> }
                </div>
            </div>

            <div>
                <label htmlFor="annualCommunityFee" className="sr-only">Annual Cummunity Fees</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('annualCommunityFee')}
                    {...register('annualCommunityFee')}/>

                </div>
            </div>

            <div>
                <label htmlFor="buyerTransferFee" className="sr-only">Buyer Transfer Fees</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('buyerTransferFee')}
                    {...register('buyerTransferFee')}/>

                </div>
            </div>

            <div>
                <label htmlFor="sellerTransferFee" className="sr-only">Seller Transfer Fees</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('sellerTransferFee')}
                    {...register('sellerTransferFee')}/>

                </div>
            </div>

            <div>
                <label htmlFor="maintenanceFee" className="sr-only">Maintenance Fees</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('maintenanceFee')}
                    {...register('maintenanceFee')}/>

                </div>
            </div>

            <div>
            <label htmlFor="developer" className="sr-only">Developer</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('developer')}
                {...register('developer')}/>
            </div>
            </div>
            
            <div>
                <label htmlFor="video" className="sr-only">Video</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('videoLink')}
                    {...register('video')}/>
                </div>
            </div>

            <p className=' p-4 font-bold text-sm text-gray-400'>{t('weNeedAFewDetails')}</p>


            {/* listing as */}
            <div>
            <label htmlFor="buildingName" className="sr-only">Building Name</label>
            <div className="relative">
                <input
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('buildingName')}
                {...register('buildingName')}/>
            </div>
            </div>

            <div>
            <label htmlFor="propertyRef" className="sr-only">Property Reference</label>
            <div className="relative">
                <input
                type="number"
                className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                placeholder={t('propertyReference')}
                {...register('propertyRef')}/>
            </div>
            </div>

            <div>
                <label htmlFor="reraPermit" className="sr-only">RERA permit no</label>
                <div className="relative">
                    <input
                    type="number"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('reraPermitNo')}
                    {...register('RERApermitNo')}/>
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Contact number</label>
                <div className="relative">
                    <input
                    type="tel"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 border-2 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('phNo')}
                    {...register('phone', {required:true})}/>
                    {errors.phone && <p className='text-[9px] text-red-500 px-4'>contact number is required</p> }
                </div>
            </div>
            {/* amenities */}
            <div className='p-4'>
                <h2 className='text-base'>{t('facilities')}</h2>
                { locale == 'en' ?
                <fieldset className='text-sm text-gray-400'>
                    {
                        amenity.map((c,i) => 
                        <div key={i} className='pr-10 py-3 inline-block'><label><input type="checkbox" value={c} {...register('amenities')} />&nbsp;{c}</label></div>
                        )
                    }
                </fieldset>
                    : 
                    <fieldset className='text-sm text-gray-400'>
                    {
                        amenityCN.map((c,i) => 
                        <div key={i} className='pr-10 py-3 inline-block'><label><input type="checkbox" value={c} {...register('amenities')} />&nbsp;{c}</label></div>
                        )
                    }
                </fieldset>
                }
            </div>

            <div className="flex items-center justify-between">
            <button type="submit" className="w-full inline-block px-5 py-3 text-sm font-medium text-white bg-red-500 rounded-lg">
            {t('createAd')}
            </button>
            </div>

        </form>

        </section>
    <Footer></Footer>
    </>
  )
}
