import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Login.css";
const Login = () => {
	const [loginDetails, setloginDetails] = useState({
		username: "",
		password: "",
		shownPassword: false,
	});
	const btnHandler = () => {
		setloginDetails({username: "", password: ""});
	};
	const iconHandler = () => {
		setloginDetails({
			...loginDetails,
			shownPassword: !loginDetails.shownPassword,
		});
	};
	return (
		<div className='login-container'>
			<div className='login-component'>
				<label className='login-heading'>LOGIN</label>
				<div className='login-inputs'>
					<input
						className='login-input'
						value={loginDetails.username}
						type='email'
						placeholder='Enter your email here'
						onChange={(e) =>
							setloginDetails({...loginDetails, username: e.target.value})
						}
					/>
					<div className='login-password'>
						<input
							className='login-input'
							value={loginDetails.password}
							type={loginDetails.shownPassword ? "text" : "password"}
							placeholder='Enter your password here'
							onChange={(e) =>
								setloginDetails({...loginDetails, password: e.target.value})
							}
						/>
						{loginDetails.shownPassword ? (
							<i
								onClick={iconHandler}
								className='fas fa-eye-slash password-icon'></i>
						) : (
							<i onClick={iconHandler} className='fas fa-eye password-icon'></i>
						)}
					</div>

					<Link className='forgot-alink' to='/'>
						<label className='forgot-password'>Forgot your password?</label>
					</Link>
					<button className='login-input login-btn' onClick={btnHandler}>
						LOGIN
					</button>
					<label className='login-text'>
						Not a user yet ? <Link to='/signup'>Create your account</Link>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Login;
