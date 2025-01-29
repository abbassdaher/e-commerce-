import "./App.css";

import React from "react";
import SwiperComponent from "./component/home/SwiperComponent";
import HomePages from "./pages/HomePage/HomePages.js";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBarComponent from "./component/utility/NavBarComponent.js";
import Footer from "./component/utility/Footer.js";
import LogInPage from "./pages/Authentications/LogInPage.js";

function App() {
  return (
    <div>
    <NavBarComponent />
      <BrowserRouter>
        <Routes>
        <Route index element={<HomePages />}/>
        <Route path="/login" element={<LogInPage />}/>
        
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
