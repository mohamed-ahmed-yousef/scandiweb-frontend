import {
	useCreateProduct,
	useGetProducts,
} from "../../api/hooks/use-product.ts";

export function ShowProduct() {
	const { data } = useGetProducts();
	const createProduct = useCreateProduct();

	console.log(data);

	return (
		<section>
			Product will display here....
			<button
				onClick={async () =>
					createProduct.mutate({
						sku: "DVD123",
						name: "Awesome Movie",
						price: 9.99,
						category: "DVD",
						size: 700,
					})
				}
				type="button"
			>
				Click to add prodcut
			</button>
		</section>
	);
}
