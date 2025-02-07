import { ProductResponse } from '../../types/Product';

export async function getAllProducts(skip: number): Promise<ProductResponse> {
	const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`);
	return res.json();
}

export async function getProductsInPoster(): Promise<ProductResponse> {
	const res = await fetch('https://dummyjson.com/products');
	return res.json();
}
