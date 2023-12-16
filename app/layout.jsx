import "@styles/globals.css"
import Header from "../components/header/index"
import Footer from "@components/footer/Footer"

export const metadata = {
  title: "e-commerce website",
  description: "new e-commerce website for a small business."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout