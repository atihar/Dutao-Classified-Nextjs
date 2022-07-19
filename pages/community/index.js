//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import Community from '../../models/community'
import useTranslation from "next-translate/useTranslation"

export default function CommunityMain({communityItems}) {

  const {t} = useTranslation('common')
  const cat = [{
    name : t('autoService'),
    slug: "auto-service",
    image : "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('freelancers'),
    slug : "freelancers",
    image : "https://images.pexels.com/photos/3184459/pexels-photo-3184459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('tutorService'),
    slug : "tutor-service",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('maintenance'),
    slug : "home-maintenance",
    image : "https://images.pexels.com/photos/3770215/pexels-photo-3770215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('restoration'),
    slug : "restoration-service",
    image : "https://images.pexels.com/photos/5095282/pexels-photo-5095282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : t('healthService'),
    slug : "health-service",
    image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
]

  return (
      <>
      <Header></Header>
      <CategorySlider data={cat}></CategorySlider>
      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={t('community')} data={communityItems}></FeaturedProducts>
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
  // await db.disconnect();
  

  //setting props for frontend
  return {
    props: { communityItems }
  };
}