import { Link } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";
import { ShowProduct } from "./Home";

export default function HomePage() {
	console.log(BACKEND_URL, "BACKEND_URL");
	return (
		<main>
			<Link to={"/"}>Home</Link>
			<Link to={"/addproduct"}>Add Product</Link>
			<ShowProduct />
		</main>
	);
}
