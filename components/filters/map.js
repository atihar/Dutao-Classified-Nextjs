
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'


export default function communityFilter() {

    const router = useRouter();

    // initiating search param from start/reset
    const queryObj = {
      searchQuery : 'all',
      category : 'all',
      city : 'all',
      // sort : 'featured',
      area : 'all',
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
    }) => {
      const path = router.pathname;
      const { query } = router;
      if (page) query.page = page;
      if (searchQuery) query.searchQuery = searchQuery;
      if (sort) query.sort = sort;
      if (category) query.category = category;
      if (city) query.city = city;
      if (area) query.area = area;
      router.push({
        pathname: path,
        query: query,
      });
    };

  return (
        <div className="w-full md:w-full shadow p-4 rounded-lg bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                   
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" 
                        {...register("category")}>
                        <option value="all">Select Category</option>
                        <option value="auto-service">Auto Service</option>
                        <option value="event-management">Event Management</option>
                        <option value="freelancers">Freelancers</option>
                        <option value="health-service">Health Service</option>
                        <option value="home-maintenance">Home Maintenance</option>
                        <option value="health-service">Movers & Removals</option>
                        <option value="restoration-service">Restoration & Repair</option>
                        <option value="tutor-service">Tutor & Classes</option>
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