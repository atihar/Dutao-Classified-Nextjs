import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
    <Header></Header>
    <section>
      <div className="flex items-center justify-center p-4 box my-8">
      <div className="flex border-2 rounded shadow w-2/5">
          <input type="text" className="px-4 py-2 w-5/6 text-center" placeholder="How can we help you?"></input>
          <div className="my-auto border-r py-4"></div>
          <button className="flex items-center justify-center px-4 m-auto">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
          </button>
      </div>
      </div>
      <div className="container mx-auto">
        <div className=" p-4 grid grid-cols-1 xl:grid-cols-10">
          
            
                <div class="items-center justify-center my-4 md:col-span-5 md:col-start-2 bg-gray-50">
                    <div class="top-40 shadow rounded py-12 lg:px-28 px-8">
                        <p class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let's connect for your queries!</p>
                        <div class="md:flex items-center mt-12">
                            <div class="w-full flex flex-col">
                                <label class="text-base font-semibold leading-none text-gray-800">Name</label>
                                <input tabindex="0" arial-label="Please input name" type="name" class="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input  name" />
                            </div>
                            <div class="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label class="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                <input tabindex="0" arial-label="Please input email address" type="name" class="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input email address" />
                            </div>
                        </div>
                        <div class="md:flex items-center mt-8">
                            <div class="w-full flex flex-col">
                                <label class="text-base font-semibold leading-none text-gray-800">Category</label>
                                <input tabindex="0" role="input" arial-label="Please input company name" type="name" class="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input company name" />
                            </div>
                            <div class="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label class="text-base font-semibold leading-none text-gray-800">Query type</label>
                                <input tabindex="0" arial-label="Please input country name" type="name" class="text-base leading-none text-gray-900 py-3 px-1 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300" placeholder="Please input country name" />
                            </div>
                        </div>
                        <div>
                            <div class="w-full flex flex-col mt-8">
                                <label class="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-300 resize-none"></textarea>
                            </div>
                        </div>
                        <p class="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                        <div class="flex items-center justify-center w-full">
                            <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-red-600 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none w-full">SUBMIT</button>
                        </div>
                    </div>
                </div>
          
                <div style={{height: "max-content"}} className="shadow-sm items-center justify-center text-center border-gray-100 border-solid border-b-2 rounded my-4 md:col-span-2 md:col-start-8 max-h-full">
                    <div class="top-40 rounded py-3 px-4 bg-gray-100">
                        <p class="md:text-xl font-bold leading-7 text-center text-gray-700">Quick Links</p>
                    </div>
                    <div class="flex justify-center font-semibold py-8">
                        <div class="w-96 text-gray-500">
                                <a
                            href="/about"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                             About us
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                            Frequently asked Questions
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                               
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                            Download app
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                            fourth link item 
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                             Start your business with us
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                            Support
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                             Top Cities
                            </a>
                            <a
                            href="#!"
                            class="
                                block
                                px-6
                                py-4
                                text-base
                                w-full
                                hover:text-red-600 hover:boreder-gray-100 hover:underline
                                
                                transition
                                duration-500
                                cursor-pointer
                            "
                            >
                             Social Medias
                            </a>
                        </div>
                    </div>
                    
                </div>
        </div> 
      </div>   
    </section>
    <Footer></Footer>
    </>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}