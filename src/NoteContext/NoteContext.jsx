import React, {createContext, useContext, useReducer} from "react";

const NoteContext = createContext({});

const NoteProvider = ({children}) => {
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
	const [state, dispatch] = useReducer(useReducerFun, {
		notes: [],
		deleteNotes: [],
		archiveNotes: [],
		category: [
			{
				name: "All",
			},
			{
				name: "Pinned",
			},
			{
				name: "Trash",
			},
			{
				name: "Archive",
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
