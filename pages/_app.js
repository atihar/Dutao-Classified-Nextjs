import '../styles/global.css'
import { StoreProvider } from '../lib/Store';

function MyApp({ Component, pageProps }) {
  return (  
      <div className="grid wrapper">
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
      </div>
  )
}

export default MyApp