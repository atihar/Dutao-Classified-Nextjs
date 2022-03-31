export default function vvipHome() {
  return (
    <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative bg-white mb-3">
                    <img
                    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                    src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
                    alt="Couple on a bed with a dog"
                />

                <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent shadow-lg"></div>

                <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-3/4 lg:items-center">
                    <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Get Now Your
                        <strong className="font-extrabold text-red-500 sm:block">
                        1 year of Premium.
                        </strong>
                    </h1>

                    <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 text-center">
                        <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-red-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                        Get Started
                        </a>

                        <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-red-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                
                </div>          
            </div>
        </section>
  )
}
