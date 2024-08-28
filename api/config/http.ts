import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";

console.log("BACKEND_URL", BACKEND_URL);
if (!BACKEND_URL) {
	console.error("BACKEND_URL is not defined");
}
export const http = axios.create({
	baseURL: BACKEND_URL,
});
