// featured place with city image component
export default function featuredPlace(){
    return(
        <section className="overflow-hidden max-w-screen-xl m-auto text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-21 lg:px-6">
            <h1 className="py-4 font-bold">Popular Areas</h1>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2 relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://d3mgaxfqdimhxa.cloudfront.net/wp-content/uploads/migrated/DUBAI-MARINA-GUIDE_0005_ROH_STOCK_HIGH_00097.jpg"/>
                  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-base sm:text-6xl text-white font-semibold">Marina</div>
              </div>
              <div className="w-1/2 p-1 md:p-2 relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/3462514/pexels-photo-3462514.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&dpr=1"/>
                                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-base sm:text-6xl text-white font-semibold">Jumirah</div>
              </div>
              <div className="w-full p-1 md:p-2 relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/10/fCsshvnp-JW-Marriott-Marquis-Business-Bay.jpg"/>
                                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-base sm:text-6xl text-white font-semibold">Business Bay</div>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2 relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://d3mgaxfqdimhxa.cloudfront.net/wp-content/uploads/migrated/ROVE-DOWNTOWN-ARTICLE_0002_les-corpographes-VwNRuTK4JZg-unsplash.jpg"/>
                  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-base sm:text-6xl text-white font-semibold">Downtown</div>
              </div>
              <div className="w-1/2 p-1 md:p-2 relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://imagevars.gulfnews.com/2020/12/07/Jumeirah-Lake-Towers--JLT-_1763c6bebb7_large.jpg"/>
                  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-base sm:text-6xl text-white font-semibold"> JLT </div>
              </div>
              <div className="w-1/2 p-1 md:p-2 relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://agmcdn.bayut.com/buildings/wp-content/uploads/sites/2/2019/10/International-City-Spain-Cluster-20201210-1024x640.jpg"/>
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-base sm:text-6xl text-white font-semibold">Int. City</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}