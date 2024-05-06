import Header from "./header";
import Footer from "./footer";

export const metadata = {
  title: 'CarryOnMyWay!',
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}