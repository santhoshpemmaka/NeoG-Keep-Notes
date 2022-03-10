import React, {createContext, useContext, useReducer} from "react";

const NoteContext = createContext({});

const NoteProvider = ({children}) => {
	const useReducerFun = (state, action) => {
		switch (action.type) {
			case "ADD_NOTE":
				return {...state, notes: [...state.notes, action.payload]};
			case "REMOVE_NOTE": {
				const new_state = state.notes;
				const new_note =
					new_state &&
					new_state.length > 0 &&
					new_state.filter((item_note) => item_note.id !== action.payload.id);
				return {...state, notes: new_note};
			}
			case "ADD_TAG": {
				return {...state, category: [...state.category, action.payload]};
			}
			case "SORT_TAG": {
				return {...state, sortBy: action.payload};
			}
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(useReducerFun, {
		notes: [],
		category: [
			{
				name: "All",
			},
			{
				name: "Pinned",
			},
			{
				name: "Work",
			},
			{
				name: "Home",
			},
			{
				name: "Class",
			},
		],
		sortBy: null,
		Pinned: false,
	});

	return (
		<NoteContext.Provider value={{state, dispatch}}>
			{children}
		</NoteContext.Provider>
	);
};

const useNote = () => useContext(NoteContext);

export {NoteProvider, useNote};
