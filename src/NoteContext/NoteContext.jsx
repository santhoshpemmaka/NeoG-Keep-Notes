import React, {createContext, useContext, useReducer} from "react";
import useReducerFun from "./useReducerFun";

const NoteContext = createContext({});

const NoteProvider = ({children}) => {
	const [state, dispatch] = useReducer(useReducerFun, {
		notes: [],
		deleteNotes: [],
		archiveNotes: [],
		labels: ["Home", "Work"],
		categoryFilter: [],
		labelFilter: [],
		Pinned: false,
		sortByDate: false,
	});

	return (
		<NoteContext.Provider value={{state, dispatch}}>
			{children}
		</NoteContext.Provider>
	);
};

const useNote = () => useContext(NoteContext);

export {NoteProvider, useNote};
