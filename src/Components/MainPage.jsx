import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import MainBody from "./MainBody/MainBody";
import "./MainPage.css";
const MainPage = () => {
	return (
		<div>
			<Header />
			<div className='container-body'>
				<NavBar />
				<MainBody />
			</div>
		</div>
	);
};

export default MainPage;
