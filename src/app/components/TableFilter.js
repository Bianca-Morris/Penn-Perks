import { CheckSquare, Square } from "@phosphor-icons/react";

import styles from "./TableFilter.module.css";

export default function TableFilter(props) {
	const { isSelected, label, setFilters } = props;
	return (
		<div className={styles["table-filter"]}>
			{isSelected ? <CheckSquare /> : <Square />}
			{label}
		</div>
	);
}
