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
import useTranslation from 'next-translate/useTranslation'




const slider1 = [
  { url: "/banners/Dutao_Ads_01.jpg" },
  { url: "/banners/Dutao_Ads_02.jpg" },
  { url: "/banners/Dutao_Ads_03.jpg" },
  { url: "/banners/Dutao_Ads_04.jpg" },
  { url: "/banners/Dutao_Ads_05.jpg" },
];

const slider2 = [
  { url: "/banners/Dutao_Ads_03.jpg" },
  { url: "/banners/Dutao_Ads_04.jpg" },
  { url: "/banners/Dutao_Ads_05.jpg" }
];


export default function Index({property, motors}){
  const {t} = useTranslation('common')
  return(
  <>
   <Header></Header>
   <Slider data={slider1}></Slider>
   <CategoryComponent></CategoryComponent>
   <Slider data={slider2}></Slider>
   <PopularItemComponent title={t('property')} data={property} btnLink={"/property-for-sale"}></PopularItemComponent> 
   <PopularItemComponent title={t('motors')} data={motors} btnLink={"/motors"}></PopularItemComponent> 
   {/* <PSecondHand></PSecondHand> */}
   {/* <Slider data={slider3}></Slider> */}
   {/* <PSpecialProduct></PSpecialProduct> */}
   <PJobs></PJobs>
   {/* <PHomeServices></PHomeServices> */}
   {/* <VVIP></VVIP>  */}
   {/* <PCommunity></PCommunity>
   <CategoryCard></CategoryCard> */}
   <Footer></Footer>
  </>
  )}

export async function getStaticProps() {
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await SaleProperty.find().limit(2).lean();
  const property = JSON.parse(JSON.stringify(data));

  //setting data constant for the result for database
  const motorData = await Motors.find().limit(2).lean();
  const motors = JSON.parse(JSON.stringify(motorData));
  await db.disconnect();
  

  //setting static props for data generation for frontend
  return {
    props: { property, motors }
  };
}
