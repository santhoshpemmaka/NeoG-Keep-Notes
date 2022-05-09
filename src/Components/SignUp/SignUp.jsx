import React, {useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
	const {state, dispatch} = useAuthentication();
	const navigation = useNavigate();
	const location = useLocation();

	const [signupDetails, setsignupDetails] = useState({
		firstName: "",
		lastName: "",
		emailName: "",
		passWord: "",
		confirmPassword: "",
		termsConditions: false,
		shownPassword: false,
	});

	if (state?.token) {
		setTimeout(() => {
			navigation("/notes");
		}, 1000);
	}

	const usersignupHandler = async (dispatch, signupDeatils) => {
		try {
			const response = await axios.post("/api/auth/signup", {
				email: signupDeatils.emailName,
				passWord: signupDeatils.passWord,
				firstName: signupDeatils.firstName,
				lastName: signupDeatils.lastName,
			});
			if (response.status === 200 || response.status === 201) {
				console.log(response.data);
				localStorage?.setItem(
					"userSession",
					JSON.stringify({
						userName: response?.data?.createdUser?.firstName,
						token: response?.data?.encodedToken,
						email: signupDeatils.emailName,
						lastName: response?.data?.lastName,
					})
				);
				dispatch({
					type: "SIGNUP_USER",
					payload: {
						userName: response?.data?.createdUser?.firstName,
						token: response?.data?.encodedToken,
						email: signupDeatils?.emailName,
						lastName: response?.data?.createdUser?.lastName,
					},
				});
			} else {
				throw new Error("Failed to signup");
			}
		} catch (error) {
			console.log(error);
		}
	};
	const signupHandler = () => {
		usersignupHandler(dispatch, signupDetails);
		setsignupDetails({
			firstName: "",
			lastName: "",
			emailName: "",
			passWord: "",
			confirmPassword: "",
			termsConditions: false,
			shownPassword: false,
		});
	};

	const iconHandler = () => {
		setsignupDetails({
			...signupDetails,
			shownPassword: !signupDetails.shownPassword,
		});
	};
	return (
		<div className='signup-container'>
			<div className='spacer-3rem'></div>
			<div className='signup-component'>
				<label className='signup-header'>SIGN UP</label>
				<div className='form-signup'>
					<div className='componet-signup'>
						<label className='label-signup-name'>First Name </label>
						<input
							type='text'
							value={signupDetails.firstName}
							className='signup-input'
							placeholder='Enter your first name'
							onChange={(e) =>
								setsignupDetails({...signupDetails, firstName: e.target.value})
							}
							required
						/>
					</div>
					<div className='componet-signup'>
						<label className='label-signup-name'>Last Name </label>
						<input
							type='text'
							value={signupDetails.lastName}
							className='signup-input'
							placeholder='Enter your last name'
							onChange={(e) =>
								setsignupDetails({...signupDetails, lastName: e.target.value})
							}
							required
						/>
					</div>
					<div className='componet-signup'>
						<label className='label-signup-name'>Email </label>
						<input
							type='email'
							value={signupDetails.emailName}
							className='signup-input'
							placeholder='sample@gmail.com'
							onChange={(e) =>
								setsignupDetails({...signupDetails, emailName: e.target.value})
							}
							required
						/>
					</div>
					<div className='componet-signup'>
						<label className='label-signup-name'>Password </label>
						<input
							type='password'
							value={signupDetails.passWord}
							className='signup-input'
							placeholder='Enter new password'
							onChange={(e) =>
								setsignupDetails({...signupDetails, passWord: e.target.value})
							}
							required
						/>
					</div>
					<div className='componet-signup'>
						<label className='label-signup-name'>Confirm Password </label>
						<div className='show-password'>
							<input
								type={signupDetails.shownPassword ? "text" : "password"}
								value={signupDetails.confirmPassword}
								className='signup-input'
								placeholder='Re-type your password'
								onChange={(e) =>
									setsignupDetails({
										...signupDetails,
										confirmPassword: e.target.value,
									})
								}
								required
							/>
							{signupDetails.shownPassword ? (
								<i
									onClick={iconHandler}
									className='fas fa-eye password-icon'></i>
							) : (
								<i
									onClick={iconHandler}
									className='fas fa-eye-slash password-icon'></i>
							)}
						</div>
					</div>
					<div className='terms-conditons'>
						<input
							className='terms-checkbox'
							type='checkbox'
							checked={signupDetails.termsConditions}
							onChange={() =>
								setsignupDetails({
									...signupDetails,
									termsConditions: !signupDetails.termsConditions,
								})
							}
						/>{" "}
						<label>I accept all terms & conditions.</label>
					</div>
					<button className='register-btn' onClick={() => signupHandler()}>
						REGISTER
					</button>
					<label className='sigup-register'>
						Already registered? <Link to='/login'>Login here</Link>
					</label>
				</div>
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default SignUp;
