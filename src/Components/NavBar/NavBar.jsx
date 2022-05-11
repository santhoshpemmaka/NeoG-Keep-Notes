import React, {useState} from "react";
import {useNote} from "../../NoteContext/NoteContext";
import "./NavBar.css";
const NavBar = () => {
	const [navTag, setnavTag] = useState("");
	const [selectTag, setselectTag] = useState("");
	const {state, dispatch} = useNote();
	const NavItems = state.labels;
	const Categories = useState(["Pinned", "Trash", "Archive"]);

	return (
		<div className='nav-conatiner'>
			<div className='nav-conatiner-header'>
				<h3 className='nav-conatiner-label'>FILTERS</h3>
				<h3
					className='nav-conatiner-label1'
					onClick={() => dispatch({type: "CLEAR_FILTER"})}>
					CLEAR ALL
				</h3>
			</div>
			<div>
				<h3 className='nav-header'>Categories</h3>
				{Categories[0].map((category) => (
					<div key={category} className='nav-items'>
						<label className='nav-items-label'>
							<input
								type='checkbox'
								checked={state.categoryFilter.includes(category)}
								onChange={() =>
									dispatch({type: "CATEGORY_FILTER", payload: category})
								}
							/>
							{category}
						</label>
					</div>
				))}
			</div>
			<div>
				<h3 className='nav-header'>Labels</h3>
				{NavItems &&
					NavItems.length &&
					NavItems.map((name) => (
						<div key={name} className='nav-items'>
							<label className='nav-items-label'>
								<input
									type='checkbox'
									checked={state.labelFilter.includes(name)}
									onChange={() =>
										dispatch({type: "LABEL_FILTER", payload: name})
									}
								/>
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
							dispatch({type: "ADD_TAG", payload: navTag});
							setnavTag("");
						}}></i>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
