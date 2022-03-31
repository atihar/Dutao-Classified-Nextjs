//property for sale page
import Header from "../../components/header"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import RentProperty from '../../models/motors'


function propertyForSale({property}) {
  return (
      <>
      <Header></Header>
      <section className="overflow-hidden max-w-screen-xl m-auto text-gray-700">
        <div className="h-[400px] py-2 lg:pt-21">
            <h1 className="py-4 font-bold">Search for your next car on Dutao</h1>
            <img className="rounded-xl" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg" width={1240} height={400}></img>
        </div>
        </section>

      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={"Motos"} data={property}></FeaturedProducts>
      <Footer></Footer>
      </>
  )
}

export default propertyForSale



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