export default function commentsReducer(state = { comments: [] }, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(action)
            return {
                comments: [...state.comments, {content: action.content, id: action.id, article: {id: action.article.id}, user: {username: action.user.username} } ],
            }
        case 'SET_COMMENTS':
            return {
                comments: action.comments
            }
        case 'UPDATE_COMMENT':
            let idx = state.comments.findIndex(comment => comment.id  === action.commentId)
            return {
                comments: [...state.comments.slice(0, idx), {content: action.content, id: action.commentId, article: {id: action.article.id}, user: {username: action.user.username}}, ...state.comments.slice(idx + 1)]
            }
        case 'REMOVE_COMMENT':
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
        default:
            return state
    }
}