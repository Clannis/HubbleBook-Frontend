export default function commentsReducer(state = { comments: [] }, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(action)
            return {
                comments: [...state.comments, action.comment],
            }
        default:
            return state
    }
}