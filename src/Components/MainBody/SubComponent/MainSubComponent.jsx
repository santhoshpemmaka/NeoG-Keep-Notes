import React from "react";
import {useAuthentication} from "../../../NoteContext/AuthContext/AuthContext";
import {useNote} from "../../../NoteContext/NoteContext";
import "./MainSubComponent.css";
import {getFilterDate, getFilterCategory, getFilterLabel} from "./dataSorting";
import DisplayNotes from "./DisplayNotes";

const MainSubComponent = () => {
	const {state, dispatch} = useNote();
	const {
		state: {token},
	} = useAuthentication();
	const filterNotes = state.notes;
	const filterNotesDate = getFilterDate(state, state.notes);
	const StickyNotes =
		state.categoryFilter.length !== 0
			? getFilterCategory(filterNotesDate, state)
			: getFilterLabel(filterNotesDate, state);

	return (
		<>
			{token && (
				<div className='container-note'>
					{StickyNotes && StickyNotes.length > 0 && (
						<h3>
							{state.categoryFilter ? state.categoryFilter[0] : "All"} Sticky
							Notes:
						</h3>
					)}
					<div className='item-notes'>
						{StickyNotes && StickyNotes.length > 0 ? (
							StickyNotes.map(
								(note) =>
									note.title && <DisplayNotes note={note} key={note._id} />
							)
						) : (
							<h1 className='empty-label'>
								Nothing is created yet. Please add sticky note.
							</h1>
						)}
					</div>
					<div className='space-4rem'></div>
				</div>
			)}
		</>
	);
};

export default MainSubComponent;
