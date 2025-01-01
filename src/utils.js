export function deepCopyObjectWithSets(obj) {
	const copy = {};

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];

			if (value instanceof Set) {
				// Create a new Set and copy over the values
				copy[key] = new Set(value);
			} else if (value && typeof value === "object") {
				// Recursively deep copy nested objects (excluding Sets)
				copy[key] = deepCopyObjectWithSets(value);
			} else {
				// For primitive types, just copy the value
				copy[key] = value;
			}
		}
	}

	return copy;
}
