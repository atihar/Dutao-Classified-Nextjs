
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";


export default function MapFilter(props) {
  const {t} = useTranslation('common')
  const locCity = props.data
  //user city is coming.. we need to pass it to filter in the future extending from here
  // console.log(locCity);

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
                   
                    <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" 
                        {...register("category")}>
                              <option value="all">{t('selectCategory')}</option>
                              <option value="business">{t('business')}</option>
                              <option value="hospital">{t('hospital')}</option>
                              <option value="pharmacy">{t('pharmacy')}</option>
                              <option value="bank">{t('bank')}</option>
                              <option value="food">{t('food')}</option>
                              <option value="bar">{t('bar')}</option>
                              <option value="shopping">{t('mall')}</option>
                              <option value="events">{t('events')}</option>
                              <option value="super-market">{t('superMarket')}</option>
                              <option value="hotels">{t('hotels')}</option>
                              <option value="school">{t('school')}</option>
                              <option value="university">{t('university')}</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("city")}>
                        <option value="all">{t('selectCity')}</option>
                        <option value="dubai">{t('dubai')}</option>
                        <option value="abu-dhabi">{t('abu')}</option>
                        <option value="ajman ">{t('ajm')}</option>
                        <option value="sharjah">{t('shj')}</option>
                        <option value="ras-al-khaimah">{t('rak')}</option>
                        </select>


                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("area")}>
                        <option value="all">{t('locality')}</option>
                        <option value="business-bay">{t('bBay')}</option>
                        <option value="marina">{t('marina')}</option>
                        <option value="deira">{t('deira')}</option>
                        <option value="international-city">{t('international')}</option>
                        <option value="discovery-garden">{t('discovery')}</option>
                        <option value="karama">{t('alKarama')}</option>
                        <option value="jumirah">{t('jumeirah')}</option>
                        </select>
                   
                        <div className="flex">  
                            <button type="submit" className="w-screen px-7 py-2 text-sm font-medium text-white bg-red-600 rounded-lg">
                                {t('filter')}
                            </button>
                        </div>
                        <button onClick={resetQuery} type="reset" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                          {t('resetFilter')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
  )
}