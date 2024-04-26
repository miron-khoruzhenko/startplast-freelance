import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/Pages/Home"
import Products from "./components/Pages/Products"
import ProductsPage from "./components/Pages/Products/ProductPage"
import News from "./components/Pages/News"
import NewsPage from "./components/Pages/News/NewsPage"
import Contacts from "./components/Pages/Contacts"
import About from "./components/Pages/About"
import Certificates from "./components/Pages/Certificates"
import NotFound from "./components/Pages/NotFound"
import Login from "./components/Pages/Login"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"

function App() {
  return (
  <>
    <BrowserRouter basename="/miron.github.io">
      <Navbar/>
      <div className="pt-[75px]"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/products-page" element={<ProductsPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/news-page" element={<NewsPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>

      
    </BrowserRouter>
    </>
  )
}

export default App
