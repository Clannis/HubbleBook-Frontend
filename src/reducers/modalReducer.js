export default function modalReducer(state = {content: "" }, action) {
    switch (action.type) {
        case "ADD_CONTENT":
            return {
                content: action.content,
                commentId: action.commentId
            }
        case "CLEAR_CONTENT":
            return {
                content: "",
                commentId: ""
            }
        default:
            return state
    }
}