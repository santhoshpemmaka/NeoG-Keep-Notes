import React from "react";
import "./Home.scss";
import {Link} from "react-router-dom";
import homeImage from "../../Assests/hero-img.svg";
const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-component grid-layout'>
				<div className='home-component-headings'>
					<h2 className='home-page-header'>
						Namaster<label>Note</label>
					</h2>
					<h3 className='home-page-subheading1'>Meet Your Modern</h3>
					<h3 className='home-page-subheading2'>Note Taking App</h3>
					<label className='home-page-description'>
						Manage your daily tasks and workflow in a modern way and bost your
						efficiency without any effors.
					</label>
					<Link to='/signup' className='no-list-link'>
						<button className='home-page-btn'>Join Now</button>
					</Link>
					<label className='home-page-login'>
						Already registered? <Link to='/login'>Login here</Link>
					</label>
				</div>
				<div className='home-page-response'>
					<img src={homeImage} alt='Home Page Image' />
				</div>
			</div>
		</div>
	);
};

export default Home;
