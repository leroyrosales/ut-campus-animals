import Brandbar from '../components/Brandbar'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Brandbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
