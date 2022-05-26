//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import Community from '../../models/community'

export default function CommunityMain({communityItems}) {

  const cat = [{
    name : "Auto Service",
    image : "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : "Freelancers",
    image : "https://images.pexels.com/photos/3184459/pexels-photo-3184459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : "Tutor Service",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : "Maintenance",
    image : "https://images.pexels.com/photos/3770215/pexels-photo-3770215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : "Restoration",
    image : "https://images.pexels.com/photos/5095282/pexels-photo-5095282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
    name : "Health Service",
    image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
]

  return (
      <>
      <Header></Header>
      <CategorySlider data={cat}></CategorySlider>
      <FeaturedPlace></FeaturedPlace>
      <FeaturedProducts title={"Community"} data={communityItems}></FeaturedProducts>
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