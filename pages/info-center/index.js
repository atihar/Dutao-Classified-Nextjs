//property for sale page
import Header from "../../components/header"
import Footer from '../../components/footer'
import Link from "next/link"

export default function infocenter() {
  return (
      <>
      <Header></Header>
      <section className="overflow-hidden max-w-screen-xl m-auto text-gray-700">
        <div className="relative p-10">
          <label className="sr-only" htmlFor="searchQuery"> Job Title, Responsibility, Company Name ..... </label>

          <select className="w-1/2 border-2 p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                rounded transition ease-in-out focus:outline-none m-0">
                <option value="">Select Location</option>
                <option value="dubai">Dubai</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
                <option value="ajman">Ajman</option>
            </select>
            <select className="w-1/2 border-2 p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                rounded transition ease-in-out focus:outline-none m-0">
                <option value="">Activity/Type</option>
                <option value="business">Business</option>
                <option value="hospital">Hospital</option>
                <option value="bank">Bank</option>
                <option value="food">Food</option>
                <option value="bar">Bar</option>
                <option value="events">Events</option>
                <option value="super-market">Super Market</option>
                <option value="events">Hotels</option>
            </select>

                <Link href ="/info-center/list"><button className="absolute p-6 text-white -translate-y-1/2 bg-red-600 rounded-full top-1/2 right-4" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
                </Link>
            </div>
            <div className="h-[400px] py-2 lg:pt-21">
              <h1 className="py-4 font-bold">Getting around is more easy with Dutao</h1>
              <img className="rounded-xl" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg" width={1240} height={400}></img>
          </div>
        </section>
      <Footer></Footer>
      </>
  )
}



// export async function getServerSideProps() {
//   //connecting db
//   await db.connect();

//   //setting data constant for the result for database
//   const data = await SaleProperty.find().limit(7).lean();
//   await db.disconnect();
//   const property = JSON.parse(JSON.stringify(data));
  

//   //setting props for frontend
//   return {
//     props: { property }
//   };
// }