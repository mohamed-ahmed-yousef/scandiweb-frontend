import { Button } from "../components/button";
import { Form } from "../components/form/form.tsx";
import { TextInput } from "../components/input-text";
import { Select } from "../components/select";

export default function AddProduct() {
	const onSubmit = (data: FormData) => {
		console.log(Object.fromEntries(data.entries()));
	};

	return (
		<div>
			<Form onSubmit={onSubmit}>
				<h2>A simple form</h2>
				<TextInput label="Name:" id="name" name="name" required />
				<TextInput
					label="Email:"
					id="email"
					type="number"
					name="email"
					required
				/>
				<TextInput label="Address:" id="address" name="address" />
				<TextInput label="Tel:" id="tel" name="tel" type="tel" />

				<Select
					data={["DVD", "Book", "Furniture"]}
					label={"label"}
					name={"select"}
				/>

				<Button variant={"primary"} type={"submit"}>
					Submit
				</Button>
			</Form>
		</div>
	);
}
