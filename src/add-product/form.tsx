import { useState } from "react";
import { TextInput } from "../components/input-text";
import { Select } from "../components/select";

export type CategoryType = "DVD" | "Book" | "Furniture" | "";

export function AddProductForm() {
	const [categoy, setCategory] = useState<CategoryType>("");
	const categoryComponents = {
		DVD: DVDInputs,
		Book: BookInputs,
		Furniture: FurnitureInputs,
	};
	return (
		<div className={"wrapper"}>
			<TextInput
				label="SKU"
				id="sku"
				name="sku"
				required
				placeholder={"#sku"}
			/>
			<TextInput
				label="Name"
				id="name"
				type="text"
				name="name"
				placeholder={"#name"}
				required
			/>
			<TextInput
				label="Price"
				id="price"
				name="price"
				placeholder={"#price"}
				type={"number"}
				// min={0}
				required
			/>

			<Select
				group={"-- Type Switcher --"}
				data={[
					{ label: "DVD", id: "DVD" },
					{ label: "Book", id: "Book" },
					{ label: "Furniture", id: "Furniture" },
				]}
				label={"label"}
				name={"category"}
				setCategory={setCategory}
				id="productType"
				required
			/>
			{!categoy ? (
				<h4>Please select a type to display the remaining fields</h4>
			) : (
				categoryComponents[categoy]()
			)}
		</div>
	);
}

function DVDInputs() {
	return (
		<>
			<h4>Please, provide size</h4>
			<TextInput
				label={"Size (MB)"}
				id="size"
				name="size"
				placeholder={"#size"}
				// min={0}
				required
				type={"number"}
			/>
		</>
	);
}

function BookInputs() {
	return (
		<>
			<h4>Please, provide weight</h4>
			<TextInput
				label={"Weight (KG)"}
				id="weight"
				name="weight"
				placeholder={"#weight"}
				required
				// min={0}
				type={"number"}
			/>
		</>
	);
}

function FurnitureInputs() {
	return (
		<>
			<h4>Please, provide dimensions</h4>

			<TextInput
				label={"Height (CM)"}
				id="height"
				name="height"
				placeholder={"#height"}
				type={"number"}
				min={0}
				required
			/>
			<TextInput
				label={"Width (CM)"}
				id="width"
				name="width"
				placeholder={"#width"}
				type={"number"}
				min={0}
				required
			/>
			<TextInput
				label={"Length (CM)"}
				id="length"
				name="length"
				placeholder={"#length"}
				type={"number"}
				min={0}
				required
			/>
		</>
	);
}
