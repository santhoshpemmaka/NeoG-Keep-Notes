export const getFilterDate = (state, data) => {
	let newData = data;
	if (state.sortByDate) {
		return [...newData].sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
	}
	return newData;
};

export const getFilterCategory = (data, state) => {
	let newData = data;
	newData = state.categoryFilter.map((category) => {
		if (category === "Pinned") {
			newData = newData.filter((note) => note.pinned);
		} else if (category === "Trash") {
			newData = state.deleteNotes;
		} else if (category === "Archive") {
			newData = state.archiveNotes;
		}
		return newData;
	});
	return newData[0];
};

export const getFilterLabel = (data, state) => {
	let newData = data;
	if (state.labelFilter.length !== 0) {
		newData = newData.filter((data) => state.labelFilter.includes(data.tags));
	}
	return newData;
};
