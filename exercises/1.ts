export enum ProductType {
  KEYBOARD,
  MOUSE,
  SCREEN,
  HEADSET,
}

export type Product = {
  type: ProductType;
  price: number;
  name: string;
  stock: number;
  comments?: string;
};

/*
    Write a function that will receive a readonly array of Product (defined above) and returns the product with the highest price;
    If there are more than one item with the highest price, return the one with most stock;
    If there are no products, return null;
*/
export function getMostExpensiveProduct(
  products: Readonly<Array<Product>>,
): Product | null {
  // Write your code here
}
