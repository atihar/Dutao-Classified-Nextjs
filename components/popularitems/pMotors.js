import Link from 'next/link';
import NavModules from '../navModules';

export default function PopMotors() {

  return(
      <>
      {/* popular residential for rent */}

    <section>
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch ">
        <div className="flex items-center p-8 rounded">
            <div className="lg:text-left">
            <h2 className="text-2xl font-bold">
                Popular Motors
            </h2>

            {/* <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cupiditate mollitia saepe vitae libero nobis.
            </p> */}

            <a
                href="/collections/watches"
                className="inline-block px-6 py-3 mt-6 text-sm text-white bg-red-600 rounded-lg"
            >
                View more
            </a>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-8">
            <a
            href="/product/simple-watch"
            className="block"
            >
            <div className="aspect-w-1 aspect-h-1">
                <img
                loading="lazy"
                alt="Simple Watch"
                placeholder="blur"
                className="object-cover rounded"
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                />
            </div>

            <div className="mt-2">
                <h5 className="font-medium">
                Speedy wind
                </h5>

                <p className="mt-1 text-sm text-gray-700">
                $150
                </p>
            </div>
            </a>

            <a
            href="/product/simple-watch"
            className="block"
            >
            <div className="aspect-w-1 aspect-h-1">
                <img
                loading="lazy"
                alt="Simple Watch"
                placeholder="blur"
                className="object-cover rounded"
                src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
                />
            </div>

            <div className="mt-2">
                <h5 className="font-medium">
                Best of the town
                </h5>

                <p className="mt-1 text-sm text-gray-700">
                $150
                </p>
            </div>
            </a>

            <a
            href="/product/simple-watch"
            className="block"
            >
            <div className="aspect-w-1 aspect-h-1">
                <img
                loading="lazy"
                alt="Simple Watch"
                placeholder="blur"
                className="object-cover rounded"
                src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg"
                />
            </div>

            <div className="mt-2">
                <h5 className="font-medium">
                Car Model 3
                </h5>

                <p className="mt-1 text-sm text-gray-700">
                $150
                </p>
            </div>
            </a>
        </div>
        </div>
    </div>
    </section>
      </>
  )
}