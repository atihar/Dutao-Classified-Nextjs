// single product page
import Header from "../../components/header";
import Footer from "../../components/footer";
import db from '../../lib/dbConnect'
import Motors from '../../models/motors'
import moment from "moment";
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import Slider from '../../components/singleProductPageSlider'


export default function singlePropertySale({motor}){
    const motorInfo = motor.motorInfo;
    const postedDate = moment(motor.createdAt).startOf('hour').fromNow();
    const {t} = useTranslation('common')

    return(
        <>  
        <Header/>
            <section>
                <div className="max-w-screen-xl p-5 mx-auto sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-[2fr_1fr] gap-4">
                        <div>
                            <h1>{motor.title}</h1>
                            <p className="text-sm text-gray-500 mb-3">{t('dubai')} { ` > `} {motor.area}</p>
                           
                            <Slider data={motor.images}/> 
                            
                            <p className="font-bold py-3">AED {motor.price}</p>
                            <div className="flex space-x-1 sm:space-x-10 text-lg">
                                    <div className="grid justify-items-center py-3 px-6 border-2 rounded-xl">
                                        <p className="text-sm">{t('km')}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-speedometer2" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                        <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                                        </svg> 
                                        <p className="text-sm">{motor.kilometers}</p>
                                    </div>
                                    <div className="grid justify-items-center py-3 px-6 border-2 rounded-xl">
                                        <p className="text-sm">{t('warranty')}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                        </svg>
                                        <p className="text-sm">{motor.warranty}</p>
                                    </div>
                                    <div className="grid justify-items-center py-3 px-6 border-2 rounded-xl">
                                        <p className="text-sm">{t('color')}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-droplet-half" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                            <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                                            </svg>
                                            <p className="text-sm">{motor.color}</p>
                                    </div>
                                    <div className="grid justify-items-center py-3 px-6 border-2 rounded-xl">
                                        <p className="text-sm">{t('year')}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-week" viewBox="0 0 16 16">
`                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <p className="text-sm">{motor.marketYear}</p>
                                    </div>
                            </div>
                            <p className='flex items-baseline text-lg py-2 text-gray-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <span className="pl-5">{motor.address}</span>
                            </p>  
                            <p className="mt-5">{t('aboutMotor')}</p>
                            <p className="text-lg text-gray-500">{motor.description}</p>

                            <h3 className="mt-10 py-4">{t('moreInfo')}</h3>
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
                                        <td className="p-4 font-medium whitespace-nowrap">{t('bodyCon')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{t('fresh')}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('mechCon')}</td>
                                        <td className="p-4 py-2 text-gray-700 whitespace-nowrap">{t('good')}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('body')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.bodyCondition}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('cylinders')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.cylinders}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('transmission')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.transmissionType}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('specs')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.regionalSpec}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('horse')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.horsePower}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('fuel')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.fuelType}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">{t('sSide')}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{motor.steeringSide}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <h3 className="pt-4">{t('wherePin')}</h3>
                                <p className="text-sm text-gray-500">Dubai {`>`} Business Bay</p>
                            </div>
                            <div>
                            <a href="" className="block py-6 mt-16 text-center p-6 transition-shadow bg-white sm:pr-12 group hover:shadow-sm shadow-lg rounded">
                                <span className="inline-block p-2 text-white bg-red-600 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-flag-fill" viewBox="0 0 16 16">
                                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                                    </svg>
                                </span>

                                <h2 className="mt-3 text-lg font-bold">{t('issue')}</h2>

                                <p className="mt-3 text-sm text-gray-500">
                                    {t('details')}
                                </p>

                                <p className="relative inline-block text-sm font-bold text-red-600">
                                    <span
                                    className="absolute inset-x-0 bottom-0 transition-transform transform bg-red-100 h-2/3 group-hover:scale-110"
                                    ></span>
                                    <Link href={'/report-ad'}><span className="relative">{t('report')}</span></Link>
                                </p>
                                </a>
                            </div>
                        </div>
                    
                        <div>
                            <div className="p-10 border border-gray-200 grid rounded-lg">
                            <img className="rounded-full h-[70px] mx-auto border-gray-300 border-2" src="https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg" alt=""/>
                                <p className="text-sm">{t('postedBy')} : Owner</p>
                                <h1 className="pb-3"></h1>
                                    <a className="inline-block space-x-2 text-center lg:px-12 py-3 text-sm font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring" 
                                    href={`tel:${motor.phone}`}>
                                    <div className="flex justify-center "> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                        
                                        <span className="px-5">{t('call')}</span></div>
                                    </a>

                                {/* <a className="inline-block lg:px-12 py-3 mt-5 text-center text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white active:bg-red-500 focus:outline-none focus:ring" href="/download">
                                <div className="flex justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                    <span className="px-5">{t('inquire')}</span>
                                </div>
                                </a> */}
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
    const data = await Motors.findById(req.query.id).lean();
    const motor = JSON.parse(JSON.stringify(data));
    await db.disconnect();
    
  
    //setting props for frontend
    return {
      props: { motor }
    };
  }