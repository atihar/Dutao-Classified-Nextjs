//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'
import db from '../../lib/dbConnect'
import Community from '../../models/community'

export default function CommunityMain({communityItems}) {
  return (
      <>
      <Header></Header>
      <CategorySlider></CategorySlider>
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
  await db.disconnect();
  const communityItems = JSON.parse(JSON.stringify(data));
  

  //setting props for frontend
  return {
    props: { communityItems }
  };
}