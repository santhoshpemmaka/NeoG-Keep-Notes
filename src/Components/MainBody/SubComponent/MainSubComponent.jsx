import React from "react";
import {useAuthentication} from "../../../NoteContext/AuthContext/AuthContext";
import {useNote} from "../../../NoteContext/NoteContext";
import {
	addArchiveNoteToServer,
	deleteFromServer,
} from "../../../utils/server-request";
import "./MainSubComponent.css";
import ColorPicker from "./ColorPicker";

const MainSubComponent = () => {
	const {state, dispatch} = useNote();
	const {
		state: {token},
	} = useAuthentication();
	const filterNotes = state.notes;
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
								<div
									key={note._id}
									className='item-note'
									style={{
										backgroundColor: note.noteColor ? note.noteColor : "#FFF",
									}}>
									<div className='item-note-title'>
										<label className='item-title'>{note.title}</label>
										<i
											className='fas fa-thumbtack thumbtack-icon'
											style={{
												color: `${note.pinned ? "#202135" : "#0000008a"}`,
												marginRight: "1rem",
											}}></i>
									</div>

									<label className='item-descr'>{note.description}</label>
									<div className='item-actions'>
										<div className='item-acitons-left'>
											<label className='item-tag'>{note.tags}</label>
											<ColorPicker />
										</div>
										<div className='item-actions-right'>
											<i
												className='fas fa-sticky-note remove-icon'
												onClick={() =>
													addArchiveNoteToServer(dispatch, note, token)
												}></i>
											<i
												className='fas fa-trash-alt remove-icon'
												onClick={() =>
													deleteFromServer(dispatch, note, token)
												}></i>
											<label className='item-actions-date'>
												Created on {note.date}
											</label>
										</div>
									</div>
								</div>
							))}
					</div>
					<div className='space-4rem'></div>
				</div>
			)}
		</>
	);
};

export default MainSubComponent;
