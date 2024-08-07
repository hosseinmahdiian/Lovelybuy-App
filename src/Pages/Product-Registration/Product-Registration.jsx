import Yogurt from "../../assets/images/yogurt.png";
import { Link, NavLink } from "react-router-dom";
import Counter from "../../Components/Counter";
import Product from "./product";

const ProductRegistration = () => {
  return (
    <div className="relative max-h-screen min-h-screen">
      <div className="flex items-center mt-3   mx-2 gap-2">
        <div className="relative   w-11/12  ">
          <input
            className="peer border border-black border-opacity-5 rounded-2xl outline-gray-300 h-16 w-full "
            placeholder=" "
            id="search"
          />
          <label
            htmlFor="search"
            className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجو با نام یا بارکد
          </label>
        </div>
        <NavLink
          to="/AddProdoct"
          className="border border-black border-opacity-5 rounded-2xl bg-white h-16 w-2/12 text-center pt-2.5 text-2xl font-bold "
        >
          +
        </NavLink>
      </div>

      <div className="mx-2">
        <Link>
          <Product name="ماست" id={45821645} image={Yogurt} />
        </Link>
        <NavLink>
          <Product name="ماست" id={45821645} image={Yogurt} />
        </NavLink>
      </div>

      <Counter />
    </div>
  );
};

export default ProductRegistration;
