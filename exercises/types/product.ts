export enum ProductType {
    KEYBOARD,
    MOUSE,
    SCREEN,
    HEADSET,
}

export type Product = {
    id: string;
    type: ProductType;
    price: number;
    name: string;
    stock: number;
    comments?: string;
};