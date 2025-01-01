import { Funnel } from "@phosphor-icons/react";

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
			<div>
				<div>Product Type</div>
				<div>
					<div>{/* <input  */}</div>
				</div>
			</div>
		</div>
	);
}
