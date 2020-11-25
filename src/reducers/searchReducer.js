export default function searchReducer(state = {title: [], content: [], comment: [] }, action) {
    switch (action.type) {
        case "START_SEARCH":
            return {
                ...state,
                title: [],
                content: [],
                comment: []
            }
        case "ADD_RESULTS":
            return {
                ...state,
                title: action.results.title,
                content: action.results.content,
                comment: action.results.comment
            }
        default:
            return state
    }
}