import {createContext, useContext, useReducer} from "react";
import {authenticationReducer} from "./authenticationReducer";

const AuthContext = createContext();

export const AuthenticationProvider = ({children}) => {
	const {userName: userNameDetails, token: tokenDetails} = JSON.parse(
		localStorage.getItem("userSession")
	) || {
		userName: "",
		token: "",
	};

	const initialState = {
		token: tokenDetails,
		userName: userNameDetails,
	};
	const [state, dispatch] = useReducer(authenticationReducer, initialState);

	const logoutUser = () => {
		localStorage?.removeItem("userSession");
		dispatch({type: "LOGOUT_USER"});
	};

	return (
		<AuthContext.Provider
			value={{
				state,
				dispatch,
				logoutUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthentication = () => useContext(AuthContext);
