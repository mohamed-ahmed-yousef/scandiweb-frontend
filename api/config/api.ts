import type { AxiosInstance } from "axios";
import { ProductAPI } from "../services/product.ts";
import { http } from "./http";

export function getAPI(http: AxiosInstance) {
	return {
		product: new ProductAPI(http),
	};
}

export const ClientAPI = getAPI(http);
