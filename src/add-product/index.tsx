import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { AddProductForm } from "./form.tsx";
import "./index.scss";

export default function AddProduct() {
	return (
		<main className={"add-product"}>
			<section className={"add-product-navbar"}>
				<h1>Product Add</h1>
				<div className={"action"}>
					<Button variant={"primary"}>Save</Button>
					<Link to={"/"} className={"link"}>
						<Button variant={"danger"}>Cancel</Button>
					</Link>
				</div>
			</section>
			<AddProductForm />
		</main>
	);
}
