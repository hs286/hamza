import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.js";
import SignUp from "./pages/Register.js";
import ServicesDetail from "./pages/ServiceProductDetails.js";
import Checkout from "./pages/CheckOut.js";
import Cart from "./pages/Cart.js";
import Service from "./pages/ServiceProduct.js";
import ForgetPassword from "./pages/ForgotPassword"
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Login from "./pages/Login.js";
import AboutUsPage from "./pages/AboutUs.js";

const  App=()=> {

const CompanyIcon = () => (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="601.000000pt" height="352.000000pt" viewBox="0 0 601.000000 352.000000"
preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,352.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2903 2917 c-24 -5 -43 -14 -43 -18 0 -5 -11 -9 -23 -9 -28 0 -87
-28 -87 -41 0 -5 -11 -9 -25 -9 -14 0 -28 -7 -32 -16 -5 -13 -14 -15 -45 -10
-38 6 -42 4 -94 -49 -30 -31 -54 -60 -54 -65 0 -5 -11 -21 -25 -36 -14 -15
-25 -36 -25 -46 0 -11 -13 -38 -29 -61 -16 -23 -35 -62 -42 -86 -7 -23 -19
-45 -26 -48 -7 -3 -13 -14 -13 -24 0 -10 -3 -19 -8 -19 -22 0 -35 -70 -36
-204 -1 -117 2 -146 16 -171 10 -16 18 -43 18 -59 0 -47 22 -108 60 -165 19
-29 40 -61 45 -71 50 -85 150 -195 207 -227 17 -10 40 -26 50 -35 10 -10 22
-18 28 -18 17 0 -1 24 -40 55 -22 17 -39 34 -40 38 0 14 -28 37 -43 37 -19 0
-77 60 -114 117 -10 15 -23 34 -30 41 -7 7 -13 20 -13 28 0 16 -20 56 -33 65
-5 3 -11 26 -14 50 -3 24 -10 49 -15 56 -24 30 1 418 32 488 9 22 23 56 31 75
7 19 19 41 26 48 7 7 13 19 13 27 0 21 85 120 159 186 10 9 33 25 52 35 19 11
38 24 44 30 5 6 26 17 45 24 19 8 37 17 40 20 8 10 72 40 86 40 7 0 14 5 16
11 2 6 22 15 43 19 33 6 35 8 10 8 -16 0 -49 -5 -72 -11z"/>
<path d="M3230 2624 c-20 -6 -42 -57 -38 -86 2 -14 18 -29 48 -44 80 -40 120
-68 120 -81 0 -21 -26 -56 -93 -126 -96 -99 -115 -126 -127 -178 -7 -27 -15
-49 -19 -49 -3 0 -14 -18 -24 -40 -13 -31 -15 -46 -7 -60 14 -25 27 -25 69 1
32 19 41 20 124 10 49 -6 94 -15 101 -20 6 -5 41 -12 77 -16 62 -7 68 -6 83
16 14 21 14 24 -3 40 -19 18 -100 49 -126 49 -8 0 -15 4 -15 9 0 5 -27 12 -61
16 -68 8 -78 19 -58 68 13 33 99 147 110 147 4 0 29 22 56 49 27 26 58 51 70
55 13 4 23 18 27 37 8 41 -21 82 -74 105 -22 10 -40 21 -40 26 0 4 -9 8 -20 8
-24 0 -80 27 -80 38 0 8 -60 33 -76 31 -5 -1 -16 -3 -24 -5z"/>
<path d="M2506 2308 c-4 -15 -14 -29 -21 -32 -9 -3 -13 -22 -12 -60 1 -30 -5
-66 -12 -79 -10 -19 -10 -32 0 -68 l14 -44 3 38 c4 46 17 47 39 2 9 -19 20
-35 25 -35 4 0 8 -10 8 -22 0 -13 9 -34 20 -48 11 -14 20 -34 20 -45 0 -11 14
-33 30 -48 17 -16 30 -33 30 -38 0 -5 6 -9 13 -9 7 0 18 -9 25 -20 7 -11 18
-20 26 -20 7 0 20 -10 29 -22 8 -13 18 -20 21 -17 4 3 -14 27 -39 52 -25 25
-45 50 -45 55 0 5 -10 20 -22 34 -47 53 -57 68 -72 113 -9 25 -16 57 -16 70 0
14 -4 25 -10 25 -6 0 -10 42 -11 103 -1 105 -15 97 -18 -10 -1 -47 -3 -53 -22
-53 -21 0 -21 4 -17 71 3 40 11 75 18 79 6 4 10 18 8 31 -4 24 -4 24 -12 -3z"/>
</g>
</svg>


    
  
      );

  return (
    <>
      <WhatsAppWidget
        phoneNumber="17378951918"
        message="Hello, How can I help you!"
        z-index="100"
        companyName="Zoom Flooring"        
        replyTimeText="Typically reply within hour"
        CompanyIcon={CompanyIcon} 
        />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:category" element={<Service />} />
          <Route path="/services/:category/:id" element={<ServicesDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path ='/register' element = {<SignUp/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
