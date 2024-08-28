import {
	// useCreateProduct,
	// useDeleteProducts,
	useGetProducts,
} from "../../api/hooks/use-product.ts";
import { Card } from "../components/card";
import "./index.scss";
import { useState } from "react";
import { NavBar } from "./navbar.tsx";
import { ProductSkeleton } from "./skeleton.tsx";

export function ShowProduct() {
	const [checkedProducts, setCheckedProducts] = useState<number[]>([]);
	const ProductsList = useGetProducts();
	// const createProduct = useCreateProduct();

	// @ts-ignore
	return (
		<section className={"home"}>
			<NavBar checkedProducts={checkedProducts} />

			{/*<button*/}
			{/*	onClick={async () =>*/}
			{/*		createProduct.mutate({*/}
			{/*			sku: "DVD123",*/}
			{/*			name: "Awesome Movie",*/}
			{/*			price: 9.99,*/}
			{/*			category: "DVD",*/}
			{/*			size: 700,*/}
			{/*		})*/}
			{/*	}*/}
			{/*	type="button"*/}
			{/*>*/}
			{/*	Click to add prodcut*/}
			{/*</button>*/}

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
