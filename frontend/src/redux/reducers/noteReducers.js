export const notesReducer = (notes = [] , action) => {
    switch (action.type) {
        case "GET_NOTES":
            return action.payload 
        case "CREATE_NOTE":
            return [...notes, action.payload]
        case "UPDATE_NOTE":
            return notes.map((note) => (note._id === action.payload._id ? action.payload : note))
        case "DELETE_NOTE":
            return notes.filter((note) => note._id !== action.payload)
        case "SORT_NOTES":
            return notes.sort((a, b) => {
                if (action.payload.direction === "asc") return (a[action.payload.type].toLowerCase() > b[action.payload.type].toLowerCase()) ? 1 : -1
                if (action.payload.direction === "desc") return (a[action.payload.type].toLowerCase() < b[action.payload.type].toLowerCase()) ? 1 : -1
            })
        default:
            return notes
    }
}

export const noteReducer = (note = {}, action) => {
    switch (action.type) {
        case "GET_NOTE_BY_ID":
            return action.payload
        case "GET_NOTE_HISTORY":
            return action.payload
        default:
            return note
    }
}