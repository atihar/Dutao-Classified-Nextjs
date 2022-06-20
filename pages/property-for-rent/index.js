//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import RentProperty from '../../models/propertyForRent'
import useTranslation from "next-translate/useTranslation"

export default function propertyForRent({property}) {
  const { t} = useTranslation('common')
  const cat = [{
    name : t('apt'),
    slug: "apartment",
    image : "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=350&dpr=1"
},
{
    name : t('dup'),
    slug: "duplex",
    image : "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=400&h=350&dpr=1"
},
{
    name : t('townhouse'),
    slug : "townhouse",
    image: "https://images.pexels.com/photos/5731086/pexels-photo-5731086.jpeg?auto=compress&cs=tinysrgb&w=4000&h=750&dpr=1"
},
{
    name : t('villa'),
    slug : "villa",
    image : "https://images.pexels.com/photos/5731086/pexels-photo-5731086.jpeg?auto=compress&cs=tinysrgb&w=4000&h=750&dpr=1"
},
{
    name : t('commercial'),
    slug : "commercial",
    image : "https://images.pexels.com/photos/5731086/pexels-photo-5731086.jpeg?auto=compress&cs=tinysrgb&w=4000&h=750&dpr=1"
},
{
    name : t('penthouse'),
    slug: "penthouse",
    image: "https://images.pexels.com/photos/5731086/pexels-photo-5731086.jpeg?auto=compress&cs=tinysrgb&w=4000&h=750&dpr=1"
}
]

  return (
      <>
      <Header></Header>
      <CategorySlider data={cat}></CategorySlider>
      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={t('property')} data={property} prefixLink={'property-for-rent'}></FeaturedProducts>
      <Footer></Footer>
      </>
  )
}




export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await RentProperty.find().limit(7).lean();
  const property = await JSON.parse(JSON.stringify(data));
  await db.disconnect();
  

  //setting props for frontend
  return {
    props: { property }
  };
}