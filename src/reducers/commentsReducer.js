export default function commentsReducer(state = { comments: [] }, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(action)
            return {
                comments: [...state.comments, {comment: action.comment, articleId: action.article.id, user: action.user.username } ],
            }
        case 'SET_COMMENTS':
            return {
                comments: action.comments
            }
        default:
            return state
    }
}