"use client";
import { useState, useEffect } from "react";
import styles from "./DataWrapper.module.css";
import TableBody from "./TableBody";
import TableSidebar from "./TableSidebar";

const FILTER_FIELDS = ["Perk Type", "Tags"];

export default function DataWrapper(props) {
	const [data, setData] = useState([]);
	const [filters, setFilters] = useState({});
	const [sortDirection, setSortDirection] = useState("asc");
	const [filterCategories, setFilterCategories] = useState({});

	useEffect(() => {
		// Retrieve the data from JSON file
		const fetchData = async () => {
			const res = await fetch("/data/PennPerks.json");
			const result = await res.json();
			console.log("result", result);
			setData(result);
		};
		fetchData();
	}, []);

	useEffect(() => {
		// Create a data structure for storing info about filter options
		const categories = {};

		// Populate each field with a set for options
		FILTER_FIELDS.forEach((field) => {
			categories[field] = new Set([]);
		});

		// This empty structure should be what we need for initializing filters
		setFilters(categories);
		// setFilters({
		// 	Tags: new Set(["Newspapers"]),
		// 	"Perk Type": new Set(["Free"]),
		// });

		// Calculate filterCategories based on data
		data.forEach((datum) => {
			FILTER_FIELDS.forEach((field) => {
				if (Array.isArray(datum[field])) {
					// Need to loop through each item in the array
					datum[field].forEach((item) => {
						if (!categories[field].has(item)) {
							// If it's not, add it
							categories[field].add(item);
						}
					});
				} else {
					// Check if the value for this datum is in the set already
					if (!categories[field].has(datum[field])) {
						// If it's not, add it
						categories[field].add(datum[field]);
					}
				}
			});
		});

		setFilterCategories(categories);
	}, [data]);

	// TODO: THIS IS HELLA BROKEN
	const filteredData = data.filter((datum) => {
		const filterFitPerField = [];
		// check each filter field
		FILTER_FIELDS.forEach((field) => {
			let fitsAnyFilters = false;
			const filtersForThisField = filters[field];
			// does this field exist in filters?
			if (filtersForThisField && filtersForThisField.size !== 0) {
				// if so, check this datum for the values that are in filters
				if (Array.isArray(datum[field])) {
					datum[field].forEach((potentialMatch) => {
						if (filtersForThisField.has(potentialMatch)) {
							fitsAnyFilters = true;
						}
					});
				} else {
					if (filtersForThisField.has(datum[field])) {
						fitsAnyFilters = true;
					}
				}
			}
			filterFitPerField.push(fitsAnyFilters);
		});
		return !filterFitPerField.includes(false);
	});

	const sortedData = filteredData.sort((a, b) => {
		if (sortDirection === "asc") {
			return a.Organization.localeCompare(b.Organization);
		}
		return b.Organization.localeCompare(a.Organization);
	});

	const dataKeys = data && data[0] && Object.keys(data[0]);

	return (
		<div className={styles["table-wrapper"]}>
			<TableSidebar
				{...{
					filterCategories,
					FILTER_FIELDS,
					filters,
					setFilters,
					setSortDirection,
				}}
			/>
			<TableBody {...{ sortedData, dataKeys }} />
		</div>
	);
}
