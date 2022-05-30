import Image from "next/image"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

export default function footer() {
  const { t} = useTranslation('common')
  
    return (
      <footer className="bg-gray-50 mt-5 pt-5">
        <div className="hidden lg:block  max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className=" lg:text-left text-center">
            <Image src="/dutao.jpeg" alt="Picture of the author" width={200} height={63}/>
      
              <p className="max-w-xs lg:mx-0 mx-auto mt-2 text-sm text-gray-500">
              {t('footerAbout')}
              </p>
      
              <div className="flex mt-4 space-x-6 text-gray-500 lg:justify-start justify-center">
                <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
      
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
      
                <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Instagram </span>
      
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
      
                <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Twitter </span>
      
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
      
              </div>
            </div>
      
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 lg:text-left text-center">
              <div>
                <p className="text-red-500 font-bold">
                {t('recent')}
                </p>
      
                <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/property-for-rent/list?category=villa"> {t('villaR')} </a>
                  <a className="hover:opacity-75" href="/jobs"> {t('jobsD')} </a>
                  <a className="hover:opacity-75" href="/community/list?category=home-maintenance"> {t('homeMaintain')} </a>
                  <a className="hover:opacity-75" href="/jobs/list?category=sales-and-marketing"> {t('jobsMarketing')} </a>
                  <a className="hover:opacity-75" href="/info-center?category=bar&city=all&area=all"> {t('bars')} </a>
                  <a className="hover:opacity-75" href="/info-center?category=Restaurants&city=all&area=creek"> {t('restCreek')} </a>
                </nav>
              </div>
      
              <div>
                <p className="font-bold text-red-500">
                {t('city')}
                </p>
      
                <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href=""> {t('dubai')} </a>
                  <a className="hover:opacity-75" href=""> {t('abu')} </a>
                  <a className="hover:opacity-75" href=""> {t('shj')} </a>
                  <a className="hover:opacity-75" href=""> {t('ajm')} </a>
                  <a className="hover:opacity-75" href=""> {t('rak')} </a>
                  <a className="hover:opacity-75" href=""> {t('fjr')} </a>
                </nav>
              </div>
      
              <div>
                <p className="font-bold text-red-500">
                {t('support')}
                </p>
      
                <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/contact"> {t('contact')} </a>
                  <a className="hover:opacity-75" href="/faq"> {t('faq')} </a>
                  <a className="hover:opacity-75" href="/contact"> {t('call')} </a>
                </nav>
              </div>
      
              <div>
                <p className="font-bold text-red-500">
                {t('legal')}
                </p>
      
                <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/privacy-policy"> {t('policy')} </a>
                  <a className="hover:opacity-75" href="/terms-and-conditions"> {t('tnc')} </a>
                  <a className="hover:opacity-75" href="/about"> {t('about')} </a>
                  {/* <a className="hover:opacity-75" href=""> {t('accessiblity')} </a> */}
                </nav>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end ">
              <p className="text-xs text-gray-500 lg:text-left text-center">
                &copy; {t('dRights')}
              </p>
              <div className="flex">
                <Link href="https://apps.apple.com/app/dutao/id1622581343">
                  <div className="flex bg-black text-white border-2 px-4 py-1 rounded-xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    </svg>
                    <p className="text-sm">{t('ios')}</p>
                  </div>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=ae.dutao.app">
                  <div className="flex border-2 px-4 py-1 ml-4 text-white bg-black rounded-xl cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                    <p className="text-sm">{t('android')}</p>
                  </div>
                  </Link>
                </div>
            </div>
        </div>
      </footer>

    )
}