import "./form.scss";
import type { FormEvent, ReactNode } from "react";

export function Form({
	action,
	children,
	onSubmit,
}: {
	action?: string;
	children: ReactNode;
	onSubmit: (data: FormData) => void;
}) {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formElement = e.target as HTMLFormElement;
		const isValid = formElement.checkValidity();

		formElement.classList.add("submitted");

		// focusing the first invalid field
		const firstInvalidField = formElement.querySelector(
			":invalid",
		) as HTMLInputElement;

		firstInvalidField?.focus();

		if (isValid) {
			const dataObject = new FormData(formElement);
			onSubmit(dataObject);
		}
	};

	return (
		<form
			action={action}
			id="product_form"
			onSubmit={handleSubmit}
			noValidate
			className={"form"}
		>
			{children}
		</form>
	);
}
