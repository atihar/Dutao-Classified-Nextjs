// single product page
import Header from "../../components/header";
import Footer from "../../components/footer";
import db from '../../lib/dbConnect'
import LocationItems from '../../models/place'
import moment from "moment";
import Link from 'next/link'


export default function singlePropertySale({item}){
    const itemInfo = item.itemInfo;
    const postedDate = moment(item.createdAt).startOf('hour').fromNow();

    return(
        <>  
        <Header/>
            <section>
                <div className="max-w-screen-xl p-5 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-[2fr_1fr] gap-4">
                        <div>
                            <h1>{item.title}</h1>
                            {/* <p className="text-sm text-gray-500 mb-3">Dubai{`>`} Business Bay</p> */}
                           
                            <div className="grid">       
                                {item.images.map((x, i)=>{
                                    return <img className=" md:h-auto object-cover md:w-[96] rounded-t-lg md:rounded-none md:rounded-l-lg" key={i} src={"https://dutao.s3.me-south-1.amazonaws.com/" + x } alt="" />
                                })}
                            </div>
                            
                            {/* <p className="font-bold py-3">AED {item.price}</p> */}
 
                            <p className='flex items-baseline text-lg py-2 text-gray-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <span className="pl-5">{item.address}</span>
                            </p>  
                            <p className="mt-5">About this item</p>
                            <p className="text-lg text-gray-500">{item.description}</p>

                            <h3 className="mt-10 py-4">More Information</h3>
                            <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                                <table className="min-w-full text-base divide-y divide-gray-200">
                                    <tbody className="divide-y divide-gray-100">

                                        {/* property info dynamic table automation is bad for health */}

                                        {Object.entries(item.features).map(([key, value]) => {
                                            return (
                                            <tr>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{key}</td>
                                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{value}</td>
                                            </tr>
                                            );
                                        })}

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Verified by Dutao</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">No</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Contact number</td>
                                        <td className="p-4 py-2 text-gray-700 whitespace-nowrap">{item.phone}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Official Website</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{item.website}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 font-medium whitespace-nowrap">Listed By</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">{item.listedBy}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <h3 className="pt-4">Where you'll be</h3>
                                <p className="text-sm text-gray-500">Dubai {`>`} Business Bay</p>
                            </div>
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
                            <div className="p-10 border bg-red-50 border-gray-200 grid rounded-lg">
                                {/* <img src="https://www.damacproperties.com/images/damac-logo.jpg" alt=""/> */}
                                <h1>Contact for Ad</h1>
                                <h1 className="pb-3"></h1>
                                <p className="text-sm">Call : 05xxxxx</p>
                                {/* <p className="text-sm pb-5">DED license no : 213234</p> */}

                                    <a className="inline-block space-x-2 text-center px-12 py-3 text-sm font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring" href="">
                                    <div className="flex justify-center "> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                        
                                        <span className="px-5">Make a Call</span></div>
                                    </a>

                                <a className="inline-block px-12 py-3 mt-5 text-center text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white active:bg-red-500 focus:outline-none focus:ring" href="/download">
                                <div className="flex justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                    <span className="px-5">Inquire now</span>
                                </div>
                                </a>
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
    const data = await LocationItems.findById(req.query.id).lean();
    const item = JSON.parse(JSON.stringify(data));
    await db.disconnect();
    
  
    //setting props for frontend
    return {
      props: { item }
    };
  }