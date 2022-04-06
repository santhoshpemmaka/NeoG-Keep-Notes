import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
	const [signupDetails, setsignupDetails] = useState({
		firstName: "",
		lastName: "",
		emailName: "",
		passWord: "",
		confirmPassword: "",
		termsConditions: false,
		shownPassword: false,
	});

	const signupHandler = () => {
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
									className='fas fa-eye-slash password-icon'></i>
							) : (
								<i
									onClick={iconHandler}
									className='fas fa-eye password-icon'></i>
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
