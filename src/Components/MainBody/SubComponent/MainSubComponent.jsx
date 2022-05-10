import React from "react";
import {useAuthentication} from "../../../NoteContext/AuthContext/AuthContext";
import {useNote} from "../../../NoteContext/NoteContext";
import "./MainSubComponent.css";
import {getFilterDate} from "./dataSorting";
import DisplayNotes from "./DisplayNotes";

const MainSubComponent = () => {
	const {state, dispatch} = useNote();
	const {
		state: {token},
	} = useAuthentication();
	const filterNotes = state.notes;
	const filterNotesDate = getFilterDate(state, state.notes);
	const StickyNotes =
		state.sortBy === "Trash"
			? state.deleteNotes
			: state.sortBy === "Archive"
			? state.archiveNotes
			: state.sortBy === "All" || state.sortBy == null
			? filterNotes
			: filterNotes &&
			  filterNotes.length > 0 &&
			  state.sortBy != null &&
			  state.sortBy === "Pinned"
			? filterNotes.filter((item) => item.pinned === true)
			: filterNotes.filter((item) => item.tags === state.sortBy);
	return (
		<>
			{token && (
				<div className='container-note'>
					{StickyNotes && StickyNotes.length > 0 && (
						<h3>{state.sortBy ? state.sortBy : "All"} Sticky Notes:</h3>
					)}
					<div className='item-notes'>
						{StickyNotes &&
							StickyNotes.length > 0 &&
							StickyNotes.map((note) => (
								<DisplayNotes note={note} key={note._id} />
							))}
					</div>
					<div className='space-4rem'></div>
				</div>
			)}
		</>
	);
};

export default MainSubComponent;
