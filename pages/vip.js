import Header from "../components/header"
import Footer from "../components/footer"

function vip() {
  return (
    <>
    <Header/>
    
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">New member? See whats in VIP membership</h2>

          <p className="mt-4 text-gray-300">
            Free delivery, free inspection, dutao fast track support, premium deals and much more..
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-red-500/10 hover:border-red-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">VIP only Deals</h3>

            <p className="mt-1 text-sm text-gray-300">
              Get access to our special product section to see special 
              products and dealings from Dutao 
            </p>
          </a>

          <a
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-red-500/10 hover:border-red-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">Purchase Protection</h3>

            <p className="mt-1 text-sm text-gray-300">
              When you are closing any deals you can have special access to 
              inspection report and more details on the deals on Dutao.
            </p>
          </a>

          <a
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-red-500/10 hover:border-red-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">Premium Events</h3>

            <p className="mt-1 text-sm text-gray-300">
              Get access to premium events from Dutao by being a VIP members
              where different brands have special offers for you.
            </p>
          </a>

        </div>

        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-red-600 border border-red-600 rounded hover:bg-transparent active:text-red-500 focus:outline-none focus:ring"
            href="#purchaseCard"
          >
            <span className="text-sm font-medium"> Get Started </span>

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
      </div>
    </section>
    
    <section className="max-w-screen-xl mx-auto p-14" id="purchaseCard">
    <div
      className="block w-screen max-w-sm p-10 border sm:px-12 bg-gray-900 text-gray-100 rounded-2xl"
      aria-modal="true"
      aria-label="Item added to your cart"
      role="dialog"
      tabindex="-1"
    >
      <div className="flex items-start justify-between">
        <h2 className="flex items-center text-gray-200">
          <span className="ml-2 text-sm"> Get started with VIP </span>
        </h2>

        <button
          className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
          type="button"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex pt-8 pb-6 items-end">
      <h1 className="text-6xl font-bold">50 dhs</h1>
        <div className="ml-4">
          <h3 className="text-sm">user/year</h3>
        </div>
      </div>

      <div className="pb-12 text-base">
        <p>✓ Special Product Access</p>
        <p>✓ Quick offers through email</p>
        <p>✓ Dutao event priority pass</p>
      </div>
      <div className="space-y-4 text-center">

        <form action="/cart" method="post">
          <button
            className="block w-full p-3 text-sm rounded-lg bg-red-600 text-stone-100 hover:bg-black"
            type="submit"
          >
            Get started with VIP
          </button>
        </form>

        <a
          className="inline-block text-sm tracking-wide underline underline-offset-4 text-stone-500 hover:text-stone-600"
          href="/collections/all"
        >
          Cancel Purchase
        </a>
      </div>
    </div>
    </section>
    
    <Footer/>
    </>
  )
}

export default vip