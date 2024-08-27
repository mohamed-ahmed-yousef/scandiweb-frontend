import { BACKEND_URL } from "../utils/constants";
import { Button } from "./components/button";
import FromTester from "./form.tsx";

export default function App() {
	console.log(BACKEND_URL, "BACKEND_URL");
	return (
		<main>
			<Button variant={"solid"}>Submit me</Button>
			<Button variant={"white"}>Submit me</Button>
			<Button variant={"disabled"}>Submit me</Button>
			<Button variant={"cancel"}>Submit me</Button>
			<FromTester />
		</main>
	);
}
