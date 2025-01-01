import { Wrench } from "@phosphor-icons/react";

import TableFilters from "./TableFilters";
import styles from "./TableSidebar.module.css";

export default function TableSidebar(props) {
	const { filterCategories, FILTER_FIELDS, filters, setFilters } = props;
	return (
		<div className={styles["table-sidebar"]}>
			<div className={styles["table-sidebar-header"]}>
				{/* Phosphor wrench icon should go here */}
				<Wrench size="24px" fill="#011f5b" />
				Settings
			</div>
			<div className={styles["table-sidebar-body"]}>
				<TableFilters
					{...{
						filterCategories,
						FILTER_FIELDS,
						filters,
						setFilters,
					}}
				/>
			</div>
		</div>
	);
}
