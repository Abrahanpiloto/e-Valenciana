import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ProductInfo from "./pages/ProductInfo";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
