import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import useTranslation from 'next-translate/useTranslation'


function Business() {
  const { t, lang } = useTranslation('common')
  return (
   <>
   <Header/> 
   <section className="overflow-hidden sm:max-w-screen-xl m-auto text-gray-700 mt-10">
            <div className="h-[400px] w-full flex items-center lg:pt-21 bg-black rounded-xl">
                  <h1 className="text-yellow-500 text-5xl font-bold text-center w-screen">{t('dutaoBusiness')}</h1>
              </div>
      </section>
      <section className='sm:max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-3 mt-6 gap-x-8'>
          <div className='bg-gray-50 p-6'>
            <h2 className='text-bold py-2'>{t('forCarDealer')}</h2>
            <p className='text-base'>{t('carDetails')}</p>
          </div>
          <div className='bg-gray-50 p-6'>
            <h2 className='text-bold py-2'>{t('forRealtors')}</h2>
            <p className='text-base'>{t('realtorDetails')}</p>
          </div>
          <div className='bg-yellow-300 p-6'>
            <h2 className='text-bold py-2'>{t('forAdvert')}</h2>
            <p className='text-base'>{t('advertDetails')}</p>
          </div>
          </div>
        </section>
        <section className='max-w-screen-xl w-full mx-auto py-4 mt-8'>
          <div className='grid grid-cols-2 gap-x-8'>
            <div className='p-6 rounded-xl'>
              <h2>{t('tellUsMore')}</h2>
              <p className='text-base pt-3'>
              {t('tellUsDetails')}<br/>
              {t('businessNotes')}
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

export default Business