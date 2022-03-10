import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import MainBody from "./MainBody/MainBody";
import Footer from "./Footer/Footer";
import "./MainPage.css";
const MainPage = () => {
	return (
		<div className='body-component'>
			<Header />
			<div className='container-body'>
				<NavBar />
				<MainBody />
			</div>
			<Footer />
		</div>
	);
};

export default MainPage;
