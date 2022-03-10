import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {NoteProvider} from "./Components/NoteContext/NoteContext";
ReactDOM.render(
	<React.StrictMode>
		<NoteProvider>
			<App />
		</NoteProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
