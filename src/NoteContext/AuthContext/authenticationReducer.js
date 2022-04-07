export const authenticationReducer = (state, action) => {
	const {type, paylaod} = action;
	switch (type) {
		case "LOGIN_USER":
			return {
				...state,
				token: paylaod.token,
				userName: paylaod.userName,
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
