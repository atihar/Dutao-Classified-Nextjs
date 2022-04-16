//property for sale page
import Header from "../../components/header"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer-2'
import db from '../../lib/dbConnect'
import Jobs from '../../models/jobs'
import Link from 'next/link'
import React,{useState} from 'react'


function jobsIndex({job}) {
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState('all')

  const cityHandler = (e) =>{ setCity(e.target.value)}
  const searchHandler = (e) => {setKeyword(e.target.value)}


  return (
      <>
      <Header></Header>
      <section className="overflow-hidden w-full max-w-screen-xl m-auto text-gray-700">
        <div className="relative p-10">
          <label className="sr-only" htmlFor="searchQuery"> Job Title, Responsibility, Company Name ..... </label>

          <input
            className="w-1/2 py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
            id="searchQuery"
            type="text"
            placeholder="Job Title, Responsibility, Company Name ....." onChange={searchHandler}/>
                  <select className="w-1/2 border-2 p-4 text-sm text-gray-400 bg-clip-padding bg-no-repeat
                      rounded transition ease-in-out focus:outline-none m-0" onChange={cityHandler}>
                      <option value="">Where</option>
                      <option value="dubai">Dubai</option>
                      <option value="abu-dhabi">Abu Dhabi</option>
                      <option value="sharjah">Sharjah</option>
                      <option value="ajman">Ajman</option>
                  </select>

                <Link href ={`/jobs/list/?searchQuery=${keyword}&city=${city}`}><button className="absolute p-6 text-white -translate-y-1/2 bg-red-600 rounded-full top-1/2 right-4" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
                </Link>
            </div>

          <div className="relative">
                <img alt="gallery" className="block object-cover object-center w-full h-[500px] rounded-xl"
                  src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"/>
                  <div className="duration-300 absolute inset-0 z-10 flex p-12 text-7xl text-white font-semibold">Job Search<br/> Made Easy</div>
                  
          </div>
          <div className="py-5 grid grid-cols-2 space-x-4">
          <div className="relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                  <div className="duration-300 absolute inset-0 z-10 flex p-12 text-5xl text-white font-bold">Let Employer Find You</div>
                  
          </div>
          <div className="relative">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                  <div className="duration-300 absolute inset-0 z-10 flex p-12 text-5xl text-white font-bold">I am a recruiter</div>
          </div>
        </div>
        </section>
        <section>
          <div className="max-w-screen-xl py-6 px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="font-bold pt-10">Featured Companies</h2>
            <div className="flex list-none space-x-16">
              <img className="w-36 " src={'https://uilogos.co/img/logotype/circle.png'}/>
              <img className="w-36 " src={'https://uilogos.co/img/logotype/solaytic.png'}/>
              <img className="w-36 " src={'https://uilogos.co/img/logotype/hexa.png'}/>
              <img className="w-36 " src={'https://uilogos.co/img/logotype/muzica.png'}/>
              <img className="w-36 " src={'https://uilogos.co/img/logotype/lightai.png'}/>
              <img className="w-36 " src={'https://uilogos.co/img/logotype/nirastate.png'}/>

            </div>
          </div>
        </section>
        
      <FeaturedProducts title={"Jobs"} data={job}></FeaturedProducts>
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
  const data = await Jobs.find().limit(7).lean();
  await db.disconnect();
  const job = JSON.parse(JSON.stringify(data));
  

  //setting props for frontend
  return {
    props: { job }
  };
}