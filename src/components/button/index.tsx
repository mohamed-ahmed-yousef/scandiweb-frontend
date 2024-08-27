import type { ReactNode } from "react";
import "./index.scss";

export function Button({
	variant,
	children,
	type = "button",
}: { variant: string; children: ReactNode; type?: "submit" | "button" }) {
	return (
		<button className={`button ${variant}`} type={type}>
			{children}
		</button>
	);
}
