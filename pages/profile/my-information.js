import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Store } from '../../lib/Store';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import  Link from 'next/link'



export default function myUserInformation() {
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [ stateData, setStateData] = useState({ name : "", email: ""})
    const [isLoading, setLoading] = useState(false)
    const [stateCv , setStateCv] = useState('')

    //file extension removal for aws
    // const s3fileKey = stateCv.replace(/\.[^/.]+$/, "")
    // console.log(s3fileKey)

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
        else {
            setLoading(true);
            setStateData(userInfo)
            const {userData} = axios.get(`/api/user/profile-data/?id=${userInfo._id}`,{
                headers: { authorization: `Bearer ${userInfo.token}` }
              })
                .then(function (response) {
                     // handle success
                    const data = response.data
                    setValue('name', userInfo.name);
                    setValue('gender', data.gender);
                    setValue('nationality', data.nationality);
                    setValue('dateOfBirth', moment(data.dateOfBirth).format('YYYY-MM-DD'));
                    // setValue('dateOfBirth', '2222-12-03');
                    setValue('careerLevel', data.careerLevel);
                    setValue('highestEducation', data.highestEducation);
                    setValue('currentLocation', data.currentLocation);
                    setValue('salaryExpectation', data.salaryExpection);
                    setValue('currentCompany', data.currentCompany);
                    setValue('noticePeriod', data.noticePeriod);
                    setValue('commitment', data.commitment);
                    setValue('visaStatus', data.visaStatus);
                    setValue('visaValidity', moment(data.visaValidity).format('YYYY-MM-DD'));
                    setValue('profileSummary', data.profileSummary);
                    setValue('videoLink', data.videoLink);
                    setLoading(false)
                    setStateCv(data.cv)
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            }}, []);


   
    // handling onchange CV upload
    const uploadCV = async (e) => {
        if(stateCv){
            const filename = encodeURIComponent(stateCv);
            const res = await fetch(`/api/delete-s3Object?file=${filename}`);
        }

        const file = e.target.files[0];
        const filename = encodeURIComponent(file.name);
        const res = await fetch(`/api/upload-url?file=${filename}`);
        const { url, fields } = await res.json();
        const formData = new FormData();
        setStateCv(filename)
    
        Object.entries({ ...fields, file }).forEach(([key, value]) => {
          formData.append(key, value);
        });
    
        const upload = await fetch(url, {
          method: 'POST',
          body: formData,
        });
    
        if (upload.ok) {
          console.log('CV Uploaded successfully!');
        } else {
          console.error('CV Upload failed.');
        }
      };


    // react hook form initialization    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    //   handling form on submit button
      const onSubmit = async ({ gender, 
        nationality,
        dateOfBirth,
        highestEducation,
        careerLevel,
        currentLocation,
        salaryExpectation,
        currentCompany,
        noticePeriod,
        commitment,
        visaStatus,
        visaValidity,
        profileSummary,
        videoLink
        
    }) => {

        try {
          const { data } = await axios.put(`/api/user/profile-data/?id=${userInfo._id}`, {
            gender,
            nationality,
            dateOfBirth,
            highestEducation,
            careerLevel,
            currentLocation,
            salaryExpectation,
            currentCompany,
            noticePeriod,
            commitment,
            visaStatus,
            visaValidity,
            profileSummary,
            videoLink,
            cv : stateCv,
            userId: stateData._id,
          },{
            headers: { authorization: `Bearer ${userInfo.token}` }
          });
          
        //   router.push('/profile');
        } catch (err) {
            console.log(err)
        }
        console.log("data sent")
      };



  return (
      <>     
    <Header></Header>
    <div className='sm:max-w-screen-xl w-screen mx-auto py-4 px-8 my-4 rounded-lg shadow '>
        <h2 className="font-bold sm:py-5"> Dutao User Dashboard</h2>
            <div className="grid lg:grid-cols-[1fr_3fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                        <Link href={'/profile'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Profile</li></Link>
                        <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Ads</li></Link>
                        <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Recruitments</li></Link>
                        <Link href={'/profile/my-information'}><li className="active text-white py-2 px-4 rounded-lg">My Information</li></Link>
                        <Link href={'/profile/my-searches'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Searches</li></Link>
                        <Link href={'/profile/settings'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Settings</li></Link>
                        {/* <Link href={'/profile/subscription'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li></Link> */}
                    </ul>
                </div>

                <div>
                    <div className="w-full">
                        <h2 className='text-base font-bold bg-red-600 text-white px-5 py-2 rounded-t-xl'>Saved Information</h2>
                        <hr/>

                        {/* information form starts */}
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">          
                            <div className="relative">
                            <p className='text-sm text-gray-500'>Your Full Name</p>
                                <input type="text" className="w-full disabled p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" 
                                placeholder="Name" defaultValue={'Mahir'}
                                {...register('name')} />
                            </div>

                            <div className="relative">
                            <p className='text-sm text-gray-500'>Country from Passport</p>
                                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" 
                                placeholder="Nationality" 
                                {...register('nationality')}/>
                            </div>

                            <p className='text-sm text-gray-500'>Date of Birth</p>
                            <div className="relative">
                                <input type="date" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" placeholder="Date Of Birth"
                                {...register('dateOfBirth')}/>
                            </div>

                            <div>
                                <div className="mb-3 xl:w-100">
                                <p className='text-sm text-gray-500'>Choose Career Level</p>
                                    <select className="form-select block w-full p-3 text-sm  text-gray-600 bg-clip-padding bg-no-repeat
                                    rounded focus:outline-none transition ease-in-out bg-gray-50 m-0 focus:text-gray-500 focus:bg-white"
                                    {...register('careerLevel')} >
                                        <option value="">--</option>
                                        <option value="not-applicable">Not applicable</option>
                                        <option value="student">Student</option>
                                        <option value="junior">Junior</option>
                                        <option value="mid_level">Mid Level</option>
                                        <option value="senior">Senior</option>
                                        <option value="Manager">Manager</option>
                                        <option value="director">Executive /Director</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 xl:w-100">
                                    <p className='text-sm text-gray-500'>Choose Education Level</p>
                                    <select className="form-select block w-full p-3 text-sm  text-gray-600 bg-clip-padding bg-no-repeat
                                    rounded focus:outline-none transition ease-in-out bg-gray-50 m-0 focus:text-gray-500 focus:bg-white"
                                    {...register('highestEducation')} >
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
                                <p className='text-sm text-gray-500'>I am a</p>
                                    <select className="form-select block w-full p-3 text-sm  text-gray-700 bg-clip-padding bg-no-repeat
                                    rounded focus:outline-none transition ease-in-out bg-gray-50 m-0 focus:text-gray-500 focus:bg-white" placeholder="Gender"
                                    {...register('gender')}>
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative">
                            <p className='text-sm text-gray-500'>Present City</p>
                                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" 
                                placeholder="Current Location" 
                                {...register('currentLocation')}/>
                            </div>

                            <div className="relative">
                            <p className='text-sm text-gray-500'>Current Company</p>
                                <input type="text" className="w-full p-4 pr-12 text-sm rounded-lg bg-gray-50 shadow-sm focus:outline-none" 
                                placeholder="Current Company" 
                                {...register('currentCompany')}/>
                            </div>

                            <div>
                            <p className='text-sm text-gray-500'>My notice period</p>
                                <label htmlFor="warranty" className="sr-only">Notice Period (days)</label>
                                <div className="relative">
                                    <input
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                                    placeholder="Notice Period"
                                    {...register('noticePeriod')} />
                                </div>
                            </div>

                            {/* select city */}

                            <div className="mb-3 xl:w-100">
                            <p className='text-sm text-gray-500'>My Salary Expectation</p>
                                <select className="form-select block w-full p-3 text-sm  text-gray-600 bg-clip-padding bg-no-repeat
                                    rounded focus:outline-none transition ease-in-out bg-gray-50 m-0 focus:text-gray-500 focus:bg-white"
                                    {...register('salaryExpectation')} >
                                        <option value="">Expected Salary Range</option>
                                        <option value="negotiable">Negotiable</option>
                                        <option value="0-1999">0-1999</option>
                                        <option value="2000-3999">2000-3999</option>
                                        <option value="4000-6999">4000-6999</option>
                                        <option value="7000-8999">7000-8999</option>
                                        <option value="9000-12999">9000-12999</option>
                                        <option value="13000-16999">13000-16999</option>
                                        <option value="17000-24999">17000-24999</option>
                                        <option value="25000-34999">25000-34999</option>
                                        <option value="35000-49999">35000-49999</option>
                                        <option value="50000-2999999">50000+</option>
                                </select>
                            </div>

                            <div className="mb-3 xl:w-100">
                            <p className='text-sm text-gray-500'>My job commitment is</p>
                                <select className="form-select block w-full p-3 text-sm  text-gray-600 bg-clip-padding bg-no-repeat
                                    rounded focus:outline-none transition ease-in-out bg-gray-50 m-0 focus:text-gray-500 focus:bg-white"
                                    {...register('commitment')} >
                                        <option value="">Commitment</option>
                                        <option value="fulltime">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="contract">Contract</option>
                                        <option value="temporary">Temporary</option>
                                </select>
                            </div>

                            <p className=' p-4 font-bold text-sm text-gray-400'>Visa Information</p>
                            <div>
                                <p className='text-sm text-gray-500'>Visa Status</p>
                                <div className="relative">
                                    <input
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                                    placeholder="Visa Status" 
                                    {...register('visaStatus')} />
                                </div>
                            </div>
                            
                            <p className='text-sm text-gray-500'>Visa Expiry Date</p>
                            <div>
                                <label htmlFor="trim" className="sr-only">Visa Status</label>
                                <div className="relative">
                                    <input
                                    type="date"
                                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                                    placeholder="Visa Validity" 
                                    {...register('visaValidity')} />
                                </div>
                            </div>

                            <p className='pt-4 text-[12px]'>Dutao Premium Feature</p>
                            <p className='font-light text-xl text-gray-500'>Standout in crowd by filling out this</p>

                            <div>
                                <p className='text-sm text-gray-500'>Video Introduction</p>
                                <div className="relative">
                                    <input
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm bg-gray-50 focus:outline-none rounded-lg shadow-sm"
                                    placeholder="Video Link"
                                    {...register('videoLink')} />
                                </div>
                            </div>

                            {/* profile summary */}
                            <div>
                                <p className='text-sm text-gray-500'>My Profile Summary</p>
                                <textarea
                                className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none"
                                placeholder="Profile Summary"
                                rows="8"
                                id="profileSummary"
                                {...register('profileSummary')}
                            ></textarea>
                        </div>

                        <div className="">
                                <div className="mb-3 w-100 p-3">
                                    <p className='text-sm font-bold'>Current CV : <a href={`https://dutao-public.s3.amazonaws.com/${stateCv}`}>{stateCv}</a>
                                    <img className="md:h-auto object-cover md:w-[96] rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://dutao-public.s3.amazonaws.com/${stateCv}`} alt="" />
                                    </p> 

                                    <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">Upload Your Recent CV to replace old one</label>
                                    <input className="form-control block w-full px-2 py-1.5 text-sm  text-gray-400
                                    bg-white bg-clip-padding focus:outline-none rounded transition  ease-in-out m-0
                                    focus:text-gray-400" 
                                    accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                                    type="file" id="formFileMultiple" 
                                    onChange={uploadCV}
                                    // tried button with onClick.. But its submitting the whole form. So onChange is fine for now
                                    placeholder="Upload CV" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                            <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg">
                                Update Profile
                            </button>
                            </div>
                        </form> 
                        {/* information form ends                          */}
                    </div>  
                </div>
                
            </div>
        </div>
        <section>
          <div className="max-w-screen-xl py-6 px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="font-bold py-6">How to make your profile stands out?</h2>
            <p className="text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
              the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and 
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line 
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h2 className="font-bold py-6">Best practice for creating a CV</h2>
            <p className="text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
              the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and 
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line 
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </section>

    <Footer></Footer>
    </>
  )
}
