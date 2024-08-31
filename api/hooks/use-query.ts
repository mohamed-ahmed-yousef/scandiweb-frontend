import { AxiosError } from "axios";
import { useEffect, useState } from "react";

type QueryFn<T> = () => Promise<T>;

export function useQuery<T>({ queryFn }: { queryFn: QueryFn<T> }) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchData = async () => {
		try {
			const response = await queryFn();
			setData(response);
		} catch (error) {
			if (
				error instanceof AxiosError &&
				typeof error.response?.data?.message === "string"
			) {
				setError(error.response?.data?.message);
			} else {
				setError("Something went wrong");
			}
		} finally {
			setLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchData();
		return () => {};
	}, [queryFn]);
	return { data, loading, error, refetch: fetchData };
}
