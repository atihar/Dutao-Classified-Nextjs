import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import LocationView from '../components/locationView'

export default function Contact() {
    const [ isSuccessfullySubmitted, setIsSuccessfullySubmitted ] = useState('');
    const {
        register,
        handleSubmit,
        errors,
        formState
      } = useForm();

     // const onSubmit = (data) => console.log(data);
      const onSubmit = async ({ name, email, subject, category, message }) => {
       // console.log({ name, email, subject, category, message });
        try{
             
            const { data } = await axios.post('/api/contact', {
                name, 
                email, 
                subject, 
                category, 
                message   
            })
            .then(function (response) {
                // handle success
                setIsSuccessfullySubmitted("Successfully submitted") 
              })
              
        }catch (err) {
            console.log(err.message)
        }
      };



      const mapInfo = {latitude:'25.185944', longitude:'55.274911'}
    
  return (
    <>
    <Header></Header>
    <section>
        {/* For Search Bar */}
      {/* <div className="flex items-center justify-center p-4 box lg:my-8">
        <div className="flex border-2 rounded shadow-sm lg:w-2/5 my-1">
            <input type="text" className="px-4 py-2 w-5/6 text-center outline-none" placeholder="How can we help you?"></input>
            <div className="my-auto border-r py-4"></div>
            <button className="flex items-center justify-center px-4 m-auto">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </button>
        </div>
      </div> */}

      <div className="flex items-center justify-center p-4 box lg:my-2">
        <div className="flex justify-center lg:w-2/5 my-1">
            <div className="px-4 lg:w-5/6 text-center lg:text-4xl text-red-600"><h1><b className="border-b-2 border-red-600"> How can we help you? </b></h1></div>
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className=" p-4 grid grid-cols-1 xl:grid-cols-10">

                <div className="items-center justify-center my-4 xl:col-span-5 xl:col-start-2 bg-gray-100">
                    <div className="top-40 shadow rounded py-12 lg:px-28 px-8">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-600">Get in touch</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="md:flex items-center mt-12">
                            <div className="w-full flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                <input {...register('name', { required: true, maxLength: 20 })} tabIndex="0" arial-label="Please input name" type="text" disabled={formState.isSubmitting || isSuccessfullySubmitted} className="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input  name" />
                            </div>
                            <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                <input {...register('email', { required: true})} tabIndex="0" arial-label="Please input email address" type="email" disabled={formState.isSubmitting || isSuccessfullySubmitted} className="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input email address" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Subject</label>
                                <input {...register('subject', { required: true})} tabIndex="0" role="input" arial-label="Please input company name" type="text" disabled={formState.isSubmitting || isSuccessfullySubmitted} className="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input company name" />
                            </div>
                            <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Category</label>
                                <input {...register('category', { required: true})} tabIndex="0" arial-label="Please input country name" type="text" disabled={formState.isSubmitting || isSuccessfullySubmitted} className="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input country name" />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea {...register('message', { required: true})} tabIndex="0" aria-label="leave a message" role="textbox" type="text" disabled={formState.isSubmitting || isSuccessfullySubmitted} className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300 resize-none"></textarea>
                            </div>
                        </div>
                        <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                        <div className="flex items-center justify-center w-full">
                            <button disabled={formState.isSubmitting || isSuccessfullySubmitted} className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-red-600 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none w-full">SUBMIT</button>
                        </div>

                        <p className="text-base bg-green-200 success">{ isSuccessfullySubmitted }</p>
                        </form>
                    </div>
                </div>
          
                <div style={{height: "max-content"}} className="shadow-sm items-center justify-center text-center border-gray-100 border-solid border-b-2 rounded my-4 xl:col-span-2 xl:col-start-8 max-h-full">
                    <div className="top-40 rounded py-3 px-4 bg-gray-500">
                        <p className="md:text-xl font-bold leading-7 text-center text-white">Quick Links</p>
                    </div>
                    <div className="flex justify-center font-semibold py-8">
                        <div className="w-96 text-gray-500">
                                <a
                            href="/about"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                             About us
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                            Frequently asked Questions
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                               
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                            Download app
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                            fourth link item 
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                             Start your business with us
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                            Support
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                             Top Cities
                            </a>
                            <a
                            href="#!"
                            className="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:border-gray-600 border-2 border-white
                                
                                transition
                                duration-200
                                cursor-pointer
                            "
                            >
                             Social Medias
                            </a>
                        </div>
                    </div>
                    
                </div>
        </div>
         
        <div className=" p-4 grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5 ">
            <div className="grid grid-cols-1 p-4 mx-auto justify-items-start">
                <div className="flex items-center lg:justify-center mt-5">
                    <div>    
                        <svg className="h-6 mr-4 text-red-600 svg-icon fill-current" viewBox="0 0 20 20">
                                <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1">  
                        <span  className="text-xl font-bold">Address:</span>  
                        <span  className="text-sm">Floor 31, Westburry Towers, Business Bay, Dubai.</span>
                    </div>
                </div>
                <div className="flex items-center lg:justify-center mt-5">
                    <div>
                        <svg  className="h-6 mr-4 text-red-600 svg-icon fill-current" viewBox="0 0 20 20">
                                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1">
                        <span  className="text-xl font-bold">Email:</span>
                        <span  className="text-sm hover:text-blue-600 transition duration-200"><a href="">something@dutao.com</a></span>
                    </div>
                </div>
                <div className="flex items-center lg:justify-center mt-5">
                    <div>
                        <svg className="h-6 mr-4 text-red-600 svg-icon fill-current" viewBox="0 0 20 20">
                            <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1">
                        <span className="text-xl font-bold">Social:</span>
                        <span className="grid grid-cols-3">
                            <a href=""><svg className="w-6 h-6 m-2 text-gray-500 svg-icon fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                            </svg></a>
                            <a href=""><svg className="w-6 h-6 m-2 text-gray-500 svg-icon fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
                            </svg></a>
                            <a href=""><svg className="w-6 h-6 m-2 text-gray-500 svg-icon fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                            </svg> </a> 
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 p-4">
                <div>
                    <p className="md:text-2xl text-xl font-bold leading-7 text-center">We are here:</p>
                </div>
                <div className="flex items-center justify-center p-4">
                    {/* <Image src="/dutao_map_pin.png" width={500} height={300}></Image> */}
                    <LocationView  mapCoordinates={mapInfo}/>
                </div>
            </div>
        </div>    
      </div>   
    </section>
    <Footer></Footer>
    </>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar/>
      {page}
    </Layout>
  )
}