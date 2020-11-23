export default function searchReducer(state = {title: [], content: [] }, action) {
    switch (action.type) {
        case "START_SEARCH":
            return {
                ...state,
                title: [],
                content: []
            }
        case "ADD_RESULTS":
            return {
                ...state,
                title: action.results.title,
                content: action.results.content
            }
        default:
            return state
    }
}