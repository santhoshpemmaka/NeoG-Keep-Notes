import React, {useState} from "react";
import {
	addArchiveNoteToServer,
	deleteFromServer,
} from "../../../utils/server-request";
import {useNote} from "../../../NoteContext/NoteContext";
import {useAuthentication} from "../../../NoteContext/AuthContext/AuthContext";
import "./MainSubComponent.css";
import EditNotes from "./EditNotes";
import {useEffect} from "react/cjs/react.production.min";

const DisplayNotes = ({note}) => {
	const [editNotes, seteditNotes] = useState(false);
	const [colorNote, setcolorNote] = useState();
	const [updateNote, setupdateNote] = useState({
		_id: "",
		title: "",
		description: "",
		tags: "Home",
		pinned: false,
		date: "",
		noteColor: "",
	});
	const {state, dispatch} = useNote();
	const {
		state: {token},
	} = useAuthentication();
	return (
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
				</div>
				<div className='item-actions-right'>
					<label className='item-actions-date'>Created on {note.date}</label>
					<i
						className='fas fa-sticky-note remove-icon'
						onClick={() => addArchiveNoteToServer(dispatch, note, token)}></i>
					<i
						className='fas fa-trash-alt remove-icon'
						onClick={() => deleteFromServer(dispatch, note, token)}></i>
					<i
						className='fas fa-edit remove-icon'
						onClick={() => seteditNotes((prev) => !prev)}></i>
				</div>
			</div>
			{editNotes && <EditNotes note={note} seteditNotes={seteditNotes} />}
		</div>
	);
};

export default DisplayNotes;
