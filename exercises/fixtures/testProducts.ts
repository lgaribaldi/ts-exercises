import { Product, ProductType } from "../types/product";

export const testProducts: Readonly<Array<Product>> = Object.freeze([
    {
      id: "6546fe",
      type: ProductType.KEYBOARD,
      price: 72.99,
      stock: 1,
      name: "M2-7K",
      comments: "Older model",
    },
    {
      id: "efw68498",
      type: ProductType.KEYBOARD,
      price: 99.99,
      stock: 1,
      name: "M3-7K",
    },
    {
      id: "ew32w89g",
      type: ProductType.MOUSE,
      price: 52.0,
      stock: 3,
      name: "GHLF-21",
    },
  ]);