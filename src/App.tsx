import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import Home from "./components/Pages/1.Home";
import Products from "./components/Pages/2.Products";
import ProductsPage from "./components/Pages/2.Products/ProductPage";
import News from "./components/Pages/3.News";
import NewsPage from "./components/Pages/3.News/NewsPage";
import Contacts from "./components/Pages/4.Contacts";
import About from "./components/Pages/5.About";
import Certificates from "./components/Pages/6.Certificates";
import NotFound from "./components/Pages/7.NotFound";
import Login from "./components/Pages/8.Login";

import Admin from "./components/Pages/0.Admin";
import NewUserAdmin from "./components/Pages/0.Admin/2.NewUsers";
import UsersAdmin from "./components/Pages/0.Admin/3.Users";
import ProductsAdmin from "./components/Pages/0.Admin/1.Products";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/miron.github.io">
      <Routes>
        {/* Основной маршрут для пользовательской части приложения */}
        <Route path="/" element={
          <>
          <Navbar />
          <div className="pt-[75px]" /><ScrollToTop />
          <Outlet />
          <Footer /></>
        } >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductsPage />} />
          <Route path="news" element={<News />} />
          <Route path="/news/news-page" element={<NewsPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Отдельный маршрут для административной страницы без Navbar и Footer */}
        <Route path="/admin" element={<Admin />} > 
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="new_user" element={<NewUserAdmin />} />
          <Route path="users" element={<UsersAdmin />} />
          <Route index element={<ProductsAdmin />} /> {/* Показывать что-то по умолчанию при заходе на /admin */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
