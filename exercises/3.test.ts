import { getProductsIds } from "./3";
import { testProducts } from "./fixtures/testProducts";

describe("Tests for exercise 3", () => {
  it("should return list of IDs", () => {
    expect(getProductsIds(testProducts, ['M2-7K', 'M3-7K']).sort()).toEqual(["6546fe", "efw68498"]);
  });
  it("should return empty list when there are no names", () => {
    expect(getProductsIds(testProducts, [])).toEqual([]);
  });
  it("should ignore missing products", () => {
    expect(getProductsIds(testProducts, ['M2-7K', 'M37K'])).toEqual(["6546fe"]);
  });
  it("should return each ID only once", () => {
    expect(getProductsIds(testProducts, ['M2-7K', 'M3-7K', 'M3-7K', 'M2-7K' ]).sort()).toEqual(["6546fe", "efw68498"]);
  });
});
