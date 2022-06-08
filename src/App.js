import {useEffect} from "react";
import "./App.css";
import {
	Header,
	MainPage,
	Footer,
	Login,
	SignUp,
	Home,
	Profile,
} from "./Components";
import {useNote} from "./NoteContext/NoteContext";
import {getArchiveNoteServer, getNoteServer} from "./utils/server-request";
import {Routes, Route} from "react-router-dom";
import {useAuthentication} from "./NoteContext/AuthContext/AuthContext";

function App() {
	const {
		state: {token},
	} = useAuthentication();
	const {state, dispatch} = useNote();
	useEffect(() => {
		if (token) {
			getNoteServer(dispatch, token);
			getArchiveNoteServer(dispatch, token);
		}
	}, [token]);
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/notes' element={<MainPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
