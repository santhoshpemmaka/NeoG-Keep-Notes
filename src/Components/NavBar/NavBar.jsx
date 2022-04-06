import React, {useState} from "react";
import {useNote} from "../../NoteContext/NoteContext";
import "./NavBar.css";
const NavBar = () => {
	const [navTag, setnavTag] = useState("");
	const [selectTag, setselectTag] = useState("");
	const {state, dispatch} = useNote();
	const NavItems = state.category;
	return (
		<div className='nav-conatiner'>
			<h3 className='nav-header'>Filter</h3>
			{NavItems &&
				NavItems.length &&
				NavItems.map(({name}) => (
					<div
						key={name}
						className='nav-items'
						style={{backgroundColor: `${selectTag === name ? "#feefc3" : ""}`}}>
						<label
							className='nav-items-label'
							onClick={(e) => {
								setselectTag(e.target.innerText);
								dispatch({type: "SORT_TAG", payload: e.target.innerText});
							}}>
							{name}
						</label>
					</div>
				))}
			<div className='nav-add-tag'>
				<input
					type='text'
					value={navTag}
					onChange={(e) => setnavTag(e.target.value)}
					placeholder='Enter new tag'
				/>
				<i
					className='fas fa-plus-circle add-tag'
					onClick={() => {
						dispatch({type: "ADD_TAG", payload: {name: navTag}});
						setnavTag("");
					}}></i>
			</div>
		</div>
	);
};

export default NavBar;
