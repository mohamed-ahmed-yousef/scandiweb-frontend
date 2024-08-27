import type { AxiosInstance } from "axios";

export class Product {
	constructor(private http: AxiosInstance) {}

	getProducts = async () => {
		const response = await this.http.get("/get-products");
		return response.data;
	};

	createProduct = async (data: FormData) => {
		const response = await this.http.post("/create-product", data);
		return response.data;
	};

	deleteProducts = async (data: number[]) => {
		const response = await this.http.post("/delete-products", data);
		return response.data;
	};
}
