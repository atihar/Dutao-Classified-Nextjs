import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

function profile() {
  return (
      <>
        <Header></Header>
        <div className='max-w-screen-xl w-screen mx-auto py-4 px-8 my-4 rounded-lg shadow '>
        <h2 className="font-bold py-5"> Dutao User Dashboard</h2>
            <div className="grid grid-cols-[1fr_3fr] gap-4">
                <div>
                    <ul className="text-base space-y-4">
                        <Link href={'/profile'}><li className="text-white py-2 px-4 rounded-lg active">My Profile</li></Link>
                        <Link href={'/profile/manage/property-for-sale'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Ads</li></Link>
                        <Link href={'/profile/manage/jobs'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Manage Recruitments</li></Link>
                        <Link href={'/profile/my-information'}><li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Information</li></Link>
                        <li className="hover:bg-gray-100 py-2 px-4 rounded-lg">My Searches</li>
                        <li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Settings</li>
                        <li className="hover:bg-gray-100 py-2 px-4 rounded-lg">Subscription</li>
                    </ul>
                </div>
                <div>
                    <div className="flex space-x-8">
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base">My Ads</p>
                            <p className="font-bold">30</p>
                        </div>
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base">Searches</p>
                            <p className="font-bold">4</p>
                        </div>
                        <div className="flex-1 text-center px-6 py-4 bg-red-600 text-white rounded-lg">
                            <p className="text-base">Favorites</p>
                            <p className="font-bold">10</p>
                        </div>                                          
                    </div>

                    <div className="py-5 w-full">
                        <h2>Profile</h2>
                        <hr/>
                        <p className="text-base py-4"><input className="border-b-2 border-gray-300" value="John Doe" readOnly/></p>
                        <p className="text-base py-4"><input className="border-b-2 border-gray-300" value="0589717872" readOnly/></p>
                        <p className="text-base py-4"><input className="border-b-2 border-gray-300" value="john@gmail.com" readOnly/></p>
                        <p className="text-base py-4"><input className="border-b-2 border-gray-300" value="John Doe" readOnly/></p>                            
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer></Footer>
      </>

  )
}

export default profile