import React, {useState} from "react";
import MainSubComponent from "./SubComponent/MainSubComponent";
import "./MainBody.css";
import {useNote} from "../../NoteContext/NoteContext";
import {v4 as uuid} from "uuid";
import {addNoteToServer} from "../../utils/server-request";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";
import {useNavigate} from "react-router-dom";
import ColorPicker from "./SubComponent/ColorPicker";
const MainBody = () => {
	const {state, dispatch} = useNote();
	const navigate = useNavigate();
	const {
		state: {token},
	} = useAuthentication();
	const navCategory = state.labels;
	const [keepNote, setkeepNote] = useState({
		_id: "",
		title: "",
		description: "",
		tags: "Home",
		pinned: false,
		date: "",
		noteColor: "",
	});
	const btnHandler = () => {
		addNoteToServer(
			dispatch,
			{...keepNote, _id: uuid(), date: new Date().toLocaleDateString()},
			token
		);
		setkeepNote({
			title: "",
			description: "",
			tags: "Home",
			pinned: false,
			noteColor: "",
		});
	};

	const onChangeColorHandler = (color) => {
		setkeepNote({...keepNote, noteColor: color});
	};

	return (
		<div className='container'>
			<div
				className='date-sorting'
				onClick={() => dispatch({type: "SORT_DATE"})}>
				{state.sortByDate ? (
					<label>Clear Sorting</label>
				) : (
					<>
						<i className='fas fa-sort-amount-down'></i>
						<label>Sorting Latest</label>
					</>
				)}
			</div>
			<div
				className='main-container'
				style={{
					backgroundColor: keepNote.noteColor,
				}}>
				<div className='input-tags'>
					<div className='input-tag-container'>
						<input
							className='input-tag-title'
							type='text'
							placeholder='Title'
							value={keepNote.title}
							onChange={(e) =>
								setkeepNote((prev) => ({...prev, title: e.target.value}))
							}
						/>
						<i
							className='fas fa-thumbtack thumbtack-icon'
							style={{
								color: `${keepNote.pinned ? "#202135" : "#0000008a"}`,
							}}
							onClick={() =>
								setkeepNote((prev) => ({...prev, pinned: !prev.pinned}))
							}></i>
					</div>

					<input
						type='text'
						value={keepNote.description}
						placeholder='Take a note...'
						onChange={(e) =>
							setkeepNote((prev) => ({...prev, description: e.target.value}))
						}
					/>
				</div>
				<div className='nav-category'>
					<div className='nav-category-items'>
						<select
							className='tag'
							onChange={(e) =>
								setkeepNote((prev) => ({...prev, tags: e.target.value}))
							}
							value={keepNote.tags}
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
							noteColor={keepNote.noteColor}
							onChangeColorHandler={onChangeColorHandler}
						/>
					</div>
					<button className='nav-add-button' onClick={() => btnHandler()}>
						Add Note
					</button>
				</div>
			</div>
			<MainSubComponent />
		</div>
	);
};

export default MainBody;
