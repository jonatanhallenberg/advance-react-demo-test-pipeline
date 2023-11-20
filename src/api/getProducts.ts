import { Product } from "./types";

export const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    return (await res.json()) as Product[];
}