import {createContext, useContext, useReducer} from "react";
import {authenticationReducer} from "./authenticationReducer";

const AuthContext = createContext();

export const AuthenticationProvider = ({children}) => {
	const {userName: userNameDetails, token: tokenDetails} = JSON.parse(
		localStorage.getItem("user-session")
	) || {
		userName: "",
		token: "",
	};

	const initialState = {
		token: tokenDetails,
		userName: userNameDetails,
	};

	const [state, dispatch] = useReducer(authenticationReducer, initialState);
	return (
		<AuthContext.Provider
			value={{
				state,
				dispatch,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthentication = () => useContext(AuthContext);
