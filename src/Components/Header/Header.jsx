import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";

const Header = () => {
	const {
		state: {token, userName},
		logoutUser,
	} = useAuthentication();
	return (
		<div className='header-container'>
			{token ? (
				<Link to='/notes' className='link-style'>
					<h1 className='header-name'>Namaste Sticky Notes </h1>
				</Link>
			) : (
				<Link to='/' className='link-style'>
					<h1 className='header-name'>Namaste Sticky Notes </h1>
				</Link>
			)}

			{token ? (
				<Link to='/profile' className='link-style'>
					<div className='header-login'>
						<i className='fas fa-user'></i>
						<label>Hi, {userName}</label>
					</div>
				</Link>
			) : (
				<Link to='/login' className='link-style'>
					<div className='header-login'>
						<i className='fas fa-user'></i>
						<label>login</label>
					</div>
				</Link>
			)}
		</div>
	);
};

export default Header;
