import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../store/slice/productSlice";
import { useSelector } from "react-redux";
import axiosConfig from "../config/axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const dispatch = useDispatch();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => axiosConfig.get("/products").then((res) => res.data),
    onSuccess: (products) => dispatch(initializeProducts(products)),
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
