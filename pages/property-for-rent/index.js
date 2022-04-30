//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import RentProperty from '../../models/propertyForRent'

function propertyForSale({property}) {
  const cat = [{
    name : "Apartment",
    image : "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name : "Duplex",
    image : "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name : "Townhouse",
    image: "https://images.pexels.com/photos/5731086/pexels-photo-5731086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      <FeaturedProducts title={"Properties for rent"} data={property}></FeaturedProducts>
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