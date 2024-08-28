import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.scss";
import Loading from "./loading.svg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: "primary" | "secondary" | "danger" | "disabled";
	type?: "submit" | "button";
	isLoading?: boolean;
}

export function Button({
	variant,
	children,
	type = "button",
	isLoading,
	...props
}: ButtonProps) {
	return (
		<button
			className={`button ${variant} ${isLoading ? "disabled loading" : ""}`}
			type={type}
			{...props}
		>
			{isLoading ? (
				<img src={Loading} alt={"Loading"} className={"animate-spin"} />
			) : (
				children
			)}
		</button>
	);
}
