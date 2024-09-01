import type { Product } from "../../../api/services/product.ts";
import "./index.scss";
import type { Dispatch, SetStateAction } from "react";

export function Card({
	product,
	setCheckedProducts,
}: {
	product: Product & { id: number };
	setCheckedProducts: Dispatch<SetStateAction<number[]>>;
}) {
	return (
		<section className={"product"}>
			<input
				type={"checkbox"}
				className="delete-checkbox"
				id={"delete-checkbox"}
				onChange={(value) => {
					if (value.target.checked) {
						setCheckedProducts((prev) => [...prev, product.id]);
					} else {
						setCheckedProducts((prev) =>
							prev.filter((item) => item !== product.id),
						);
					}
				}}
			/>
			<div className={"product-info"}>
				<p>{product.sku}</p>
				<p>{product.name}</p>
				<p>{product.price} $</p>
				{product.category === "Book" && <p>Weight: {product.weight} KG</p>}
				{product.category === "DVD" && <p>Size: {product.size} MB</p>}
				{product.category === "Furniture" && (
					<p>
						Dimensions: {product.height} x {product.width} x {product.length}
					</p>
				)}
			</div>
		</section>
	);
}
