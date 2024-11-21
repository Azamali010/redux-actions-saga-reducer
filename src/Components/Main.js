import { useDispatch } from "react-redux";
import { addToCart , RemoveFromCart, emptyCart} from "../Redux/action";
import {productList} from "../Redux/productActions"

function Main() {
  const dispatch = useDispatch();

  const product = {
    brand: "Apple",
    name: "I Phone 16",
    color: "Red",
    price: "120000",
  };
  return (
    <>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          {" "}
          Add To Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(RemoveFromCart(product.name))}>
          {" "}
          Remove From Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>
          {" "}
          Empty Cart
        </button>

        <button onClick={() => dispatch(productList())}>
          {" "}
          Product Cart
        </button>
      </div>
    </>
  );
}

export default Main;
