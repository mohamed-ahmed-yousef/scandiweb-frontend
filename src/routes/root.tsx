import { createBrowserRouter } from "react-router-dom";
import HomePage from "../App.tsx";
import AddProduct from "../add-product/form.tsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/addproduct",
		element: <AddProduct />,
	},
]);
