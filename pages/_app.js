import '../styles/global.css'
import { useEffect } from "react";
import { StoreProvider } from '../lib/Store';
import AOS from "aos";

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
      }, []);


  return (  
      <div className="grid wrapper">
          <StoreProvider>
              <Component {...pageProps} />
          </StoreProvider>
      </div>
  )
}

export default MyApp