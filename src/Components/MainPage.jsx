import React from "react";
import NavBar from "./NavBar/NavBar";
import MainBody from "./MainBody/MainBody";
import "./MainPage.css";
const MainPage = () => {
	return (
		<div className='container-body'>
			<NavBar />
			<MainBody />
		</div>
	);
};

export default MainPage;
