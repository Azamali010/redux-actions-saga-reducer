import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  let data = "Hello Im Product Action";
  console.log("Action is Called", data);
  return {
    type: PRODUCT_LIST,
    data: data,
  };
};
