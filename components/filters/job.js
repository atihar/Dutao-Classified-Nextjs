
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";


export default function jobFilter() {

    const router = useRouter();
    const {t} = useTranslation('common')

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
                        <option value="accounting">{t('accounting')}</option>
                        <option value="architecture">{t('architecture')}</option>
                        <option value="business_developement">{t('businessDevelopment')}</option>
                        <option value="real_estate">{t('realEstate')}</option>
                        <option value="customer_service">{t('custServ')}</option>
                        <option value="food_and_beverages">{t('fnb')}</option>
                        <option value="information_technology">{t('it')}</option>
                        <option value="travel_and_tourism">{t('tnt')}</option>
                        <option value="human_resource">{t('humanResource')}</option>
                        <option value="marketing">{t('salesAndMarketing')}</option>
                        <option value="finance">{t('fBank')}</option>
                        <option value="logistics">{t('lnd')}</option>
                        <option value="healthcare">{t('mnh')}</option>
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
                        {...register("work_experience")}>
                        <option value="all">{t('minExp')}</option>
                        <option value="0">notReq</option>
                        <option value="1-2">1-2 {t('year')}s</option>
                        <option value="3-5">3-5 {t('year')}s</option>
                        <option value="6-8">6-8 {t('year')}s</option>
                        <option value="8-10">8-10 {t('year')}s</option>
                        <option value="11-14">11-14 {t('year')}s</option>
                        <option value="15-99">15+ {t('year')}s</option>
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

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("education_requirement")}>
                        <option value="all">{t('minEdu')}</option>
                        <option value="high-school">{t('highSchool')}</option>
                        <option value="degree-college">{t('degreeCollege')}</option>
                        <option value="bachelor">{t('bach')}</option>
                        <option value="masters">{t('mas')}'</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("employment_type")}>
                        <option value="all">{t('empType')}</option>
                        <option value="full-time">{t('fullTime')}</option>
                        <option value="contract">{t('contractual')}</option>
                        <option value="part-time">{t('partTime')}</option>
                        <option value="intern">{t('intern')}</option>
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        {...register("remote")}>
                        <option value="all">{t('remoteJob')}</option>
                        <option value="Yes">{t('yes')}</option>
                        <option value="No">{t('no')}</option>
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