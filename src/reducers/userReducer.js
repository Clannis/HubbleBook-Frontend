export default function userReducer(state = {user: [], error: {}}, action) {
    switch (action.type) {
        case "ADD_ERROR":
            return {
                ...state,
                user: "",
                error: action.message
            }
        default:
            return state
    }
}