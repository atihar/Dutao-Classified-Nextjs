// Homepage w
import Header from '../components/header' 
import CategoryComponent from '../components/categoryComponent'
import PopularItemComponent from '../components/popularitems/popularItems'
import Footer from '../components/footer'
import VVIP from '../components/vvipHome'
import Slider from '../components/slider'
import PSecondHand from '../components/popularitems/pSecondHand'
import PSpecialProduct from '../components/popularitems/pSpecials'
import PHomeServices from '../components/popularitems/pHomeService'
import PJobs from '../components/popularitems/pJobs'
import PCommunity from '../components/popularitems/pCommunity'
import CategoryCard from '../components/categoryCard'
import db from '../lib/dbConnect'
import SaleProperty from '../models/propertyForSale'
import Motors from '../models/motors'




const slider1 = [
  { url: "https://i.postimg.cc/y8P33x27/Dutao-Ads-004.png" },
  { url: "https://i.postimg.cc/fWtdqwSv/Dutao-Ads-01.png" },
  { url: "https://i.postimg.cc/MTX6TpJ3/Dutao-Ads-02.png" },
  { url: "https://i.postimg.cc/bvmYp2W2/Dutao-Ad-08.png" },
  { url: "https://i.postimg.cc/y8z8PK0W/Dutao-Ad-004.png" },
];

const slider2 = [
  { url: "https://i.postimg.cc/bvmYp2W2/Dutao-Ad-08.png" },
  { url: "https://i.postimg.cc/59hCZZwW/Dutao-Ad-05.png" },
  { url: "https://i.postimg.cc/521FtL7P/Dutao-Ad-06.png" }
];


export default function Index({property, motors}){
  return(
  <>
   <Header></Header>
   <Slider data={slider1}></Slider>
   <CategoryComponent></CategoryComponent>
   <Slider data={slider2}></Slider>
   <PopularItemComponent title={"Properties"} data={property} btnLink={"/property-for-sale"}></PopularItemComponent> 
   <PopularItemComponent title={"Motors"} data={motors} btnLink={"/motors"}></PopularItemComponent> 
   {/* <PSecondHand></PSecondHand> */}
   {/* <Slider data={slider3}></Slider> */}
   {/* <PSpecialProduct></PSpecialProduct> */}
   <PJobs></PJobs>
   {/* <PHomeServices></PHomeServices> */}
   <VVIP></VVIP> 
   {/* <PCommunity></PCommunity>
   <CategoryCard></CategoryCard> */}
   <Footer></Footer>
  </>
  )}


export async function getServerSideProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await SaleProperty.find().limit(3).lean();
  const property = JSON.parse(JSON.stringify(data));

  //setting data constant for the result for database
  const motorData = await Motors.find().limit(3).lean();
  const motors = JSON.parse(JSON.stringify(motorData));
    await db.disconnect();
  

  //setting props for frontend
  return {
    props: { property, motors }
  };
}
