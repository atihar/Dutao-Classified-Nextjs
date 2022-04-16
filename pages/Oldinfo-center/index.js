//infocenter page
import Header from "../../components/header"
import Footer from '../../components/foote-2'
import Link from "next/link"
import React, {useState} from 'react'

export default function infocenter() {
  const [cat, setCat] = useState('all')
  const [city, setCity] = useState('all')

  const cityHandler = (e) =>{ setCity(e.target.value)}
  const catagoryHandler = (e) => {setCat(e.target.value)}

  return (
      <>
      <Header></Header>
      <section className="overflow-hidden max-w-screen-xl m-auto text-gray-700">
          <div className="relative p-10">
            <label className="sr-only" htmlFor="searchQuery"> Job Title, Responsibility, Company Name ..... </label>

            <select className="w-1/2 border-2 p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                  rounded transition ease-in-out focus:outline-none m-0" onChange={cityHandler}>
                  <option value="">Select Location</option>
                  <option value="dubai">Dubai</option>
                  <option value="abu-dhabi">Abu Dhabi</option>
                  <option value="sharjah">Sharjah</option>
                  <option value="ajman">Ajman</option>
              </select>
              <select className="w-1/2 border-2 p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                  rounded transition ease-in-out focus:outline-none m-0" onChange={catagoryHandler}>
                  <option value="">Activity/Type</option>
                  <option value="business">Business</option>
                  <option value="hospital">Hospital</option>
                  <option value="bank">Bank</option>
                  <option value="food">Food</option>
                  <option value="bar">Bar</option>
                  <option value="events">Events</option>
                  <option value="super-market">Super Market</option>
                  <option value="events">Hotels</option>
              </select>

                  <Link href={`/info-center/list/?city=${city}&catagory=${cat}`}><button className="absolute p-6 text-white -translate-y-1/2 bg-red-600 rounded-full top-1/2 right-4" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                  </Link>
          </div>
              
          <div className="h-[400px] w-full flex items-center lg:pt-21 bg-red-500 rounded-xl">
            <h1 className="text-white text-5xl font-bold text-center w-screen">Getting around is more easy with Dutao</h1>
        </div>

        <div className="py-5 grid grid-cols-2 space-x-4">
          <div className="relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg"/>
                  <div className="duration-300 absolute inset-0 z-10 flex p-12 text-5xl text-white font-bold">Things to do</div>
                  
          </div>
          <div className="relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                  <div className="duration-300 absolute inset-0 z-10 flex p-12 text-5xl text-white font-bold">Places must go</div>
          </div>
        </div>
        <div className="relative">
                <img alt="gallery" className="block object-cover object-center w-full h-[500px] rounded-xl"
                  src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"/>
                  <div className="duration-300 absolute inset-0 z-10 flex p-12 text-7xl text-white font-semibold">Questions<br/> about hosting?</div>
                  
          </div>
        <div className="px-4 pt-2 pb-4 bg-white-500 bg-gray-50 rounded shadow-lg">
                <p className='text-left text-base py-4'>Find your location to see whats nearby</p>
                <div className='flex text-left justify-between'>
                  <div className='text-left space-y-1'>
                    <h6 className='font-bold'>Dubai</h6>
                    <hr/>
                    <p className="text-base">Business Bay</p>
                    <p className="text-base">Marina</p>
                    <p className="text-base">Al Barsha</p>
                    <p className="text-base">Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='font-bold'>Abu Dhabi</h6>
                    <hr/>
                    <p className="text-base">Business Bay</p>
                    <p className="text-base">Marina</p>
                    <p className="text-base">Al Barsha</p>
                    <p className="text-base">Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='font-bold'>Ajman</h6>
                    <hr/>
                    <p className="text-base">Business Bay</p>
                    <p className="text-base">Marina</p>
                    <p className="text-base">Al Barsha</p>
                    <p className="text-base">Deira</p>
                  </div>
                  <div className='text-left space-y-1'>
                    <h6 className='font-bold'>Fujiran</h6>
                    <hr/>
                    <p className="text-base">Business Bay</p>
                    <p className="text-base">Marina</p>
                    <p className="text-base">Al Barsha</p>
                    <p className="text-base">Deira</p>
                  </div>
                   <div className='text-left space-y-1'>
                        <a className="inline-flex items-center px-8 py-3 text-red-500  focus:ring" href="/info-center">
                          <span className="text-medium font-medium">
                            explore more
                          </span>

                          <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                    </div>
                  </div>
                </div>
      </section>
      <Footer></Footer>
      </>
  )
}



// export async function getServerSideProps() {
//   //connecting db
//   await db.connect();

//   //setting data constant for the result for database
//   const data = await SaleProperty.find().limit(7).lean();
//   await db.disconnect();
//   const property = JSON.parse(JSON.stringify(data));
  

//   //setting props for frontend
//   return {
//     props: { property }
//   };
// }