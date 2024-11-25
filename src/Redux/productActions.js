import { PRODUCT_LIST } from "./constant";

export const productList = async() => {
  // let data = "Hello Im Product Action";
  let data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  data =await data.json()
  
  console.log("Action is Called", data);
  return {
    type: PRODUCT_LIST,
    data: data,
  };
};
