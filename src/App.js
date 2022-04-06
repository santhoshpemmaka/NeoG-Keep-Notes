import {useEffect} from "react";
import "./App.css";
import {Header, MainPage, Footer, Login, SignUp} from "./Components";
import {useNote} from "./NoteContext/NoteContext";
import {getArchiveNoteServer, getNoteServer} from "./utils/server-request";
import {Routes, Route} from "react-router-dom";

function App() {
	const token = JSON.parse(localStorage.getItem("token"));
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
				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
