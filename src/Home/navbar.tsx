import { Button } from "../components/button";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useDeleteProducts } from "../../api/hooks/use-product.ts";

export function NavBar({ checkedProducts }: { checkedProducts: number[] }) {
	const deleteProducts = useDeleteProducts();

	return (
		<section className={"navbar"}>
			<h1>Product List</h1>
			<div className={"nav-link"}>
				<Link className={"link"} to={"/addproduct"}>
					<Button variant={"secondary"}>Add Product</Button>
				</Link>
				<Button
					variant={checkedProducts.length > 0 ? "danger" : "disabled"}
					onClick={() => {
						deleteProducts.mutate(checkedProducts);
						window.location.reload();
					}}
				>
					Mass delete
				</Button>
			</div>
		</section>
	);
}
