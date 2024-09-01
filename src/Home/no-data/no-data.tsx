import document from "./no-data.svg";
import "./no-data.scss"; // Ensure your SCSS file is imported

export function NoProductItem({
	data,
	isLoading,
}: { data: string[]; isLoading: boolean }) {
	if (data?.length || isLoading) return null;
	return (
		<div className="no-data">
			<img alt={"No data"} src={document} className={"image"} />
			<h1>No products to show.</h1>
		</div>
	);
}
