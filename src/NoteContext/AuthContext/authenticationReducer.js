export const authenticationReducer = (state, action) => {
	const {type, payload} = action;

	switch (type) {
		case "LOGIN_USER":
			return {
				...state,
				token: payload.token,
				userName: payload.userName,
			};
		case "LOGOUT_USER":
			return {
				...state,
				token: "",
				userName: "",
			};
		default:
			return state;
	}
};
