import { useState } from "react";
import { Button } from "../components/button";
import { Form } from "../components/form/form.tsx";
import { TextInput } from "../components/input-text";
import { Select } from "../components/select";

export function AddProductForm() {
	const [categoy, setCategory] = useState("");
	const onSubmit = (data: FormData) => {
		console.log(Object.fromEntries(data.entries()));
	};

	return (
		<div>
			<Form onSubmit={onSubmit}>
				<TextInput
					label="SKU"
					id="name"
					name="name"
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
				{categoy === "DVD" && (
					<TextInput
						label={"Size"}
						id="size"
						name="size"
						placeholder={"#size"}
						type={"number"}
						min={0}
						required
					/>
				)}

				{categoy === "Book" && (
					<TextInput
						label={"Weight"}
						id="weight"
						name="weight"
						placeholder={"#weight"}
						required
						type={"number"}
						min={0}
					/>
				)}
				{categoy === "Furniture" && (
					<>
						<TextInput
							label={"Height"}
							id="height"
							name="height"
							placeholder={"#height"}
							type={"number"}
							min={0}
							required
						/>
						<TextInput
							label={"Width"}
							id="width"
							name="width"
							placeholder={"#width"}
							type={"number"}
							min={0}
							required
						/>
						<TextInput
							label={"Length"}
							id="length"
							name="length"
							placeholder={"#length"}
							type={"number"}
							min={0}
							required
						/>
					</>
				)}

				<Button variant={"primary"} type={"submit"}>
					Submit
				</Button>
			</Form>
		</div>
	);
}
