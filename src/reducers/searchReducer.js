export default function searchReducer(state = {title: [], content: [], error: "", requesting: false}, action) {
    switch (action.type) {
        case "START_SEARCH":
            return {
                ...state,
                title: [],
                content: [],
                error: "",
                requesting: true
            }
        case "ADD_RESULTS":
            return {
                ...state,
                title: action.title,
                content: action.content,
                error: action.message,
                requesting: false
            }
        default:
            return state
    }
}