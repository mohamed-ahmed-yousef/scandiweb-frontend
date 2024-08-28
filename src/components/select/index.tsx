import ".//index.scss";
import type { Dispatch, SetStateAction } from "react";

export function Select({
	data,
	label,
	name,
	group,
	required,
	setCategory,
}: {
	data: string[];
	label: string;
	name: string;
	group: string;
	required: boolean;
	setCategory: Dispatch<SetStateAction<string>>;
}) {
	return (
		<div className="wrapper">
			<label className="label" htmlFor={label}>
				{label}
			</label>
			<select
				required={required}
				className="select"
				id={label}
				name={name}
				onChange={(e) => setCategory(e.target.value)}
			>
				<>
					<option value={""} style={{ fontWeight: "bold" }}>
						{group}
					</option>
					{data.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</>
			</select>
		</div>
	);
}
