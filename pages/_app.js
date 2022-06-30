import '../styles/global.css'
import { useEffect } from "react";
import { StoreProvider } from '../lib/Store';
import AOS from "aos";

import "aos/dist/aos.css";


function App({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 400,
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

export default App