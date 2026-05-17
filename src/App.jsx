import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ServicePage from "./components/ServicePage";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Review from "./components/Review";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className={`flex-grow ${isHome ? "" : "pt-20"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>

      {/* Footer */}
    <Footer/>

    </div>
  );
}

export default App;