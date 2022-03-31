//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import SaleProperty from '../../models/propertyForSale'

function propertyForSale({property}) {
  return (
      <>
      <Header></Header>
      <CategorySlider></CategorySlider>
      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={"Properties for sale"} data={property}></FeaturedProducts>
      <Footer></Footer>
      </>
  )
}

export default propertyForSale



export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await SaleProperty.find().limit(7).lean();
  await db.disconnect();
  const property = JSON.parse(JSON.stringify(data));
  

  //setting props for frontend
  return {
    props: { property }
  };
}