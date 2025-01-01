import { Funnel } from "@phosphor-icons/react";

import TableFilter from "./TableFilter";
import styles from "./TableFilters.module.css";

export default function TableFilters(props) {
	const { filterCategories, FILTER_FIELDS, filters, setFilters } = props;
	return (
		<div className={styles["table-filters-container"]}>
			<div className={styles["table-filters-container-header"]}>
				<div className={styles["table-filters-container-header-left"]}>
					<Funnel fill="#011f5b" />
					Filter By
				</div>
				<div>(clear)</div>
			</div>
			<div className={styles["table-filters-body"]}>
				{FILTER_FIELDS.map((field) => (
					<div
						key={field}
						className={styles["table-filters-body-category"]}
					>
						<div
							className={
								styles["table-filters-body-category-title"]
							}
						>
							{field}
						</div>
						<div>
							{filterCategories[field] &&
								filterCategories[field].size > 0 &&
								Array.from(filterCategories[field]?.values())
									.sort()
									.map((filter) => (
										<TableFilter
											key={filter}
											label={filter}
											isSelected={filters[field].has(
												filter
											)}
										/>
									))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
