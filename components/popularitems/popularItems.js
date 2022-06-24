import Link from 'next/link';
import TextTruncate from 'react-text-truncate';
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';


export default function popularItems(props) {
    //receiving props data and getting ready for mapping
    const data = props.data
    const title = props.title
    const btnLink = props.btnLink
    const { t, lang } = useTranslation('common')
  return(
      <>
      {/* popular residential for rent */}

    <section>
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        <div className="flex items-center p-1 sm:p-8 rounded w-full ">
            <div className="flex sm:block justify-between w-full">
            <h2 className="text-base sm:text-2xl pt-5 sm:pt-0 font-bold">
                {title}
            </h2>
            
            <Link href={btnLink}>
                <a className="inline-flex sm:px-6 py-4 sm:py-3 mt-1 sm:mt-6 text-sm sm:text-white sm:bg-red-600 rounded-lg hover:bg-red-500 transition ease-in-out delay-150 hover:translate-x-1">
            
                {t('viewMore')}
            
                    <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
                </a>
            </Link>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:py-8">
            {data && data.map((x,i) => {
                return(
                    <Link href={`${btnLink}/${x._id}`} key={i}>
                    <a className="block" >
                    <Image
                        src={`https://dutao-public.s3.amazonaws.com/${x.images[0]}`}
                        alt="dutao image"
                        width={500}
                        height={320}
                        className="object-cover rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
                        loading='lazy'
                    />
                    <div className='mt-3 flex justify-between'>
                        <p className="flex text-sm text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                            </svg>
                            {x.category}
                        </p>
                        <p className="text-sm sm:text-base font-bold text-gray-700">
                            AED {x.price}
                        </p>
                    </div>
                    <h5 className="text-base ">
                        <TextTruncate line={1} element="span" truncateText="…"
                                text={x.title}
                            />
                    </h5>
                    </a>
                    </Link>
            )})}
            
        </div>
        </div>
    </div>
    </section>
      </>
  )
}