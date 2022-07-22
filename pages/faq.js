import Header from '../components/header'
import Footer from '../components/footer'

export default function Faqpage() {
  return (
    <>
    <Header/>
    <section className='max-w-screen-md mx-auto my-5 px-3 sm:my-10 text-base'>
    <h1 className='font-bold text-3xl'>Frequently asked questions</h1>
    <div className="space-y-4">
        <details className="group" open>
            <summary
            className="flex items-center w-full justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
                How to open an account?
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
            Go to Sign up page, Enter proper details and verify the email using the mail from Dutao.
            If you don't receive any email may be you should check spam box or contact our support
            for further inspection.
            </p>
        </details>

        <details className="group">
            <summary
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
                How many types of accounts are there?
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
            There are 2 types of account(indivisual). One is free and another one comes 
            with a membership plan named "Dutao Vip!. The difference is that you can get all 
            the benefits from our platform on both type of account while access to 
            special discounts, dutao events, special products is only for the Vip members
            </p>
        </details>

        <details className="group">
            <summary
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
                Can I give ad on this platform?
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
            You can add your listing by signing up for a free account. 1 min procedure only. But remember
            to mention the data and make sure you are not adding anything illegal or fake.
            </p>
        </details>

        <details className="group">
            <summary
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
                How to verify an ad
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
           Verified badge on the listing ads near 15% extra impression from unverified ads.
           To get verified badge you need to contact the support agent to verify your listing.
            </p>
        </details>

        <details className="group">
            <summary
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
               What is the benefits of featuring an ad?
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
            If you feature you ad, it will show in the first priority of the listings after promotional
            ads. Featuring an ad will also enable the featured badge on the listing. We prefer a combination
            of verified badge and featured badge for a better performance.
            </p>
        </details>

        <details className="group">
            <summary
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
                How many ad can I feature in a month?
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
            We have some feature credits packages which are created for supporting all the businesses.
            Talk to our support to discuss about the ad featuring credits. There you can choose the
            suitable one.
            </p>
        </details>

        <details className="group">
            <summary
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 className="font-medium text-gray-900">
               What about if I delete my account, can I get it back?
            </h5>

            <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p className="px-4 mt-4 leading-relaxed text-gray-700">
            For keeping user privacy and maintaining platform policy you can never get those data as
            they have been destroyed while you confirmed account deletion. You can always signup for a
            new account for free.
            </p>
        </details>
        </div>  
    </section>
    <Footer/>
    </>
  )
}
