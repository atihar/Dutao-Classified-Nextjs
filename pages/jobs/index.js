//property for sale page
import Header from "../../components/header"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import RentProperty from '../../models/motors'
import Link from 'next/link'


function jobsIndex({property}) {
  return (
      <>
      <Header></Header>
      <section className="overflow-hidden max-w-screen-xl m-auto text-gray-700">
        <div className="relative p-10">
          <label className="sr-only" htmlFor="searchQuery"> Job Title, Responsibility, Company Name ..... </label>

          <input
            className="w-1/2 py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
            id="searchQuery"
            type="text"
            placeholder="Job Title, Responsibility, Company Name ....."/>
                  <select className="w-1/2 border-2 p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                      rounded transition ease-in-out focus:outline-none m-0">
                      <option value="">Where</option>
                      <option value="dubai">Dubai</option>
                      <option value="abu-dhabi">Abu Dhabi</option>
                      <option value="sharjah">Sharjah</option>
                      <option value="ajman">Ajman</option>
                  </select>

                <Link href ="/jobs/list"><button className="absolute p-6 text-white -translate-y-1/2 bg-red-600 rounded-full top-1/2 right-4" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
                </Link>
            </div>
            <div className="h-[400px] py-2 lg:pt-21">
              <h1 className="py-4 font-bold">Job search made easy</h1>
              <img className="rounded-xl" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg" width={1240} height={400}></img>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl py-6 px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="font-bold py-6">Featured Companies</h2>
            <div className="flex list-none space-x-16">
              <img className="border-2 rounded-lg shadow w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>
              <img className="border-2 rounded-lg shadow w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>
              <img className="border-2 rounded-lg shadow w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>
              <img className="border-2 rounded-lg shadow w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>
              <img className="border-2 rounded-lg shadow w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>
              <img className="border-2 rounded-lg shadow w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>

            </div>
          </div>
        </section>


      <FeaturedProducts title={"Jobs"} data={property}></FeaturedProducts>
      <section>
          <div className="max-w-screen-xl py-6 px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="font-bold py-6">How to land your first job in Dubai?</h2>
            <p className="text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
              the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and 
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line 
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h2 className="font-bold py-6">Best practice for creating a CV</h2>
            <p className="text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
              the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and 
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line 
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </section>
      <Footer></Footer>
      </>
  )
}

export default jobsIndex



export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await RentProperty.find().limit(7).lean();
  await db.disconnect();
  const property = JSON.parse(JSON.stringify(data));
  

  //setting props for frontend
  return {
    props: { property }
  };
}