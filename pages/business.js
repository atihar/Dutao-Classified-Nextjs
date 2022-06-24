import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

function business() {
  return (
   <>
   <Header/> 
   <section className="overflow-hidden sm:max-w-screen-xl m-auto text-gray-700 mt-10">
            <div className="h-[400px] w-full flex items-center lg:pt-21 bg-black rounded-xl">
                  <h1 className="text-yellow-500 text-5xl font-bold text-center w-screen">Dutao for business</h1>
              </div>
      </section>
      <section className='sm:max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-3 mt-6 gap-x-8'>
          <div className='bg-gray-50 p-6'>
            <h2 className='text-bold py-2'>For car dealers</h2>
            <p className='text-base'>Increase your business revenue by listing your car in dutao</p>
          </div>
          <div className='bg-gray-50 p-6'>
            <h2 className='text-bold py-2'>For property agents</h2>
            <p className='text-base'>Increase your business revenue by listing your car in dutao</p>
          </div>
          <div className='bg-yellow-300 p-6'>
            <h2 className='text-bold py-2'>For advertisement</h2>
            <p className='text-base'>Increase your business visibility by reaching thousands of users</p>
          </div>
          </div>
        </section>
        <section className='max-w-screen-xl w-full mx-auto py-4 mt-8'>
          <div className='grid grid-cols-2 gap-x-8'>
            <div className='p-6 rounded-xl'>
              <h2>Tell us more about you</h2>
              <p className='text-base pt-3'>
              Whether you want to promote real estate, cars, or simply looking for new customers for your business; reach out and tell us what you’re after. We’ll find a way to help!

              There’s a reason thousands of businesses in the UAE already trust us.<br/>

              Note: please use this form to submit business inquiries only. If you have other inquiries, please email us at info@dutao.ae
              </p>
            </div>
            <div>
              <form>
                    <div className='space-y-4'>
                    <input type="text" placeholder="Company Name"
                    className="w-full border-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" />
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
                      focus:text-gray-500 focus:bg-white">
                          <option defaultValue>Industry</option>
                          <option value="car-new">New car sales</option>
                          <option value="car-used">Used car sales</option>
                          <option value="property-rent">Real Estate rentals</option>
                          <option value="property-sales">Real Estate sales</option>
                          <option value="retail">Retail</option>
                          <option value="others">others</option>
                      </select>
                      <input type="text" placeholder="Contact Name"
                    className="w-full border-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" />
                    <input type="email" placeholder="Company Email"
                    className="w-full border-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" />

                    <textarea type="text" placeholder="Requirement"
                    className="w-full border-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" />
                    </div>

                    <button type="submit"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto">
                <span className="text-base"> Submit </span>
                </button>
              </form>
            </div>
            </div>
        </section>
   <Footer/>
   </>
  )
}

export default business