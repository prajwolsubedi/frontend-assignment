import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../store/slice/productSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, []);

  async function getProduct() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    dispatch(initializeProducts(json));
  }
  return (
    <div className="border-2 border-black">
      <Navbar />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default Home;
