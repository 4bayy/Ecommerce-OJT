import React from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Login from "./component/LoginModal";
import CartPage from "./pages/cart/CartPage";
import WishList from "./pages/WishList";
import Register from "./pages/register/Register";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
    <BrowserRouter>;
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cartpage" element={<CartPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/wishlist" element={<WishList/>}></Route>
      <Route path="/productsdetail/:id" element={<ProductDetail/>}></Route>
     </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
