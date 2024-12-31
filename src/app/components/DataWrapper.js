"use client";
import { useState } from "react";

export default function DataWrapper(props) {
	const { data = [] } = props;
	const [filters, setFilters] = useState(new Set([]));
	return "hiiii";
}
