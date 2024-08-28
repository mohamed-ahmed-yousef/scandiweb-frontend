import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: "primary" | "secondary" | "danger" | "disabled";
	type?: "submit" | "button";
}

export function Button({
	variant,
	children,
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button className={`button ${variant}`} type={type} {...props}>
			{children}
		</button>
	);
}
