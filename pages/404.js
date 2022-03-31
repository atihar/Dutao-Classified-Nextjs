import Header from '../components/header'
import Link from 'next/link'

export default function NotFound() {
  return (
      <>
      <Header></Header>
        <div className='max-w-lg w-screen mx-auto p-4'>
            <div className="text-center">
            <img
                src="https://www.hyperui.dev/photos/confused-travolta.gif"
                alt="John Travolta confused"
                className="object-cover w-full h-64 rounded-lg"
            />

            <p className="mt-6 text-gray-500">We can't find anything, try searching again.</p>
            


            <Link href="/login"><a className="inline-block px-12 py-3 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Back to home</a>
            </Link>

            </div>
        </div>

      </>
  )
}