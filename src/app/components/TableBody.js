export default function TableBody(props) {
	const { sortedData = [], dataKeys = [] } = props;

	console.log("sortedData", sortedData);

	// const dataKeysToExclude =

	return (
		<table>
			<thead>
				<tr>
					{dataKeys.map((key) => (
						<th key={key}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sortedData.map((datum, j) => {
					return (
						<tr key={j}>
							{dataKeys.map((key, i) => {
								if (key === "Website") {
									return (
										<td key={key + datum[key] + i}>
											<a
												href={datum[key]}
												target="_blank"
											>
												Link
											</a>
										</td>
									);
								}
								console.log("key", key, datum[key]);
								return (
									<td key={key + datum[key] + i}>
										{datum[key]}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
