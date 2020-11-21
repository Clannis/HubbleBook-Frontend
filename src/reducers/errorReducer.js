export default function errorReducer(state = {message: "" }, action) {
    switch (action.type) {
        case "ADD_ERROR":
            return {
                ...state,
                message: action.message,
            }
        default:
            return state
    }
}