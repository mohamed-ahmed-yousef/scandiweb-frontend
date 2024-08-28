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
				<Button variant={"secondary"}>
					<Link className={"link"} to={"/addproduct"}>
						Add Product
					</Link>
				</Button>
				<Button
					variant={"danger"}
					onClick={() => {
						deleteProducts.mutate(checkedProducts);
					}}
				>
					Mass delete
				</Button>
			</div>
		</section>
	);
}
