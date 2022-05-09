const useReducerFun = (state, action) => {
	switch (action.type) {
		case "ADD_NOTE":
			return {...state, notes: action.payload};
		case "REMOVE_NOTE": {
			return {...state, notes: action.payload};
		}
		case "ADD_TAG": {
			return {...state, category: [...state.category, action.payload]};
		}
		case "SORT_TAG": {
			return {...state, sortBy: action.payload};
		}
		case "DELETE_NOTE": {
			return {...state, deleteNotes: [...state.deleteNotes, action.payload]};
		}
		case "ADD_ARCHIVE":
			return {
				...state,
				archiveNotes: action.payload,
			};
		default:
			return state;
	}
};

export default useReducerFun;
