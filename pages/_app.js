import { Toaster } from 'react-hot-toast'
import Layout from '../components/Layout/Layout'
import AuthProvider from '../contexts/AuthProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster/>
      </Layout>
    </AuthProvider>
  )
}
