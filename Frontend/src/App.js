import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/home/Home.css";
import "./components/home/footer/Footer.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { Footer } from "./components/home/footer/Footer";
import { About } from "./components/About/About";
import Login from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import { Header1 } from "./components/home/header/Header1";
import VendorList from "./components/VendorList/VendorList";
import ContactUs from "./components/Contact/ContactUs";

function App() {
  const [justBool, setJustBool] = useState(false);

  useEffect(() => {
    console.log(justBool);
  }, [justBool]);

  return (
    <BrowserRouter>
      <Header1 setJustBool={setJustBool} justBool={justBool} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/venue-list" element={<VendorList/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>

      
        <Route
          path="/signin"
          element={<Login setJustBool={setJustBool} justBool={justBool} />}
        ></Route>

        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
