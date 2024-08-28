import { type FormEvent, type HTMLProps, useState } from "react";
import "./index.scss";

interface TextInputProps extends HTMLProps<HTMLInputElement> {
	id: string;
	name: string;
	className?: string;
	label?: string;
	errorText?: string;
}

export function TextInput({
	className,
	label,
	errorText,
	id,
	...rest
}: TextInputProps) {
	const [validationMessage, setValidationMessage] = useState<string>("");

	const onInvalid = (e: FormEvent) => {
		const target = e.target as HTMLInputElement;
		setValidationMessage(target.validationMessage);
	};

	const onBlur = (e: FormEvent) => {
		const target = e.target as HTMLInputElement;

		// biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
		if (!!validationMessage) {
			setValidationMessage(target.validationMessage);
		}
	};

	return (
		<div className={"wrapper"}>
			<div>
				{label && (
					<div className={"label"}>
						<label htmlFor={id}>{label}</label>
					</div>
				)}
			</div>
			<div className="relative">
				<input
					id={id}
					className={"input"}
					onInvalid={onInvalid}
					onBlur={onBlur}
					{...rest}
				/>
			</div>

			{!!validationMessage && (
				<div className={"validationMessage"}>
					{errorText || validationMessage}
				</div>
			)}
		</div>
	);
}
TextInput.displayName = "TextInput";
