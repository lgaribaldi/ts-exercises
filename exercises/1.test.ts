import { getMostExpensiveProduct } from "./1";
import { testProducts } from "./fixtures/testProducts";

describe("Tests for exercise 1", () => {
  it("should return most expensive item", () => {
    expect(getMostExpensiveProduct(testProducts)).toEqual(testProducts[1]);
  });
  it("should return null when there are no products", () => {
    expect(getMostExpensiveProduct([])).toBe(null);
  });
  it("should return item with most stock when more than one have the highest price", () => {
    expect(
      getMostExpensiveProduct(
        testProducts.map((product) => ({ ...product, price: testProducts[0].price })),
      ),
    ).toEqual(testProducts[2]);
  });
});
