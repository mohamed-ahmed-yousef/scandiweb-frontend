import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root.tsx";

// biome-ignore lint/style/noNonNullAssertion: No need here
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<main className={"container"}>
			<RouterProvider router={router} />
		</main>
	</StrictMode>,
);
