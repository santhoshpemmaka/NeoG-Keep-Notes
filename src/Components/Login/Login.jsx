import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";
import {Navigate} from "react-router-dom";
import "./Login.css";

const Login = () => {
	const {state, dispatch} = useAuthentication();
	const navigation = useNavigate();
	const [loginDetails, setloginDetails] = useState({
		username: "",
		password: "",
		shownPassword: false,
	});

	if (state?.token) {
		setTimeout(() => {
			navigation("/notes");
		}, 1000);
	}
	const btnHandler = () => {
		setloginDetails({username: "", password: ""});
	};
	const iconHandler = () => {
		setloginDetails({
			...loginDetails,
			shownPassword: !loginDetails.shownPassword,
		});
	};
	const userloginHandler = async (dispatch, loginDetails) => {
		try {
			const response = await axios.post("/api/auth/login", {
				email: loginDetails.email,
				password: loginDetails.password,
			});
			if (response.status === 200 || response.status === 201) {
				localStorage?.setItem(
					"userSession",
					JSON.stringify({
						userName: response?.data?.foundUser?.firstName,
						token: response?.data?.encodedToken,
						email: response?.data?.foundUser?.email,
					})
				);
				dispatch({
					type: "LOGIN_USER",
					payload: {
						userName: response?.data?.foundUser?.firstName,
						token: response?.data?.encodedToken,
						email: response?.data?.foundUser?.email,
					},
				});
			} else {
				throw new Error("Failed to login");
			}
		} catch (error) {
			console.log(error);
		}
	};
	const testHandler = () => {
		setloginDetails({
			...loginDetails,
			username: "test@gmail.com",
			password: "12345",
		});

		userloginHandler(dispatch, {email: "test@gmail.com", password: "12345"});
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
					<button
						className='login-input test-credentails-btn'
						onClick={testHandler}>
						Login With Test Crendentails
					</button>
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
