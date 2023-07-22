import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";
import Error from "./pages/Error";
import { Route, Routes, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
