import { ClientAPI } from "../config/api";
import type { Product } from "../services/product.ts";
import useMutation from "./use-mutation.ts";
import { useQuery } from "./use-query";

export function useGetProducts() {
	return useQuery({
		queryFn: ClientAPI.product.getProducts,
		queryKey: "list-products",
	});
}

export function useCreateProduct() {
	return useMutation<Product>({
		mutationFn: ClientAPI.product.createProduct,
	});
}
export function useDeleteProducts() {
	return useMutation<number[]>({
		mutationFn: ClientAPI.product.deleteProducts,
	});
}
