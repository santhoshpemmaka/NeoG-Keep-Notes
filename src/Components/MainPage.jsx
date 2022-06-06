import React from "react";
import NavBar from "./NavBar/NavBar";
import MainBody from "./MainBody/MainBody";
import "./MainPage.css";
import {useAuthentication} from "../NoteContext/AuthContext/AuthContext";
import {Link} from "react-router-dom";
import {useNote} from "../NoteContext/NoteContext";
const MainPage = () => {
	const {
		state: {token},
		logoutUser,
	} = useAuthentication();
	const {state, dispatch} = useNote();
	return (
		<div className='container-body'>
			<NavBar />
			<MainBody />
			<div className='shown-only-mobile'>
				<label
					className='mobile-page-icon'
					onClick={() => dispatch({type: "CLEAR_FILTER"})}>
					<i className='fas fa-home'></i>
				</label>
				<label
					className='mobile-page-icon'
					onClick={() =>
						dispatch({type: "CATEGORY_FILTER", payload: "Pinned"})
					}>
					<i className='fas fa-thumbtack'></i>
				</label>
				<label
					className='mobile-page-icon'
					onClick={() =>
						dispatch({type: "CATEGORY_FILTER", payload: "Archive"})
					}>
					<i className='fas fa-sticky-note'></i>
				</label>
				<label
					className='mobile-page-icon'
					onClick={() => dispatch({type: "CATEGORY_FILTER", payload: "Trash"})}>
					<i className='fas fa-trash'></i>
				</label>
				<label className='mobile-page-icon' onClick={() => logoutUser()}>
					<i className='fas fa-sign-out-alt'></i>
				</label>
			</div>
		</div>
	);
};

export default MainPage;
