import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";

const Header = () => {
	const {
		state: {token},
		logoutUser,
	} = useAuthentication();
	return (
		<div className='header-container'>
			<Link to='/' className='link-style'>
				<h1 className='header-name'>Namaste Sticky Notes </h1>
			</Link>
			{token ? (
				<div className='header-login' onClick={() => logoutUser()}>
					<i className='fas fa-user'></i>
					<label>logout</label>
				</div>
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
