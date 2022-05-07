import useTranslation from 'next-translate/useTranslation'

export default function pJobs() {
  const { t} = useTranslation('common')

  return (
    <section className="flex justify-center">
  <div className="max-w-screen-xl align-center px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
      <div className="max-w-lg mx-auto text-center p-8  lg:text-left lg:mx-0">
      <h2 className="text-2xl font-bold">
              {t('findjob')}
            </h2>

        <p className="mt-4 text-base text-gray-600">
          {t('jobDetailsinHome')}
        </p>

        <a
          className="inline-flex items-center px-8 py-3 mt-8 text-white bg-red-600 border border-red-600 rounded-xl"
          href="#"
        >
          <span className="text-sm font-medium"> Find Jobs </span>

{/* Future buttons icons for all the pages */}
          <svg
            className="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span className="inline-block sm:p-3 rounded-lg bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </span>
          <h6 className="mt-2 text-base">Accountant</h6>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span className="inline-block sm:p-3 rounded-lg bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>

          <h6 className="mt-2 text-base">Waitress</h6>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span className="inline-block sm:p-3 rounded-lg bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>

          <h6 className="mt-2 text-base">Receptionist</h6>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span className="inline-block sm:p-3 rounded-lg bg-gray-50">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </span>

          <h6 className="mt-2 text-base">Customer Service</h6>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span className="inline-block sm:p-3 rounded-lg bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </span>

          <h6 className="mt-2 text-base">Marketing Executive</h6>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span className="inline-block sm:p-3 rounded-lg bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </span>

          <h6 className="mt-2 text-base">Real Estate Agent</h6>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
