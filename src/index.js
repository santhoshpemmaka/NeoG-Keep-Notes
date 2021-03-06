import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {NoteProvider} from "./NoteContext/NoteContext";
import {Mock} from "./Mock";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthenticationProvider} from "./NoteContext/AuthContext/AuthContext";
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<NoteProvider>
			<Router>
				<AuthenticationProvider>
					<App />
					{/* <Mock /> */}
				</AuthenticationProvider>
			</Router>
		</NoteProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
