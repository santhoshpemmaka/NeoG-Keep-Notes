import React, {useState} from "react";
import MainSubComponent from "./SubComponent/MainSubComponent";
import "./MainBody.css";
import {useNote} from "../NoteContext/NoteContext";
import uuid from "react-uuid";
const MainBody = () => {
	const {state, dispatch} = useNote();
	const navCategory = state.category.slice(2, 6);
	const [keepNote, setkeepNote] = useState({
		id: "",
		title: "",
		description: "",
		tag: "",
		pinned: false,
	});
	const btnHandler = () => {
		dispatch({type: "ADD_NOTE", payload: {...keepNote, id: uuid()}});
		setkeepNote({
			title: "",
			description: "",
			tag: "",
			pinned: false,
		});
	};
	return (
		<div className='container'>
			<div className='main-container'>
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
						{navCategory &&
							navCategory.length &&
							navCategory.map(({name}) => (
								<div key={name} className='nav-category-item'>
									<input
										type='radio'
										name='tag'
										value={name}
										id={name}
										checked={keepNote.tag === name ? true : false}
										onChange={(e) =>
											setkeepNote((prev) => ({...prev, tag: e.target.value}))
										}
									/>

									<label>{name}</label>
								</div>
							))}
					</div>
					<button className='nav-add-button' onClick={btnHandler}>
						Add Note
					</button>
				</div>
			</div>
			<MainSubComponent />
		</div>
	);
};

export default MainBody;
