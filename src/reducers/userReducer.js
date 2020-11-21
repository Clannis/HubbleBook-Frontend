export default function userReducer(state = {user: []}, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}