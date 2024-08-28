import {
	useCreateProduct,
	useDeleteProducts,
	useGetProducts,
} from "../../api/hooks/use-product.ts";
import { Button } from "../components/button/index.tsx";
import { Card } from "../components/card";
import "./index.scss";
import { useState } from "react";

export function ShowProduct() {
	const [checkedProducts, setCheckedProducts] = useState<number[]>([]);
	const { data } = useGetProducts();
	const createProduct = useCreateProduct();
	const deleteProducts = useDeleteProducts();

	return (
		<section className={"home"}>
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
			<Button
				variant={"primary"}
				onClick={() => {
					deleteProducts.mutate(checkedProducts);
				}}
			>
				Mass Delete
			</Button>
			<div className={"products-container"}>
				<section className={"products"}>
					{Array.isArray(data) &&
						data.map((item) => (
							<Card
								key={item.id}
								product={item}
								setCheckedProducts={setCheckedProducts}
							/>
						))}
				</section>
			</div>
		</section>
	);
}
