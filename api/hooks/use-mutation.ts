import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { http } from "../config/http.ts";
type MutationFn<T> = (data: T) => Promise<T>;

export function useMutation<T>({
	mutationFn,
}: {
	mutationFn: MutationFn<T>;
}) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const mutate = useCallback(
		async (data: T) => {
			setLoading(true);
			setError(null);

			try {
				const response = await http
					.post("/create-product", data)
					.then((res) => res.data);
				setData(response);
			} catch (err) {
				if (err instanceof AxiosError) {
					setError(err.response?.data);
				}
				setError("Something went wrong");
			} finally {
				setLoading(false);
			}
		},
		[mutationFn],
	);

	return { mutate, data, loading, error };
}

export default useMutation;
