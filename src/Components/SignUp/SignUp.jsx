import React, {useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuthentication} from "../../NoteContext/AuthContext/AuthContext";
import axios from "axios";
import "./SignUp.css";
import validator from "validator";
import {ThreeDots} from "react-loader-spinner";

const SignUp = () => {
	const {state, dispatch} = useAuthentication();
	const navigation = useNavigate();
	const location = useLocation();
	const [signupMessage, setsignupMessage] = useState(false);
	const [showLoader, setshowLoader] = useState(false);
	const [signupDetails, setsignupDetails] = useState({
		firstName: "",
		lastName: "",
		emailName: "",
		passWord: "",
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
				localStorage?.setItem(
					"userSession",
					JSON.stringify({
						userName: response?.data?.createdUser?.firstName,
						token: response?.data?.encodedToken,
						email: signupDeatils.emailName,
						lastName: response?.data?.lastName,
					})
				);
				setshowLoader((prev) => !prev);
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
		const {emailName, passWord, firstName, lastName} = signupDetails;
		if (
			emailName !== "" &&
			passWord !== "" &&
			firstName !== "" &&
			lastName !== ""
		) {
			setshowLoader((prev) => !prev);
			usersignupHandler(dispatch, signupDetails);
		}
		setsignupMessage((prev) => !prev);
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
					{signupMessage && signupDetails.firstName.length === 0 && (
						<label className='validate-message'>
							* First Name input filed is required{" "}
						</label>
					)}
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
					{signupMessage && signupDetails.lastName.length === 0 && (
						<label className='validate-message'>
							* Last Name input filed is required{" "}
						</label>
					)}
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
					{signupMessage && signupDetails.emailName.length === 0 && (
						<label className='validate-message'>
							* Email input filed is required{" "}
						</label>
					)}
					{signupDetails.emailName.length > 1 &&
					validator.isEmail(signupDetails.emailName) === false ? (
						<label className='validate-message'>Please enter valid email</label>
					) : (
						""
					)}
					<div className='componet-signup'>
						<label className='label-signup-name'>Password </label>
						<div className='show-password'>
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
					{signupMessage && signupDetails.passWord.length === 0 && (
						<label className='validate-message'>
							* Password input filed is required{" "}
						</label>
					)}
					<button className='register-btn' onClick={() => signupHandler()}>
						REGISTER
					</button>
					<label className='sigup-register'>
						Already registered? <Link to='/login'>Login here</Link>
					</label>
				</div>
			</div>
			<div className='spacer-3rem'></div>
			{showLoader && (
				<div className='loader-dots'>
					<ThreeDots color='#ff3f6c' height={100} width={100} timeout={5000} />
				</div>
			)}
		</div>
	);
};

export default SignUp;
