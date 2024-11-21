import { PRODUCT_LIST} from "./constant";
export const productData = (data = [], action) => {
  //   if (action.type === Add_To_Cart) {
  //     console.log("Reducer is called", action);
  //     return action.data;
  //   } else {
  //     return "no action matched";
  //   }

  switch (action.type) {
    case PRODUCT_LIST:
      console.log("Add_To_Cart Condition", action);
      return [action.data];

    // case Remove_To_Cart:
    //   console.log("Remove_To_Cart Condition", action);
    //   data.length =data.length? data.length - 1: [];
    //   return [...data];

    // case Empty_Cart:
    //   console.log("Remove_To_Cart Condition", action);
    //   data = [];
    //   return [...data];
    default:
      return data;
  }
};
