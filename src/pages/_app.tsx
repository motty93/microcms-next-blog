import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from 'store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
