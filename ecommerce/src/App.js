import React from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/productdetail/ProductDetail";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/productsdetail" element={<ProductDetail/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
