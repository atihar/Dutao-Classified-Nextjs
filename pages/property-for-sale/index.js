//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import SaleProperty from '../../models/propertyForSale'

function propertyForSale({property}) {
  const cat = [{
    name : "Apartment",
    image : "https://16k9k93lbits338g7b4f36r5-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/landlord-resources-blueground-boston-apt.jpg"
},
{
    name : "Duplex",
    image : "https://www.architectandinteriorsindia.com/cloud/2021/11/15/unnamed-(83).jpg"
},
{
    name : "Townhouse",
    image: "https://croc.world/wp-content/uploads/2020/09/3sama-townhouses.jpg"
},
{
    name : "Villa",
    image : "https://www.arabianbusiness.com/cloud/2021/09/14/Uyfyy1ax-palm-villa-for-rent-1200x800.jpg"
},
{
    name : "Commercial",
    image : "https://i.pinimg.com/originals/3b/4f/fb/3b4ffbe685105f0f9d648d221415e54d.jpg"
},
{
    name : "Penthouse",
    image: "https://www.cntravellerme.com/2021/05/rOhCf6oN-FPJD---The-Penthouse-(18)-1200x800.jpg"
}
]

  return (
      <>
      <Header></Header>
      <CategorySlider data={cat}></CategorySlider>
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