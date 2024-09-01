import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { AddProductForm } from "./form.tsx";
import "./index.scss";
import { useEffect } from "react";
import { useCreateProduct } from "../../api/hooks/use-product.ts";
import { Form } from "../components/form/form.tsx";

export default function AddProduct() {
	const createProduct = useCreateProduct();
	const onSubmit = (data: FormData) => {
		// @ts-ignore
		createProduct.mutate(Object.fromEntries(data.entries()));
	};
	useEffect(() => {
		if (createProduct.isSuccess) window.location.href = "/";
	}, [createProduct.isSuccess]);
	return (
		<main className={"add-product"}>
			<Form onSubmit={onSubmit}>
				<section className={"add-product-navbar"}>
					<h1>Product Add</h1>
					{typeof createProduct.error === "string" && createProduct.error && (
						<p className={"error"}>{createProduct.error}</p>
					)}
					<div className={"action"}>
						<Button
							variant={"secondary"}
							type={"submit"}
							isLoading={createProduct.loading}
						>
							Save
						</Button>
						<Link to={"/"} className={"link"}>
							<Button variant={"danger"}>Cancel</Button>
						</Link>
					</div>
				</section>
				<AddProductForm />
			</Form>
		</main>
	);
}
