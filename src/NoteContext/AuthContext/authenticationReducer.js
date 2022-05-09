export const authenticationReducer = (state, action) => {
	const {type, payload} = action;

	switch (type) {
		case "LOGIN_USER":
			return {
				...state,
				token: payload.token,
				userName: payload.userName,
				email: payload.email,
			};
		case "LOGOUT_USER":
			return {
				...state,
				token: "",
				userName: "",
				email: "",
			};

		case "SIGNUP_USER":
			return {
				...state,
				token: payload.token,
				userName: payload.userName,
				email: payload.email,
				lastName: payload.lastName,
			};
		default:
			return state;
	}
};
