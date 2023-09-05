import { Product } from "./types/product";

/*
    Write a function that receives a readonly array of Products and an array of product names and returns a list of the related product IDs
    The resulting list should not have repeating IDs
    If the Name is not in the list of products, ignore that product
*/
export function getProductsIds(
  products: Readonly<Array<Product>>,
  productNames: Readonly<Array<String>>
): Array<String> {
  // Write your code here
  return [];
}
