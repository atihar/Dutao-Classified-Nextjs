
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";


export default function communityFilter() {
    const {t} = useTranslation('common')
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
                    <div className="absolute flex bg-red-600 px-4 rounded-full items-center ml-2 h-full">
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 
                        2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088
                         11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 
                         11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 
                         11.9994 6.49968 11.9994Z"></path>
                    </svg>
                    </div>

                    <input type="text" placeholder={t('communityFilterSearch')} 
                    className="pl-16 pr-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    {...register("searchQuery")}/>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                    <p className="font-bold text-base">
                        {t('filters')}
                    </p>

                    <button onClick={resetQuery} type="reset" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        {t('resetFilter')}
                    </button>
                    </div>

                    <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" 
                        {...register("category")}>
                        <option value="all">{t('selectCategory')}</option>
                        <option value="auto-service">{t('autoService')}</option>
                        <option value="event-management">{t('eventManagement')}</option>
                        <option value="freelancers">{t('freelancers')}</option>
                        <option value="health-service">{t('healthService')}</option>
                        <option value="home-maintenance">{t('homeMaintenance')}</option>
                        <option value="movers">{t('movers')}</option>
                        <option value="restoration-service">{t('restoration')}</option>
                        <option value="tutor-service">{t('tutorService')}</option>
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
                        <option value="all">{t('area')}</option>
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
                                {t('search')}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}