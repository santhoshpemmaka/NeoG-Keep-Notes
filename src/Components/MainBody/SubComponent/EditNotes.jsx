import React, {useState} from "react";
import ColorPicker from "./ColorPicker";
import "./EditNotes.css";
import "../MainBody.css";
import {useNote} from "../../../NoteContext/NoteContext";
import {useEffect} from "react/cjs/react.production.min";

const EditNotes = ({note, seteditNotes}) => {
	const {state, dispatch} = useNote();
	const navCategory = state.labels;
	const [updateNote, setupdateNote] = useState({
		_id: "",
		title: "",
		description: "",
		tags: "",
		pinned: "",
		date: "",
		noteColor: "",
	});
	const {_id, title, description, tags, pinned, date, noteColor} = note;

	const onChangeColorHandler = (color) => {
		setupdateNote((prev) => ({...prev, noteColor: color}));
	};

	const savedHandler = () => {
		setupdateNote({
			_id: updateNote._id || _id,
			title: updateNote.title || title,
			description: updateNote.description || description,
			tags: updateNote.tags || tags,
			pinned: updateNote.pinned || pinned,
			date: updateNote.date || date,
			noteColor: updateNote.noteColor || noteColor,
		});
	};

	const closeHandler = () => {
		dispatch({type: "UPDATE_NOTE", payload: updateNote});
		seteditNotes();
	};

	return (
		<div className='editnote-container'>
			<div
				className='main-container'
				style={{
					backgroundColor: `${
						updateNote.noteColor ? updateNote.noteColor : note.noteColor
					}`,
				}}>
				<div className='input-tags'>
					<div className='input-tag-container'>
						<input
							className='input-tag-title'
							type='text'
							placeholder={title}
							value={updateNote.title}
							onChange={(e) =>
								setupdateNote((prev) => ({...prev, title: e.target.value}))
							}
						/>
						<i
							className='fas fa-thumbtack thumbtack-icon'
							style={{
								color: `${updateNote.pinned ? "#202135" : "#0000008a"}`,
							}}
							onClick={() =>
								setupdateNote((prev) => ({...prev, pinned: !prev.pinned}))
							}></i>
					</div>
					<input
						type='text'
						value={updateNote.description}
						placeholder={description}
						onChange={(e) =>
							setupdateNote((prev) => ({...prev, description: e.target.value}))
						}
					/>
				</div>
				<div className='nav-category'>
					<div className='nav-category-items'>
						<select
							className='tag'
							onChange={(e) =>
								setupdateNote((prev) => ({...prev, tags: e.target.value}))
							}
							value={updateNote.tags}
							name='tagsSelector'>
							{navCategory.map((name) => {
								return (
									<option key={name} value={name}>
										{name}
									</option>
								);
							})}
						</select>
						<ColorPicker
							noteColor={noteColor}
							onChangeColorHandler={onChangeColorHandler}
						/>
					</div>
					<div>
						<button className='nav-add-button' onClick={() => savedHandler()}>
							saved
						</button>
						<button className='nav-add-button' onClick={() => closeHandler()}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditNotes;
