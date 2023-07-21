import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
