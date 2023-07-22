import { GrSearch } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { onInputChange } from "../store/slice/productSlice";
import { onFilter } from "../store/slice/productSlice";
import "../styles/custom.css";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProducts);
  const inputText = useSelector((state) => state.product.inputText);

  const filterProducts = () => {
    const updatedInputText = allProducts.filter((item) =>
      item?.title?.toLowerCase()?.includes(inputText?.toLowerCase())
    );
    return updatedInputText;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const filteredArray = filterProducts();
    dispatch(onFilter([...filteredArray]));
  };

  return (
    <form
      className="w-full md:px-0 md:py-2 lg:py-0 relative bg-[#232f3e]  flex justify-between max-sm:flex-col max-sm:px-0 lg:px-0"
      onSubmit={null}
    >
      <div className="flex ring-3 focus-within:ring-[#ea9834] rounded-lg max-sm:w-full  lg:mx-0 md:w-full ">
        <input
          onChange={(e) => dispatch(onInputChange(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick(e);
          }}
          type="search"
          placeholder="Search Product"
          className="w-full p-2 rounded-l-lg  outline-none text-black"
        />
        <button
          type="button"
          onClick={handleClick}
          className="px-2 bg-[#febd69] hover:bg-[#efaf5b] rounded-r-lg "
        >
          <GrSearch className="text-[#111] mx-1" size={26} />
        </button>
      </div>
    </form>
  );
};

export default SearchProduct;
