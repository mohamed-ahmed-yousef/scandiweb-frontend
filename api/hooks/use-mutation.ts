import { AxiosError } from "axios";
import { useCallback, useState } from "react";

type MutationFn<T> = (data: T) => Promise<T>;

export function useMutation<T>({
	mutationFn,
}: {
	mutationFn: MutationFn<T>;
}) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isSuccess, setIsSuccess] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const mutate = useCallback(
		async (data: T) => {
			setLoading(true);
			setError(null);

			try {
				const response = await mutationFn(data);
				setData(response);
				setIsSuccess(true);
			} catch (err) {
				console.log(err, "erro");
				if (err instanceof AxiosError) {
					if (typeof err.response?.data?.error === "string") {
						setError(err.response?.data?.error);
						// console.log(error, "error ")
					} else {
						setError("Something went wrong");
					}
				} else {
					setError("Something went wrong");
				}
			} finally {
				setLoading(false);
			}
		},
		[mutationFn],
	);

	return { mutate, data, loading, error, isSuccess };
}

export default useMutation;
