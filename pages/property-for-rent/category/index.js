import db from '../../../lib/dbConnect';
import SaleProperty from '../../../models/propertyForSale';
import Header from '../../../components/header'
import Footer from '../../../components/footer';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';


export default function propertyCategory({ allProperties }) {

  // returning not found div if the array empty
  if(allProperties.length < 1) {
    return (
      <>
        <Header></Header>
        <section>
          <div className="m-10 p-10 text-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className='align-center justify-center flex h-[]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" className="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
              </svg>
            </div>
            <h1 className='font-bold text-4xl text-center'>No post found!</h1>
            <p>Try extending your search</p>
            </div>
          </section>
          <Footer></Footer>
      
      </>
    );
  }

  return (
    <>
    <Header></Header>
    <section>
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            {allProperties.map((property) => (
            <div className="flex justify-center py-2" key={property._id} >
              <Link href={'/property-for-sale/'+ property._id}>
              <div className="flex md:max-w-5xl w-[850px] rounded-lg bg-white shadow-lg">
                
                <img className="w-full h-1/6 md:h-auto md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/51/d9/b5/51d9b5fb038fbe2a8959bcf1f42d2dea.jpg" alt="" />
                
                <div className="p-6">
                  <div className="flex flex-2 mb-2">
                      <h5 className="text-gray-500 text-xl font-medium">
                        <TextTruncate
                          line={1}
                          element="span"
                          truncateText="…"
                          text={property.title}
                      /></h5>
                      <p className=" border ml-5 r-0 border-red-500 text-white bg-red-500 uppercase px-4 pt-2 rounded-full text-[8px] tracking-wide">Featured</p>
                  </div>
                  

                  <p className="mb-1 text-lg font-bold text-red-600">AED {property.price}</p>

                  <p className="text-gray-400 text-xs">Last updated 3 mins ago</p>

                  <p className="mb-2 text-sm text-gray-500">1 Bed 2 Baths 900sqft</p>

                    <p className='flex text-sm text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        Business Bay
                    </p>  
                    <a className="inline-block text-center px-8 py-2.5 text-sm font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring" href="">
                      <div className="flex"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                          </svg>
                          
                          <span className="px-5">Make a Call</span></div>
                      </a>                          
                </div>
              </div>
              </Link>
            </div>

            ))}
            {/* end of map loop */}
    </div>
    </section>
    
    <Footer></Footer>
      </>
  );
}

export async function getServerSideProps(context) {
  // const category = (parseInt(context.query)).toString();
  const category = context.query.name;
  console.log(category);
  //connecting db
  await db.connect();

  //setting data constant for the result for database
  const data = await SaleProperty.find({category: {"$regex": category}});
  await db.disconnect();
  const allProperties = JSON.parse(JSON.stringify(data));;

  //setting props for frontend
  return {
    props: { allProperties }
  };
}


