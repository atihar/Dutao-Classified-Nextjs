//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import Community from '../../models/community'
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation"

export default function CommunityMain({communityItems}) {
  const {t} = useTranslation('common')

  const cat = [{
    name : t('hotelDeals'),
    image : "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('rare'),
    image : "https://images.pexels.com/photos/3184459/pexels-photo-3184459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('homeDecor'),
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('entertainment'),
    image : "https://images.pexels.com/photos/3770215/pexels-photo-3770215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('coupons'),
    image : "https://images.pexels.com/photos/5095282/pexels-photo-5095282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('insurance'),
    image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
]

  return (
      <>
      <Header></Header>
      {/* <CategorySlider data={cat}></CategorySlider> */}
      <section className="overflow-hidden sm:max-w-screen-xl m-auto text-gray-700 mt-10">
            <div className="h-[400px] w-full flex items-center lg:pt-21 bg-black rounded-xl">
                  <h1 className="text-yellow-500 text-5xl font-bold text-center w-screen">{t('specialDeal')}</h1>
              </div>
          </section>
          <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div>
          <span className="inline-block w-12 h-1 bg-red-700"></span>

          <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            {t('popularDeal')}
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
          <a href="" className="block">
            <div className="flex justify-center">
              <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> {t('new')} </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="object-cover w-full -mt-3 h-96"
            />

            <h5 className="mt-4 text-sm text-black/90">
              {t('limitedSerum')}
            </h5>

            <div className="flex items-center justify-between mt-4 font-bold">
              <p className="text-lg">
                $189.99
              </p>

              <p className="text-xs tracking-wide uppercase">
                6 {t('color')}
              </p>
            </div>
          </a>

          <a href="" className="block">
            <div className="flex justify-center">
              <strong className="relative h-6 px-4 text-xs leading-6  uppercase bg-yellow-300"> {t('hot')} </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              className="object-cover w-full -mt-3 h-96"
            />

            <h5 className="mt-4 text-sm text-black/90">
              {t('limitedShoe')}
            </h5>

            <div className="flex items-center justify-between mt-4 font-bold">
              <p className="text-lg">
                $189.99
              </p>

              <p className="text-xs tracking-wide uppercase">
                6 {t('color')}
              </p>
            </div>
          </a>

          <a href="" className="block">
            <div className="flex justify-center">
              <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> {t('new')} </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="object-cover w-full -mt-3 h-96"
            />

            <h5 className="mt-4 text-sm text-black/90">
              {t('limitedTrainer')}
            </h5>

            <div className="flex items-center justify-between mt-4 font-bold">
              <p className="text-lg">
                <strike className="text-sm">$189.99</strike> AED 60.49
              </p>

              <p className="text-xs tracking-wide uppercase">
                6 {t('color')}
              </p>
            </div>
          </a>

          <a href="" className="block">
            <div className="flex justify-center">
              <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> {t('new')} </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              className="object-cover w-full -mt-3 h-96"
            />

            <h5 className="mt-4 text-sm text-black/90">
              {t('limitedTrainer')}
            </h5>

            <div className="flex items-center justify-between mt-4 font-bold">
              <p className="text-lg">
                $189.99
              </p>

              <p className="text-xs tracking-wide uppercase">
                6 {t('color')}
              </p>
            </div>
          </a>
        </div>
        <Link href={'/members'}>
          <div className="flex bg-gray-800 text-white justify-center text-sm p-2 space-x-3 rounded-lg mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
          <p>{t('seeMore')}</p>
        </div>
      </Link>
      </div>
    </section>
    
      <Footer></Footer>
      </>
  )
}



export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await Community.find().limit(7).lean();
  const communityItems = JSON.parse(JSON.stringify(data));
  await db.disconnect();
  

  //setting props for frontend
  return {
    props: { communityItems }
  };
}