import type { AxiosInstance } from "axios";

export class ProductAPI {
	constructor(private http: AxiosInstance) {}

	getProducts = async () => {
		return await this.http.get("/get-products").then((res) => res.data);
	};

	createProduct = async (data: Product) => {
		return await this.http
			.post("/create-product", data)
			.then((res) => res.data);
	};

	deleteProducts = async (data: number[]) => {
		return await this.http
			.post("/delete-products", data)
			.then((res) => res.data);
	};
}

export interface Product {
	sku: string;
	name: string;
	price: number;
	category: string;
	size?: number;
	weight?: number;
	height?: number;
	width?: number;
	length?: number;
}
