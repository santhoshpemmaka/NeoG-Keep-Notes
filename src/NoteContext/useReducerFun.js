const useReducerFun = (state, action) => {
	switch (action.type) {
		case "ADD_NOTE":
			return {...state, notes: action.payload};
		case "REMOVE_NOTE": {
			return {...state, notes: action.payload};
		}
		case "ADD_TAG": {
			return {...state, labels: [...state.labels, action.payload]};
		}
		case "DELETE_NOTE": {
			return {...state, deleteNotes: [...state.deleteNotes, action.payload]};
		}
		case "ADD_ARCHIVE":
			return {
				...state,
				archiveNotes: action.payload.res,
				notes: [...state.notes].filter(
					(prevNote) => prevNote._id !== action.payload.note._id
				),
			};
		case "SORT_DATE": {
			return {
				...state,
				sortByDate: !state.sortByDate,
			};
		}

		case "UPDATE_NOTE": {
			return {
				...state,
				notes: action.payload,
			};
		}

		case "CATEGORY_FILTER": {
			if (state.categoryFilter.includes(action.payload)) {
				return {
					...state,
					categoryFilter: [
						...state.categoryFilter.filter(
							(category) => category !== action.payload
						),
					],
				};
			} else {
				return {
					...state,
					categoryFilter: [action.payload],
				};
			}
		}
		case "LABEL_FILTER": {
			if (state.labelFilter.includes(action.payload)) {
				return {
					...state,
					labelFilter: [
						...state.labelFilter.filter((label) => label !== action.payload),
					],
				};
			} else {
				return {
					...state,
					labelFilter: [...state.labelFilter, action.payload],
				};
			}
		}

		case "CLEAR_FILTER": {
			return {
				...state,
				labelFilter: [],
				categoryFilter: [],
			};
		}
		default:
			return state;
	}
};

export default useReducerFun;
