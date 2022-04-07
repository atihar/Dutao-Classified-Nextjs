//property for sale page
import Header from "../../components/header"
import CategorySlider from "../../components/category"
import FeaturedPlace from "../../components/featuedPlaces"
import FeaturedProducts from "../../components/featuredProducts"
import Footer from '../../components/footer'

export default function infocenter() {
  return (
      <>
      <Header></Header>
        <div className="max-w-screen-xl">
            <h1>Search with place + category(restaurant, bar, hospital, etc................</h1>
        </div>
      <Footer></Footer>
      </>
  )
}



// export async function getServerSideProps() {
//   //connecting db
//   await db.connect();

//   //setting data constant for the result for database
//   const data = await SaleProperty.find().limit(7).lean();
//   await db.disconnect();
//   const property = JSON.parse(JSON.stringify(data));
  

//   //setting props for frontend
//   return {
//     props: { property }
//   };
// }