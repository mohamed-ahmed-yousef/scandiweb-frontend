import { useState } from "react";
import { TextInput } from "../components/input-text";
import { Select } from "../components/select";

export function AddProductForm() {
	const [categoy, setCategory] = useState("");

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
				min={0}
				required
			/>

			<Select
				group={"-- Type Switcher --"}
				data={["DVD", "Book", "Furniture"]}
				label={"label"}
				name={"category"}
				setCategory={setCategory}
				required
			/>
			{!categoy && (
				<h3>Please select a type to display the remaining fields</h3>
			)}
			{categoy === "DVD" && (
				<>
					<h3>Please, provide size</h3>
					<TextInput
						label={"Size (MB)"}
						id="size"
						name="size"
						placeholder={"#size"}
						type={"number"}
						min={0}
						required
					/>
				</>
			)}

			{categoy === "Book" && (
				<>
					<h3>Please, provide weight</h3>
					<TextInput
						label={"Weight (KG)"}
						id="weight"
						name="weight"
						placeholder={"#weight"}
						required
						type={"number"}
						min={0}
					/>
				</>
			)}
			{categoy === "Furniture" && (
				<>
					<h3>Please, provide dimensions</h3>

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
			)}
		</div>
	);
}
