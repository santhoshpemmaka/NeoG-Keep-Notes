import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";
import "./Profile.scss";

const Profile = () => {
	const {state, dispatch, logoutUser} = useAuthentication();
	const navigate = useNavigate();

	return state?.token ? (
		<div className='profile-container'>
			<div className='user-profile'>
				<h2 className='user-profile-heading'>Account</h2>
				<div className='user-profile-description'>
					<h3>Profile</h3>
					<div className='user-profile-detail'>
						<h2>Profile Details</h2>
						<label>
							Full Name - <span>{state?.userName}</span>
						</label>
						<label>
							Email - <span>{state?.email}</span>
						</label>
						<button onClick={() => logoutUser()}>Log Out</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Link to='/'></Link>
	);
};

export default Profile;
