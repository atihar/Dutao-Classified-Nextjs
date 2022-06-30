import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import LocationView from '../components/locationView'

export default function Contact() {
    const mapInfo = {latitude:'25.185944', longitude:'55.274911'}
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        errors,
        formState
      } = useForm();

     // const onSubmit = (data) => console.log(data);
      const onSubmit = async ({ name, email, category, phone, message }) => {
       // console.log({ name, email, subject, category, message });
        try{
            setLoading(true)
            const { data } = await axios.post('/api/contact', {
                name, 
                email, 
                category, 
                phone, 
                message   
            })
            .then(function (response) {
                // handle success
                setMessage("Successfully submitted") 
                setLoading(false)
              })
              
        }catch (err) {
            console.log(err.message)
            setLoading(false)
        }
      };
    
  return (
    <>
    <Header></Header>
    <section className="bg-gray-100">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
            We facilitate our customers in any industry
            to buy and sell various products by just entering its details. We also give you free services through our platform.
            If you have anything to know from us write us using the form. We will be happy to assist you.
            </p>

            <div className="mt-8">
            <a href="" className="text-2xl font-bold text-red-600"> 0151 475 4450 </a>
            </div>
        </div>
        

        <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        {message && 
                <div className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50" role="alert" >
                <strong className="text-sm font-medium"> We have received the message.! Soon we will get back to you </strong>
                </div>
                }
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input className="w-full p-3 text-sm border-gray-200 border-2 rounded-lg" placeholder="Name" 
                type="text" id="name" {...register('name', { required: true, maxLength: 20 })}/>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg border-2"
                    placeholder="Email address"
                    type="email"
                    id="email" {...register('email')}
                />
                </div>

                <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg border-2"
                    placeholder="Phone Number" type="tel"
                    id="phone" {...register('phone', { required: true})}
                />
                </div>
            </div>

            <div className="grid outline-none border-none">
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
                    {...register('category', {required:true})}>
                        <option defaultValue>My message is regarding</option>
                        <option value="technical">Listing Ad</option>
                        <option value="account">Account processing</option>
                        <option value="business">Query about business ad</option>
                    </select>
            </div>

            <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                className="w-full p-3 text-sm border-gray-200 rounded-lg border-2"
                placeholder="Message" rows="8"
                id="message" {...register('message', { required: true})}
                ></textarea>
            </div>

            <div className="mt-4">
                <button type="submit"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto">
                <span className="text-base"> Send Enquiry </span>

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
        </div>
        </div>
    </div>
    </section>



    <section>
        {/* For Search Bar */}

      <div className="container mx-auto">     
        <div className=" p-4 grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5 ">
            <div className="grid grid-cols-1 p-4 mx-auto justify-items-start">
                <div className="flex items-center lg:justify-center mt-5">
                    <div>    
                        <svg className="h-6 mr-4 text-red-600 svg-icon fill-current" viewBox="0 0 20 20">
                                <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1">  
                        <span  className="text-xl font-bold">Office:</span>  
                        <span  className="text-sm">Floor 31, Westburry Towers,<br/> Business Bay, Downtown, Dubai.</span>
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
                        <span  className="text-sm hover:text-blue-600 transition duration-200"><a href="">hello@dutao.ae</a></span>
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