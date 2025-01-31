import "./App.css";

import React from "react";
import SwiperComponent from "./component/home/SwiperComponent";
import HomePages from "./pages/HomePage/HomePages.js";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBarComponent from "./component/utility/NavBarComponent.js";
import Footer from "./component/utility/Footer.js";
import LogInPage from "./pages/Authentications/LogInPage.js";
import Registration from "./pages/Authentications/Registration.js";
import AllCategory from "./pages/Category/AllCategory.js";
import BestSelling from "./component/home/BestSelling.js";
import AllBestSelling from "./pages/AllBestSelling/AllBestSelling.js";
import AllBrands from "./pages/AllBrands/AllBrands.js";
import AllNewProduct from "./pages/AllNewProduct/AllNewProduct.js";

function App() {
  return (
    <div>
      <NavBarComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePages />} />
          <Route
            path="/login"
            element={<LogInPage title={"Login"} isLogin={true} />}
          />
          <Route
            path="/Registration"
            element={<LogInPage title={"Registration"} isLogin={false} />}
          />
          <Route path="/AllCategory" element={<AllCategory />} />
          <Route path="/AllBestSelling" element={<AllBestSelling />} />
          <Route path="/AllNewProduct" element={<AllNewProduct />} />
          <Route path="/AllBrands" element={<AllBrands />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
