// single product page
import Header from "../../components/header"
import Footer from "../../components/footer"
import db from '../../lib/dbConnect'
import Jobs from '../../models/jobs'
import moment from "moment"
import { useForm } from 'react-hook-form'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { Store } from '../../lib/Store'
import axios from 'axios'
import Link from 'next/link'


export default function singleJobs({job}){
    // moment configuration for posted date 
    const postedDate = moment(job.createdAt).format('MMM Do YY');
    // moment configuration for expire date , current value + 30 days
    const expiryDate = moment(job.createdAt).add(30 , 'd').format('MMM Do YY');
    const router = useRouter();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const [isLoading, setLoading] = useState(false)
    const [stateCv , setStateCv] = useState('')
    const [ appliedThisJob, setAppliedThisJob ] = useState('')

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
            }
        else {
            setLoading(true);
            const {userData} = axios.get(`/api/user/profile-data/?id=${userInfo._id}`,
            {
                headers: { authorization: `Bearer ${userInfo.token}` }
              })
                .then(function (response) {
                     // handle success
                    const data = response.data
                    setValue('profileSummary', data.profileSummary);
                    setValue('cv', data.cv);
                    setStateCv( data.cv )
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
                
                // getting applications data for this job to check if the user has already applied 
                const applications = axios.get(`/api/jobs/apply?jobId=${job._id}`,{
                    headers: { authorization: `Bearer ${userInfo.token}` }
                  })
                .then(function (response){
                    const applicantionData = response.data

                    if(applicantionData){
                    const y = applicantionData.applications.find(x => ( x && x.applicantsUserId == userInfo._id)) ? "true" :"false"
                    setAppliedThisJob(y)
                    }
                    else {
                    const y = true
                    }
                })

                setLoading(false)
            }}, []);

   
    // react hook form initialization    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    //   handling form on submit button
    // const onSubmit = data => console.log(data);
      const onSubmit = async ({ jobExperience, profileSummary }) => {
        try {
            const { data } = await axios.put(`/api/jobs/apply?jobId=${job._id}`, {
            profileSummary,
            jobExperience,
            cv : stateCv,
            applicantsUserId: userInfo._id,
          },
          {
            headers: { authorization: `Bearer ${userInfo.token}` }}
          );
          router.push('/jobs/list', { shallow: true });
        } catch (err) {
            console.log(err)
        }
        console.log("job submitted succesfully sent")
      };

    return(
        <>  
        <Header/>
            <section>
                <div className="max-w-screen-xl p-5 mx-auto sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
                        <div>
                            <h1>{job.title}</h1>
                            <p className="text-sm text-gray-500 mb-3">{job.city}{`>`} {job.area}</p>
                           
                            <div className="grid">       
                                {job.images.map((x, i)=>{
                                    return <img className=" md:h-auto object-cover md:w-[96] rounded-t-lg md:rounded-none md:rounded-l-lg" key={i} src={`https://dutao-public.s3.amazonaws.com/`+ x } alt="" />
                                })}
                            </div>
                            
                            {/* <p className="font-bold py-3">Salary AED {job.salary}</p> */}
                            
                            <div className="mt-10  py-4 flex justify-between">
                            <h3 className="">Job Information</h3>
                            <p className="text-sm py-2 ">Posted on {postedDate}</p>
                            </div>
                            <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                                <table className="min-w-full text-base divide-y divide-gray-200">
                                    <tbody className="divide-y divide-gray-100">

                                        {/* property info dynamic table automation is bad for health */}

                                        {/* {Object.entries(propertyInfo).map(([key, value]) => {
                                            return (
                                            <tr>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{key}</td>
                                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{value}</td>
                                            </tr>
                                            );
                                        })} */}

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Employment Type</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.employmentType}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Remote Job</td>
                                        <td className="p-4 py-2 text-gray-700 whitespace-nowrap">{job.isRemote}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Listed By</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.listedBy}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Monthly Salary</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.salary}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Neighbourhood</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.neighbourhood}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Minimum Work Experience</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.minWorkExp}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Minimum Education Level</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.minEduLevel}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Listed By</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.listedBy}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Company Size</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.companySize}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Career Level</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.careerLevel}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Preferred Nationality</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.reqNationality}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Gender</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.preferredGender}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Langugage</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{job.language}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Expire Date</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{expiryDate}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="mt-5">Job Description</p>
                            <p className="text-lg text-gray-500">{job.description}</p>

                            <div>
                            <a href="" className="block py-6 mt-16 text-center p-6 transition-shadow bg-white sm:pr-12 group hover:shadow-sm shadow-lg rounded">
                                <span className="inline-block p-2 text-white bg-red-600 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-flag-fill" viewBox="0 0 16 16">
                                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                                    </svg>
                                </span>

                                <h2 className="mt-3 text-lg font-bold">Is there any issue?</h2>

                                <p className="mt-3 text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere fuga illum, totam dolor odio ad sunt quidem
                                    similique sint.
                                </p>

                                <p className="relative inline-block text-sm font-bold text-red-600">
                                    <span
                                    className="absolute inset-x-0 bottom-0 transition-transform transform bg-red-100 h-2/3 group-hover:scale-110"
                                    ></span>
                                    <Link href={'/report-ad'}><span className="relative">Report this ad now</span></Link>
                                </p>
                                </a>
                            </div>
                        </div>
                    
                        <div>
                            <div className="p-10 border border-gray-200 grid rounded-lg">
                                {/* <img src="https://www.damacproperties.com/images/damac-logo.jpg" alt=""/> */}
                                <p className="text-sm"></p>
                                <h1 className="pb-3">{job.company}</h1>
                                <p className="text-sm">Office Location : {job.address}</p>
                                <p className="text-sm pb-5">Company Size : {job.companySize}</p>
                                
                                {/* Form Initiate for apply to the job */}
                                <h3>Continue apply....</h3>
                                <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full mx-auto mt-8 mb-0 space-y-4">
                                    {/* property images */}
                                    <div>
                                        <label htmlFor="cover" className="sr-only">Profile Summary</label>
                                        <div className="relative">
                                            <textarea
                                                className="w-full p-3 text-sm bg-gray-50 rounded-lg focus:outline-none border-2"
                                                placeholder="Write Your Cover Letter"
                                                rows="8"
                                                id="My Profile Summary"
                                                {...register('profileSummary')}
                                                ></textarea>
                                        </div>
                                    </div>

                                    {/* category */}
                                    <div>
                                        <div className="mb-3 xl:w-100">
                                            <select className="form-select block w-full p-3 text-sm text-gray-400 bg-clip-padding bg-no-repeat rounded focus:outline-none transition
                                            ease-in-out bg-gray-50 border-2 m-0 focus:text-gray-500 focus:bg-white"
                                            {...register('jobExperience')}>
                                                <option value="">I have an releavant experience of</option>
                                                <option value="less_than_1">Less than 1 year</option>
                                                <option value="1_year">1 year</option>
                                                <option value="2_years">2 years</option>
                                                <option value="3_years">3 years</option>
                                                <option value="4_years">4 years</option>
                                                <option value="5_years">5 years</option>
                                                <option value="6_years">6 years</option>
                                                <option value="7_years_plus">7 years +</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="pt-2 border-2 rounded-lg bg-gray-50">
                                        <div className="mb-3 w-100 px-3">
                                            <p className="text-sm text-gray-500 font-bold">Default CV : {stateCv}</p>  
                                            <label htmlFor="formFileMultiple" className="form-label inline-block text-sm mb-2 text-gray-400 ">Apply with a updated CV</label>
                                            <input className="form-control block border-2 w-full py-1.5 text-sm text-gray-400  bg-clip-padding
                                            focus:outline-none rounded transition ease-in-out m-0 focus:text-gray-400"
                                            accept="file/pdf, file/doc"
                                            type="file" id="formFileMultiple" {...register('cv')} 
                                            // tried button with onClick.. But its submitting the whole form. So onChange is fine for now
                                            />
                                        </div>
                                    </div>
                                    { 
                                        (appliedThisJob == "true") ? 
                                        
                                        <div className="w-full bg-red-500 text-sm text-white p-5 rounded-lg">You Have Already Applied !</div> 
                                        : <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-sm">
                                        Apply Now
                                        </button>  
                                    }       
                                    
                                    {/* For test commenting above logic and uncommenting below button  */}
                                    {/* <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-sm">
                                        Apply Now
                                    </button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            
        <Footer/>
        </>
    )
}


  export async function getServerSideProps(req, res) {
    //connecting db
    await db.connect();
  
    //setting data constant for the result for database
    const data = await Jobs.findById(req.query.id).lean();
    await db.disconnect();
    const job = JSON.parse(JSON.stringify(data));
    
  
    //setting props for frontend
    return {
      props: { job }
    };
  }