import React from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Login from "./component/LoginModal";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>


      <Route path="/productsdetail/:id" element={<ProductDetail/>}></Route>
 
      <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
