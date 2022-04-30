// import Link from 'next/link';
// import NavModules from './navModules';
// const modulesList=['propertiesForRent','propertiesForSale','Motors','Second hand market','Special Products','Jobs','Home Service','VVIP Membership','Community']

// const Modules= modulesList.map((module)=>{
//     return (
//         <a key="uniqueId1"
//         className="block p-4 text-center text-gray-600 hover:text-white bg-black bg-opacity-10 hover:bg-red-500 hover:bg-opacity-70 shadow-lg rounded-xl hover:shadow-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
//         href="#"
//         >
//         <span className="inline-block p-3 rounded-lg bg-gray-50">
//         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-house-heart-fill" viewBox="0 0 16 16">
//         <path fillRule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
//         <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
//         </svg>
//         </span>

//         <h6 className="mt-2 text-center text-sm font-bold">{module}</h6>
//         </a>
        
//     )
// })

export default function categoryComponent() {

  return (
      <>
        <section>
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            {/* <div ><img className="z-0 w-full h-full absolute bg-cover"  src="/cat-bg.jpg"></img> </div> */}
            <div className=" max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8 m-auto">
                
                <div className="grid lg:grid-cols-1 gap-y-8 lg:gap-x-16 lg:items-center">
                
                <div className="z-10 grid grid-cols-3 gap-4 sm:grid-cols-3">
                    
                    {/* {Modules} */}
                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/property-for-rent"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-house-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Property for Rent</h6>
                    </a>

                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/property-for-sale"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Property for Sale</h6>
                    </a>

                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/motors"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24"><path d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z"/></svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Motors</h6>
                    </a>

                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href=""
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-wrench-adjustable-circle" viewBox="0 0 16 16">
                    <path d="M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Info Center</h6>
                    </a>


                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/special-products"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-inboxes-fill" viewBox="0 0 16 16">
                    <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Special Products</h6>
                    </a>

                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/jobs"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center  text-sm font-bold">Jobs</h6>
                    </a>


                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/used-items"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-boxes" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Used Items</h6>
                    </a>


                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/vip"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-gem" viewBox="0 0 16 16">
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">VIP Member</h6>
                    </a>

                    <a
                    className="block p-4 border text-center border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                    href="/community"
                    >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-person-hearts" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                    </svg>
                    </span>

                    <h6 className="mt-2 text-center text-sm font-bold">Community</h6>
                    </a>

                </div>
                
                </div>
                </div>
            </div>
            </section>
            </>
  )
}