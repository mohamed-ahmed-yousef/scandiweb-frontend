import {
	// useCreateProduct,
	// useDeleteProducts,
	useGetProducts,
} from "../../api/hooks/use-product.ts";
import { Card } from "../components/card";
import "./index.scss";
import { useState } from "react";
import { NavBar } from "./navbar.tsx";
import { NoProductItem } from "./no-data.tsx";
import { ProductSkeleton } from "./skeleton.tsx";

export function ShowProduct() {
	const [checkedProducts, setCheckedProducts] = useState<number[]>([]);
	const ProductsList = useGetProducts();
	// const createProduct = useCreateProduct();

	// @ts-ignore
	return (
		<section className={"home"}>
			<NavBar checkedProducts={checkedProducts} />
			<NoProductItem
				data={ProductsList?.data}
				isLoading={!ProductsList?.data}
			/>
			<section className={"products"}>
				{!ProductsList?.data &&
					Array.from({ length: 10 }).map((_, index) => (
						<>
							<ProductSkeleton key={index.toString()} />
						</>
					))}

				{Array.isArray(ProductsList?.data) &&
					ProductsList?.data.map((item) => (
						<Card
							key={item.id}
							product={item}
							setCheckedProducts={setCheckedProducts}
						/>
					))}
			</section>
		</section>
	);
}
