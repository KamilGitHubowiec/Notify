import { getNotes, getNoteById, postNote, updateNote, deleteNote, postNoteToHistory, getNoteHistory } from "../../helpers/API";

export const getNotesAction = () => async (dispatch) => {
    try {
        const data = await getNotes();

        dispatch({ type: "GET_NOTES", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createNoteAction = (note) => async (dispatch) => {
    try {
        const data = await postNote(note);

        dispatch({ type: "CREATE_NOTE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNoteAction = (id, note) => async (dispatch) => {
    try {
        const data = await updateNote(id, note);

        dispatch({ type: "UPDATE_NOTE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNoteAction = (id) => async (dispatch) => {
    try {
        const noteToBeArchived = await getNoteById(id);
        await postNoteToHistory(noteToBeArchived);
        await deleteNote(id);

        dispatch({ type: "DELETE_NOTE", payload: id })
    } catch (error) {
        console.log(error.message);
    }
}

export const sortNotesAction = (sortOptions) => async (dispatch) => {
    try {
        dispatch({ type: "SORT_NOTES", payload: sortOptions });
    } catch (error) {
        console.log(error.message);
    }
}

export const getNoteHistoryAction = (id) => async (dispatch) => {
    try {
        const data = await getNoteHistory(id);

        dispatch({ type: "GET_NOTE_HISTORY", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const getNoteByIdAction = (id) => async (dispatch) => {
    try {
        const { data } = await getNoteById(id);

        dispatch({ type: "GET_NOTE_BY_ID", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}






// export const listNotesAction = () => async (dispatch) => {
//     try {
//         dispatch({ type: "NOTES_LIST_REQUEST" })
  
//         const data = await getNotes();
//         console.log(data);

//         dispatch({
//             type: "NOTES_LIST_SUCCESS",
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: "NOTES_LIST_FAIL",
//             payload: error.response && error.response.data.message 
//             ? error.response.data.message 
//             : error.message
//         })
//     }
// }

// export const listNoteDetailsAction = (id) => async (dispatch) => {
//     try {
//         dispatch({ 
//             type: "NOTE_DETAILS_REQUEST"
//         })
  
//         const data = await getNoteById(id);

//         dispatch({
//             type: "NOTE_DETAILS_SUCCESS",
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: "NOTE_DETAILS_FAIL",
//             payload: error.response && error.response.data.message 
//             ? error.response.data.message 
//             : error.message
//         })
//     }
// }

// export const createNoteAction = (note) => async (dispatch) => {
//     try {
//         dispatch({ 
//             type: "NOTE_CREATE_REQUEST"
//         })
  
//         await postNote(note);

//         dispatch({
//             type: "NOTE_CREATE_SUCCESS",
            
//             // payload: createdNote
//         })
//     } catch (error) {
//         dispatch({
//             type: "NOTE_CREATE_FAIL",
//             payload: error.response && error.response.data.message 
//             ? error.response.data.message 
//             : error.message
//         })
//     }
// }

// export const deleteNoteAction = (id) => async (dispatch) => {
//     try {
//         dispatch({ 
//             type: "NOTE_DELETE_REQUEST"
//         })
  
//         const { data } = await axios.get(`/notes/${id}`);
//         await axios.post("/history", data);
//         await deleteNote(id);

//         dispatch({
//             type: "NOTE_DELETE_SUCCESS",
//             // payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: "NOTE_DELETE_FAIL",
//             payload: error.response && error.response.data.message 
//             ? error.response.data.message 
//             : error.message
//         })
//     }
// }