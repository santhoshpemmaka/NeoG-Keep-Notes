import React from "react";
import NavBar from "./NavBar/NavBar";
import MainBody from "./MainBody/MainBody";
import "./MainPage.css";
const MainPage = () => {
	return (
		<div className='body-component'>
			<div className='container-body'>
				<NavBar />
				<MainBody />
			</div>
		</div>
	);
};

export default MainPage;
