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
				archiveNotes: action.payload,
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
				notes: [
					...state.notes.map((note) =>
						note._id === action.payload._id ? {...action.payload} : {...note}
					),
				],
			};
		}

		case "CATEGORY_FILTER": {
			if(state.categoryFilter.includes(action.payload)){
				return {
					...state,
					categoryFilter: [...state.categoryFilter.filter((category) => category !== action.payload)]
				}
			}
			else{
				return{
					...state,
					categoryFilter: [action.payload]
				}
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
			return{
				...state,
				labelFilter: [],
				categoryFilter: []
			}
		}
		default:
			return state;
	}
};

export default useReducerFun;
