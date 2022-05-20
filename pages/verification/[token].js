import { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import axios from 'axios'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'

export default function verification() {
    const router = useRouter()
    const { token } = router.query
    const [activated, setActivated] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
      if(token){
         axios.get(`/api/user/verification?token=${token}`,)
          .then(function (response) {
            setMessage(response.data.message)
          })
          .catch(function (error) {
            console.log(error.response.data.message);
          });
      }}, []);


  return (
    <>
    <Header/>
    <div className='max-w-screen-lg mx-auto p-10'>
      {/* { activated ? */}
      <div className='flex flex-col items-center bg-green-50 py-8 px-16 rounded-xl'>
        <p className='text-green-500'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg></p>
        <p className='text-sm'>Welcome to dutao</p>
        <h1>Account is now active</h1>
        <p className='text-base'>What's next? <Link href={'/login'}><span className='underline cursor-pointer'>continue login to account</span></Link></p>
      </div>
    {/* :
      <div className='flex flex-col items-center bg-red-50 py-8 px-14 rounded-xl'>
        <p className='text-red-500'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg></p>
        <p className='text-sm'>we are sorry</p>
        <h1>Something went wrong</h1>
        <p className='text-base'>What went wrong - {message}</p>
        <p className='text-base'>Need our help? <Link href={'/contact'}><span className='underline cursor-pointer'>contact us</span></Link></p>
      </div>
    } */}
    </div>
    <Footer/>
    </>
  )
}
  