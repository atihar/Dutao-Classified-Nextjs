import Header from '../components/header'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
      <>
      <Header></Header>
        <div className='max-w-lg w-screen mx-auto p-4'>
            <div className="text-center">
            <img
                src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif"
                alt="John Travolta confused"
                className="object-cover w-full h-64 rounded-lg"
            />

            {/* <p className="mt-6 text-gray-500">We cant find anything, try searching again.</p> */}
            


            <Link href="/login"><a className="inline-block px-12 mt-6 py-3 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Back to home</a>
            </Link>

            </div>
        </div>

      </>
  )
}