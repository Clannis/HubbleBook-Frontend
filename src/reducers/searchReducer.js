export default function searchReducer(state = {title: [], content: [], requesting: false}, action) {
    switch (action.type) {
        case "START_SEARCH":
            return {
                ...state,
                title: [],
                content: [],
                requesting: true
            }
        case "ADD_RESULTS":
            return {
                ...state,
                title: action.results.title,
                content: action.results.content,
                requesting: false
            }
        default:
            return state
    }
}