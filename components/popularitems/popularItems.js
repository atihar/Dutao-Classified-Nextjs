import Link from 'next/link';
import TextTruncate from 'react-text-truncate';

export default function popularItems(props) {
    //receiving props data and getting ready for mapping
    const data = props.data
    const title = props.title
    const btnLink = props.btnLink

  return(
      <>
      {/* popular residential for rent */}

    <section>
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        <div className="flex items-center p-1 sm:p-8 rounded w-full ">
            <div className="">
            <h2 className="text-base sm:text-2xl font-bold">
                Popular {title}
            </h2>

            {/* <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cupiditate mollitia saepe vitae libero nobis.
            </p> */}

            <a
                href={btnLink}
                className="inline-block px-6 py-3 mt-1 sm:mt-6 text-sm text-white bg-red-600 rounded-lg"
            >
                View more
            </a>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-8">
            {data && data.map((x,i) => {
                return(
                    <a
                    href="/product/simple-watch"
                    className="block"
                    key={i}
                    >
                    <div className="aspect-w-1 aspect-h-1 ">
                        <img
                        alt="dutao listings"
                        className="object-cover rounded"
                        src={"https://dutao.s3.me-south-1.amazonaws.com/" + x.images[0] }
                        />
                    </div>
        
                    <div className="mt-2">
                        <h5 className="font-medium text-base ">
                        <TextTruncate
                                line={1}
                                element="span"
                                truncateText="…"
                                text={x.title}
                            />
                        </h5>
        
                        <p className="mt-1 text-sm text-gray-700">
                        AED 250000
                        </p>
                    </div>
                    </a>
            )})}
            
        </div>
        </div>
    </div>
    </section>
      </>
  )
}