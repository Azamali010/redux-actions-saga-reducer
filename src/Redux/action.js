import { Add_To_Cart, Remove_To_Cart, Empty_Cart } from "./constant";

export const addToCart = (data) => {
  console.log("Action is Called", data);
  return {
    type: Add_To_Cart,
    data: data,
  };
};

export const RemoveFromCart = (data) => {
  console.log("Action is Remove-from-cart", data);
  return {
    type: Remove_To_Cart,
    data: data,
  };
};


export const emptyCart = () => {
  console.log("Action is empty-cart");
  return {
    type: Empty_Cart,
  };
};