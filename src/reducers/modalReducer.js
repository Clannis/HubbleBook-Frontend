export default function modalReducer(state = {content: "" }, action) {
    switch (action.type) {
        case "ADD_CONTENT":
            return {
                content: action.content
            }
        case "CLEAR_CONTENT":
            return {
                content: ""
            }
        default:
            return state
    }
}