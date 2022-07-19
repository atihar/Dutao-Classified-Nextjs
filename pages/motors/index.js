//property for sale page
import Header from "../../components/header"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import Motors from '../../models/motors'
import useTranslation from 'next-translate/useTranslation';


export default function Motor({motor}) {
  const {t} = useTranslation('common')
  return (
      <>
      <Header></Header>
      <section className="overflow-hidden max-w-screen-xl m-auto text-gray-700">
        <div className="h-[400px] p-2 lg:pt-21">
            <h1 className="py-4 font-bold">{t('motorSearch')}</h1>
            <img className="rounded-xl" src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" loading='lazy'></img>
        </div>
        </section>

      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={t('motors')} data={motor}></FeaturedProducts>
      <Footer></Footer>
      </>
  )
}



export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await Motors.find().limit(7).lean();
  const motor = JSON.parse(JSON.stringify(data));
  // await db.disconnect();
  

  //setting props for frontend
  return {
    props: { motor }
  };
}