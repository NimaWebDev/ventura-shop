import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import Loading from "./components/loading";

import Home from "./pages/home";
import Login from "./routers/login";
import SingIn from "./routers/singin";
import Dashboard from "./routers/dashboard";
import PanelAdmin from "./routers/panelAdmin";
import { Cart } from "./routers/cart";
import PurchasesPage from "./routers/allShopsAdmin";
import Products from "./routers/products";
import SingleArticle from "./routers/article";
import AllArticles from "./routers/allArticles";
import AllArticlesInfo from "./routers/allArticlesInfo";
import AbautUs from "./routers/abautUs";
import AddProduct from "./routers/addProduct";
import AddArticle from "./routers/addArticle";
import Pay from "./routers/pay";
import Error from "./components/error";


function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false) , 1000); 
    }, []);


    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,     
      });
    }, []);

    if (loading){
      return <Loading />
    }else{
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singIn" element={<SingIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/panelAdmin" element={<PanelAdmin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasesPage" element={<PurchasesPage />} />
          <Route path="/web-products" element={<Products />} />
          <Route path="/articles/:slug" element={<SingleArticle />} />
          <Route path="/all_articles" element={<AllArticles />} />
          <Route path="/all_article_Info/:slug" element={<AllArticlesInfo />} />
          <Route path="/abaut_us" element={<AbautUs />} />
          <Route path="/add_Product" element={<AddProduct />} />
          <Route path="/add_Article" element={<AddArticle />} />
          <Route path="/pay_cart" element={<Pay />} />
          <Route path="*" element={<Error />} />
        </Routes>
    )
  }}

export default App;

