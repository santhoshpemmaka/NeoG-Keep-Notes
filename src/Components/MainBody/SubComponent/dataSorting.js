export const getFilterDate = (state, data) => {
	let newDate = data;
	if (state.sortByDate) {
		return [...newDate].sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
	}
	return newDate;
};
