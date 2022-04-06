import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/' className='link-style'>
				<h1 className='header-name'>Namaste Sticky Notes </h1>
			</Link>
			<Link to='/login' className='link-style'>
				<div className='header-login'>
					<i className='fas fa-user'></i>
					<label>login</label>
				</div>
			</Link>
		</div>
	);
};

export default Header;
