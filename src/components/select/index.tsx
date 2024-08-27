import ".//index.scss";

export function Select({
	data,
	label,
	name,
}: { data: string[]; label: string; name: string }) {
	return (
		<div className="wrapper">
			<label className="label" htmlFor={label}>
				{label}
			</label>
			<select className="select" id={label} name={name}>
				{data.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
}
