import ".//index.scss";
import type { Dispatch, SetStateAction } from "react";
import type { CategoryType } from "../../add-product/form.tsx";

export function Select({
	data,
	label,
	name,
	group,
	required,
	setCategory,
	id,
}: {
	data: { label: string; id: string }[];
	label: string;
	name: string;
	group: string;
	required: boolean;
	setCategory: Dispatch<SetStateAction<CategoryType>>;
	id: string;
}) {
	return (
		<div className="wrapper">
			<label className="label" htmlFor={id}>
				{label}
			</label>
			<select
				required={required}
				className="select"
				id={id}
				name={name}
				onChange={(e) => setCategory(e.target.value as CategoryType)}
			>
				<>
					<option value={""} style={{ fontWeight: "bold" }}>
						{group}
					</option>
					{data.map((item) => (
						<option key={item.id} id={item.id} value={item.label}>
							{item.label}
						</option>
					))}
				</>
			</select>
		</div>
	);
}
