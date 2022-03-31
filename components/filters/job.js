
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'


export default function filter() {

    const router = useRouter();

    // initiating search param from start/reset
    const queryObj = {
      searchQuery : 'all',
      category : 'all',
      city : 'all',
      work_experience : 'all',  //instead of price from property
      // sort : 'featured',
      area : 'all',
      employment_type : 'all',
      education_requirement : 'all',
      remote: 'all',
    };


    const {
        register,
        handleSubmit,
        reset,
        formState: { data },
      } = useForm();
      

    const resetQuery = () => {
        const path = router.pathname;
        const { query } = router;
        router.push({
          pathname: path,
          query: queryObj
        });
    }

    // setting values and passing to params for search and filter
    const onSubmit = ({
      page,
      category,
      city,
      sort,
      searchQuery,
      area,
      employment_type,
      work_experience,
      education_requirement,
      remote
    }) => {
      const path = router.pathname;
      const { query } = router;
      if (page) query.page = page;
      if (searchQuery) query.searchQuery = searchQuery;
      if (sort) query.sort = sort;
      if (category) query.category = category;
      if (education_requirement) query.education_requirement = education_requirement;
      if (employment_type) query.employment_type = employment_type;
      if (city) query.city = city;
      if (area) query.area = area;
      if (work_experience) query.work_experience = work_experience;
      if (remote) query.remote = remote;

      router.push({
        pathname: path,
        query: query,
      });
    };

  return (
        <div className="w-full md:w-full shadow p-4 rounded-lg bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    <div className="absolute flex bg-red-600 px-4 rounded-full items-center ml-2 h-full">
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 
                        2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088
                         11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 
                         11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 
                         11.9994 6.49968 11.9994Z"></path>
                    </svg>
                    </div>

                    <input type="text" placeholder="Search by listing, location, bedroom number..." 
                    className="pl-16 pr-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    {...register("searchQuery")}/>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                    <p className="font-bold text-base">
                        Filters
                    </p>

                    <button onClick={resetQuery} type="reset" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        Reset Filter
                    </button>
                    </div>

                    <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" 
                        {...register("category")}>
                        <option value="all">Choose Category</option>
                        <option value="accounting">Accounting</option>
                        <option value="architecture">Architecture</option>
                        <option value="business_developement">Business Development</option>
                        <option value="real_estate">Real Estate</option>
                        <option value="customer_service">Customer Service</option>
                        <option value="food_and_beverages">Food & Beverages</option>
                        <option value="information_technology">Information & Technology</option>
                        <option value="travel_and_tourism">Travel & Tourism</option>
                        <option value="human_resource">Human Resource</option>
                        <option value="marketing">Sales & Marketing</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="logistics">Logistics & Distribution</option>
                        <option value="healthcare">Medical & Healthcare</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("city")}>
                        <option value="all">Select City</option>
                        <option value="dubai">Dubai</option>
                        <option value="abu-dhabi">Abu Dhabi</option>
                        <option value="ajman ">Ajman</option>
                        <option value="sharjah">Sharjah</option>
                        <option value="ras-al-khaimah">Ras al Khaimah</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("work_experience")}>
                        <option value="all">Minimum Experience Level</option>
                        <option value="0">Not required</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-8">6-8 years</option>
                        <option value="8-10">8-10 years</option>
                        <option value="11-14">11-14 years</option>
                        <option value="15-99">15+ years</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("area")}>
                        <option value="all">Locality</option>
                        <option value="business-bay">Business Bay</option>
                        <option value="marina">Marina</option>
                        <option value="deira">Deira</option>
                        <option value="international-city">International City</option>
                        <option value="discovery-garden">Discovery Garden</option>
                        <option value="karama">Al Karama</option>
                        <option value="jumirah">Jumirah</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("education_requirement")}>
                        <option value="all">Minimum Education Level</option>
                        <option value="high-school">High School/College</option>
                        <option value="degree-college">Degree College</option>
                        <option value="bachelor">Bachelors or Equivalent</option>
                        <option value="masters">Masters or Equivalent</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("employment_type")}>
                        <option value="all">Employment Type</option>
                        <option value="full-time">Full Time</option>
                        <option value="contract">Contractual</option>
                        <option value="part-time">Part Time</option>
                        <option value="intern">Intern</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("remote")}>
                        <option value="all">Show only Remote Job</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                        
                        <div className="flex">  
                            <button type="submit" className="w-screen px-7 py-2 text-sm font-medium text-white bg-red-600 rounded-lg">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}