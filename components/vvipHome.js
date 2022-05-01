import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function vvipHome() {
    const { t} = useTranslation('common')
  return (
    <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative bg-white mb-3">
                    <img
                    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                    src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Couple on a bed with a dog"
                />

                <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent shadow-lg"></div>

                <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-3/4 lg:items-center">
                    <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        {t('oneYearPremium')}
                        <strong className="font-extrabold text-red-500 sm:block">
                        {t('throughSignup')}
                        </strong>
                    </h1>

                    <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                        {t('homeGetSpecialProducts')}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 text-center">
                        <Link href={'/vip'}><a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-red-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring">
                        Get Started
                        </a></Link>

                    </div>
                    </div>
                </div>
                
                </div>          
            </div>
        </section>
  )
}
