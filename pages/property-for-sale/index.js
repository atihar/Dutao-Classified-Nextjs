//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import SaleProperty from '../../models/propertyForSale'
import useTranslation from "next-translate/useTranslation"

function PropertyForSale({property}) {
  const { t} = useTranslation('common')
  const cat = [{
    name : t('apt'),
    slug : "apartment",
    image : "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name : t('dup'),
    slug : "duplex",
    image : "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name : t('townhouse'),
    slug : "townhouse",
    image: "https://images.pexels.com/photos/5731086/pexels-photo-5731086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name : t('villa'),
    slug : "villa",
    image : "https://www.arabianbusiness.com/cloud/2021/09/14/Uyfyy1ax-palm-villa-for-rent-1200x800.jpg"
},
{
    name : t('commercial'),
    slug : "commercial",
    image : "https://i.pinimg.com/originals/3b/4f/fb/3b4ffbe685105f0f9d648d221415e54d.jpg"
},
{
    name : t('penthouse'),
    slug : "penthouse",
    image: "https://www.cntravellerme.com/2021/05/rOhCf6oN-FPJD---The-Penthouse-(18)-1200x800.jpg"
}
]

  return (
      <>
      <Header></Header>
      <CategorySlider data={cat}></CategorySlider>
      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={t('property')} data={property}></FeaturedProducts>
      <Footer></Footer>
      </>
  )
}

export default PropertyForSale



export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await SaleProperty.find().limit(7).lean();
  const property = JSON.parse(JSON.stringify(data));
  // await db.disconnect();
  

  //setting props for frontend
  return {
    props: { property }
  };
}