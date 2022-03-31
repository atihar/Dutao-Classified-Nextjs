// Homepage w
import Header from '../components/header' 
import CategoryComponent from '../components/categoryComponent'
import PopularResidentials from '../components/popularitems/pResidentials'
import PMotors from '../components/popularitems/pMotors'
import Footer from '../components/footer'
import VVIP from '../components/vvipHome'
import Slider from '../components/sliders/topSlider'
import Slider2 from '../components/sliders/secondSlider'
import Slider3 from '../components/sliders/thirdSlider'
import PSecondHand from '../components/popularitems/pSecondHand'
import PSpecialProduct from '../components/popularitems/pSpecials'
import PHomeServices from '../components/popularitems/pHomeService'
import PJobs from '../components/popularitems/pJobs'
import PCommunity from '../components/popularitems/pCommunity'
import CategoryCard from '../components/categoryCard'

const Index = () => (
  <>
   <Header></Header>
   <Slider></Slider>
   <CategoryComponent></CategoryComponent>
   <Slider2></Slider2>
   <PopularResidentials></PopularResidentials> 
   <PMotors></PMotors>
   {/* <PSecondHand></PSecondHand>
   <Slider3></Slider3>
   <PSpecialProduct></PSpecialProduct>
   <PJobs></PJobs>
   <PHomeServices></PHomeServices>
   <VVIP></VVIP> 
   <PCommunity></PCommunity>
   <Slider3></Slider3>
   <CategoryCard></CategoryCard> */}
   <Footer></Footer>
  </>
)

export default Index