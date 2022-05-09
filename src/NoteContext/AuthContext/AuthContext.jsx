import {createContext, useContext, useReducer} from "react";
import {useNavigate} from "react-router-dom";
import {authenticationReducer} from "./authenticationReducer";

const AuthContext = createContext();

export const AuthenticationProvider = ({children}) => {
	const {
		userName: userNameDetails,
		token: tokenDetails,
		email,
	} = JSON.parse(localStorage.getItem("userSession")) || {
		userName: "",
		token: "",
		email: "",
	};

	const navigate = useNavigate();

	const initialState = {
		token: tokenDetails,
		userName: userNameDetails,
		email: email,
	};
	const [state, dispatch] = useReducer(authenticationReducer, initialState);

	const logoutUser = () => {
		localStorage?.removeItem("userSession");
		dispatch({type: "LOGOUT_USER"});
		setTimeout(() => {
			navigate("/");
		}, 1000);
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
