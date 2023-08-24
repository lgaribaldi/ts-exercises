import { Product, ProductType, getMostExpensiveProduct } from "./1";

describe("Tests for exercise 1", () => {
  const products: Readonly<Array<Product>> = Object.freeze([
    {
      type: ProductType.KEYBOARD,
      price: 72.99,
      stock: 1,
      name: "M2-7K",
      comments: "Older model",
    },
    {
      type: ProductType.KEYBOARD,
      price: 99.99,
      stock: 1,
      name: "M3-7K",
    },
    {
      type: ProductType.MOUSE,
      price: 52.0,
      stock: 3,
      name: "GHLF-21",
    },
  ]);
  it("should return most expensive item", () => {
    expect(getMostExpensiveProduct(products)).toEqual(products[1]);
  });
  it("should return null when there are no products", () => {
    expect(getMostExpensiveProduct([])).toBe(null);
  });
  it("should return item with most stock when more than one have the highest price", () => {
    expect(
      getMostExpensiveProduct(
        products.map((product) => ({ ...product, price: products[0].price })),
      ),
    ).toEqual(products[2]);
  });
});
