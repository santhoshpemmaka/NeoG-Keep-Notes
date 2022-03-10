import React from "react";
import {useNote} from "../../NoteContext/NoteContext";
import "./MainSubComponent.css";

const MainSubComponent = () => {
	const {state, dispatch} = useNote();
	const filterNotes = state.notes;
	const StickyNotes =
		state.sortBy === "All" || state.sortBy == null
			? filterNotes
			: filterNotes &&
			  filterNotes.length > 0 &&
			  state.sortBy != null &&
			  filterNotes.filter((item) => item.tag === state.sortBy);
	return (
		<div className='container-note'>
			{StickyNotes && StickyNotes.length > 0 && <h3>Activities</h3>}
			<div className='item-notes'>
				{StickyNotes &&
					StickyNotes.length > 0 &&
					StickyNotes.map((note) => (
						<div className='item-note'>
							<label className='item-title'>{note.title}</label>
							<label className='item-descr'>{note.description}</label>
							<div className='item-actions'>
								<label className='item-tag'>{note.tag}</label>
								<i
									className='fas fa-trash-alt remove-icon'
									onClick={() =>
										dispatch({type: "REMOVE_NOTE", payload: note})
									}></i>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default MainSubComponent;
