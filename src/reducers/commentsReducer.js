export default function commentsReducer(state = { comments: [] }, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(action)
            return {
                comments: [...state.comments, {content: action.comment, article: {id: action.article.id}, user: {username: action.user.username} } ],
            }
        case 'SET_COMMENTS':
            return {
                comments: action.comments
            }
        default:
            return state
    }
}