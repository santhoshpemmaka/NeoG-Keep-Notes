import axios from "axios";
export const getNoteServer = async (dispatch, token) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.get("/api/notes", config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "ADD_NOTE", payload: response?.data?.notes});
		} else {
			throw new Error("Failed to get notes");
		}
	} catch (error) {
		console.log(error);
	}
};

export const addNoteToServer = async (dispatch, keepNote, token) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.post("/api/notes", {note: keepNote}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "ADD_NOTE", payload: response?.data?.notes});
		} else {
			throw new Error("Failed to add notes");
		}
	} catch (error) {
		console.log(error);
	}
};

export const deleteFromServer = async (dispatch, note, token) => {
	try {
		dispatch({type: "DELETE_NOTE", payload: note});
		const id = note._id;
		const config = {headers: {accept: "*/*", authorization: token}};
		const response = await axios.delete(`/api/notes/${id}`, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "REMOVE_NOTE", payload: response?.data?.notes});
		}
	} catch (error) {
		console.log(error);
	}
};

export const getArchiveNoteServer = async (dispatch, token) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.get("/api/archives", config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "ADD_ARCHIVE", payload: response?.data?.archives});
		} else {
			throw new Error("Failed to get notes");
		}
	} catch (error) {
		console.log(error);
	}
};

export const addArchiveNoteToServer = async (dispatch, note, token) => {
	try {
		const id = note._id;
		const config = {headers: {authorization: token}};
		const response = await axios.post(
			`/api/notes/archives/${id}`,
			{note: note},
			config
		);
		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: "ADD_ARCHIVE",
				payload: {res: response.data?.archives, note: note},
			});
		} else {
			throw new Error("Failed add archive note");
		}
	} catch (error) {
		console.log(error);
	}
};

export const updateNoteServer = async (dispatch, note, token) => {
	try {
		const id = note._id;
		const config = {headers: {accept: "*/*", authorization: token}};
		const response = await axios.post(`/api/notes/${id}`, {note: note}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "UPDATE_NOTE", payload: response.data?.notes});
		}
	} catch (error) {
		console.log(error);
	}
};
