import './App.css'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import Services from './componenets/Services'
import AboutUS from './componenets/AboutUs'
import Products from './componenets/Products'
import ProductInfo from './componenets/ProductInfo'
import Review from './componenets/Review'
import ContactUs from './componenets/ContactUs'
import Footer from './componenets/Footer'
function App() {
  return (
    <>
        <Navbar/>  
        <Home/>
        <Services/>
        <AboutUS/>
        <Products/>
        <ProductInfo/>
        <Review/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default App
