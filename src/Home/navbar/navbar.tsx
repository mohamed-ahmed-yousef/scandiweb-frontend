import { Button } from "../../components/button";
import "./navbar.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDeleteProducts } from "../../../api/hooks/use-product.ts";

export function NavBar({ checkedProducts }: { checkedProducts: number[] }) {
	const deleteProducts = useDeleteProducts();
	useEffect(() => {
		if (deleteProducts.isSuccess) window.location.reload();
	}, [deleteProducts.isSuccess]);
	return (
		<section className={"navbar"}>
			<Link to={"/"}>
				<h1>Product List</h1>
			</Link>
			{deleteProducts.error && (
				<p className={"error"}>{deleteProducts.error}</p>
			)}
			<div className={"nav-link"}>
				<Link className={"link"} to={"/addproduct"}>
					<Button variant={"secondary"}>ADD</Button>
				</Link>

				<Button
					id="delete-product-btn"
					variant={checkedProducts.length <= 0 ? "disabled" : "danger"}
					onClick={() => {
						deleteProducts.mutate(checkedProducts);
						// if (deleteProducts.isSuccess)
						// window.location.reload();
					}}
					isLoading={deleteProducts.loading}
				>
					MASS DELETE
				</Button>
			</div>
		</section>
	);
}
