import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation'
import cityData from '../../lib/data.json'

export default function jobsPost({ children }) {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ userEmail, setUserEmail] = useState("");
    const [imageFiles, setImages] = useState([]);
    const { t, lang } = useTranslation('common')
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
                    console.log('Cover photo Uploaded successfully!');
                    
                  } else {
                    console.error('Photo Upload failed.');
                  }
            })
            )
        } catch(e){console.error(e)}
    }
        
    //   handling form on submit button
      const onSubmit = async ({ title, category,company, address, description, salary, city, area, listedBy, neighbourhood, employmentType, minWorkExp, minEduLevel, companySize, careerLevel, preferredGender,
        reqNationality, isRemote, language, perks}) => {

        try {
          const { data } = await axios.post('/api/jobs', {
            title, 
            category,
            images: imageFiles,
            company, 
            address, 
            description, 
            salary, 
            city, 
            area, 
            listedBy, 
            neighbourhood, 
            employmentType, 
            minWorkExp, 
            minEduLevel, 
            companySize, 
            careerLevel,
            language,
            preferredGender,
            reqNationality, 
            isRemote, 
            language:"English, Arabic",
            userEmail,
            perks,
          },
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          }
          );

          //creating a job application form on successfull submission
          axios.post(`/api/jobs/apply?jobId=${data._id}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          });
          router.push('/jobs/list');
        } catch (err) {
            console.log(err)
        }
        // console.log({errors})
      };

      const perks = "Health Insurance-Visa Processing Assistance-Accomodation-Travel Allowance-Yearly Vacation-Air Ticket".split('-');


  return (
      <>     
    <Header></Header>
        <section className='mb-20'>
        {/*starting submission form */}
        <div className="max-w-lg text-center px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10">
            <h1 className="text-2xl font-bold text-red-600 sm:text-3xl">{t('enterDetails')}</h1>
            <p className='text-base text-gray-400'>{t('job')}</p>
        </div>
        {/* get started finish */}

        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            {/* property images */}
            <div className="">
                <div className="mb-3 w-100 p-3">
                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">Cover photo</label>
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
                    placeholder="File Images" />
                </div>
            </div>
        <div>
            <label htmlFor="title" className="sr-only">{t('jobTitle')}</label>

            <div className="relative">
                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" placeholder={t('jobTitle')}
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
                        <option value="">{t('selectCategory')}</option>
                        <option value="accounting">{t('accounting')}</option>
                        <option value="architecture">{t('architecture')}</option>
                        <option value="business_developement">{t('businessDevelopment')}</option>
                        <option value="real_estate">{t('realEstate')}</option>
                        <option value="customer_service">{t('custServ')}</option>
                        <option value="food_and_beverages">{t('fnb')}</option>
                        <option value="information_technology">{t('it')}</option>
                        <option value="travel_and_tourism">{t('tnt')}</option>
                        <option value="human_resource">{t('humanResource')}</option>
                        <option value="marketing">{t('salesAndMarketing')}</option>
                        <option value="finance">{t('banking')}</option>
                        <option value="logistics">{t('lnd')}</option>
                        <option value="healthcare">{t('healthcare')}</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="address" className="sr-only"></label>

                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none "
                    placeholder={t('address')}
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
            <label className="sr-only" htmlFor="description">Job Description</label>
            <textarea
              className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none"
              placeholder={t('description')}
              rows="8"
              id="description"
              {...register('description')}
            ></textarea>
          </div>


            <div>
                <label htmlFor="salary" className="sr-only">Monthly Salary</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('monthlySalary')}
                    {...register('salary')}/>
                </div>
            </div>


            <div>
                <label htmlFor="neighbourhood" className="sr-only">Salary</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder={t('neighbourhood')}
                    {...register('neighbourhood')}/>
                </div>
            </div>


            <div>
                 <label htmlFor="company" className="sr-only"></label>
                <div className="relative">
                        <input
                        type="text"
                        className="w-full p-4 pr-12 text-sm bg-gray-50 rounded-lg shadow-sm focus:outline-none "
                        placeholder={t('companyName')}
                        {...register('company')}/>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('companySize')}>
                        <option value="">{t('companySize')}</option>
                        <option value="small">{t('small')}(0-10)</option>
                        <option value="mid">{t('medium')}(11-20)</option>
                        <option value="large">{t('large')}(21-100)</option>
                        <option value="enterprise">{t('enterprise')}(100+)</option>
                    </select>
                </div>
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
                    m-0
                    focus:text-gray-500 focus:bg-white"
                    {...register('area')}>
                        <option value="">{t('locality')}</option>
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
                    {...register('listedBy')}>
                        <option value="">{t('postingAs')}</option>
                        <option value="owner">{t('owner')}</option>
                        <option value="agency">{t('agent')}</option>
                    </select>
                </div>
            </div>


            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('employmentType')}>
                        <option value="">{t('empType')}</option>
                        <option value="full-time">{t('fullTime')}</option>
                        <option value="contract">{t('contractual')}</option>
                        <option value="part-time">{t('partTime')}</option>
                        <option value="intern">{t('intern')}</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('isRemote')}>
                        <option valu="">{t('isItRemote')}</option>
                        <option value="yes">{t('yes')}</option>
                        <option value="no">{t('no')}</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('minEduLevel')}>
                        <option value="">Minimum Education Level</option>
                        <option value="high-school">High School/College</option>
                        <option value="degree-college">Degree College</option>
                        <option value="bachelor">Bachelors or Equivalent</option>
                        <option value="masters">Masters or Equivalent</option>
                    </select>
                </div>
            </div>


            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('minWorkExp')}>
                        <option value="">Minimum Experience Level</option>
                        <option value="0">Not required</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-8">6-8 years</option>
                        <option value="8-10">8-10 years</option>
                        <option value="11-14">11-14 years</option>
                        <option value="15-99">15+ years</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('careerLevel')}>
                        <option value="">Career Level</option>
                        <option value="fresher">Fresher</option>
                        <option value="junior">Junior executive</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                        <option value="manager">Manager</option>
                        <option value="ceo">CEO</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="mb-3 xl:w-100">
                    <select className="form-select block w-full p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                    rounded transition ease-in-out bg-gray-50 focus:outline-none m-0 focus:text-gray-500 focus:bg-white"
                    {...register('preferredGender')}>
                        <option value="">Preferred Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="not">Not required</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="reqNationality" className="sr-only">Preferred Nationality</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                    placeholder="Preferred Nationalityr"
                    {...register('reqNationality')}/>
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


            <p className=' p-4 font-bold text-sm text-gray-400'>Let future employees know what your company offers to make their life better</p>


            {/* perks */}
            <div className='p-4'>
                <h2 className='text-base'>Job Perks</h2>
                <fieldset className='text-sm text-gray-400'>
                    { perks.map((c,i) => 
                        <div key={i} className='pr-10 py-3 inline-block'><label><input type="checkbox" value={c} {...register('perks')} />&nbsp;{c}</label></div>)
                    }
                </fieldset>
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
