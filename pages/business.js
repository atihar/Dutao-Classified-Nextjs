import React , {useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form';
import axios from 'axios';


function Business() {
  const { t, lang } = useTranslation('common')
  const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        errors,
        formState
      } = useForm();

     // const onSubmit = (data) => console.log(data);
      const onSubmit = async ({ businessName, industry, name, email, requirementText }) => {
       // console.log({ name, email, subject, category, message });
        try{
            setLoading(true)
            await axios.post('/api/biz-inquiry', {
              businessName,
              name, 
              email, 
              industry, 
              requirementText 
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
   <Header/> 
      <section className="overflow-hidden sm:max-w-screen-xl m-auto text-gray-700 mt-10">
            <div className="h-[400px] w-full flex items-center lg:pt-21 bg-black rounded-xl">
                  <h1 className="text-yellow-500 text-5xl font-bold text-center w-screen">{t('dutaoBusiness')}</h1>
              </div>
      </section>
      <section className='sm:max-w-screen-xl mx-auto'>
        <div className='grid md:grid-cols-3 mt-6 gap-x-8'>
          <div className='bg-gray-50 p-6'>
            <h2 className='text-bold py-2'>{t('forCarDealer')}</h2>
            <p className='text-base'>{t('carDetails')}</p>
          </div>
          <div className='bg-gray-50 p-6'>
            <h2 className='text-bold py-2'>{t('forRealtors')}</h2>
            <p className='text-base'>{t('realtorDetails')}</p>
          </div>
          <div className='bg-yellow-300 p-6 mx-2'>
            <h2 className='text-bold py-2'>{t('forAdvert')}</h2>
            <p className='text-base'>{t('advertDetails')}</p>
          </div>
          </div>
        </section>
        <section className='max-w-screen-xl w-full mx-auto py-4 mt-8'>
          <div className='grid md:grid-cols-2 gap-x-8'>
            <div className='p-6 rounded-xl'>
              <h2>{t('tellUsMore')}</h2>
              <p className='text-base pt-3'>
              {t('tellUsDetails')}<br/>
              {t('businessNotes')}
              </p>
            </div>
            <div>
               <form onSubmit={handleSubmit(onSubmit)} className="px-2 space-y-4">
                    <div className='space-y-4'>
                    <input type="text" placeholder="Company Name"
                    className="w-full border-2 p-4 pr-12 text-sm focus:text-[16px] border-gray-200 rounded-lg shadow-sm" 
                    {...register('businessName', { required: true, maxLength: 50 })}/>

                   <select className="form-select block
                      w-full
                      p-4
                      text-sm focus:text-[16px]
                      text-gray-400
                      bg-clip-padding bg-no-repeat
                      rounded
                      transition
                      ease-in-out
                      bg-gray-50 focus:outline-none
                      m-0 border-2
                      focus:text-gray-500 focus:bg-white" 
                      {...register('industry', { required: true })}>
                          <option defaultValue>Industry</option>
                          <option value="car-new">New car sales</option>
                          <option value="car-used">Used car sales</option>
                          <option value="property-rent">Real Estate rentals</option>
                          <option value="property-sales">Real Estate sales</option>
                          <option value="retail">Retail</option>
                          <option value="others">others</option>
                      </select>
                      <input type="text" placeholder="Contact Name"
                    className="w-full border-2 p-4 pr-12 text-sm focus:text-[16px] border-gray-200 rounded-lg shadow-sm" 
                    {...register('name', { required: true, maxLength: 50 })}/>

                    <input type="email" placeholder="Contact Email"
                    className="w-full border-2 p-4 pr-12 text-sm focus:text-[16px] border-gray-200 rounded-lg shadow-sm" 
                    {...register('email', { required: true})}/>

                    <textarea type="text" placeholder="Requirement"
                    className="w-full border-2 p-4 pr-12 text-sm focus:text-[16px] border-gray-200 rounded-lg shadow-sm" 
                    {...register('requirementText', { required: true})}/>
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