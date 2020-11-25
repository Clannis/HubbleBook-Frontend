export default function userReducer(state = {user: "" }, action) {
    switch (action.type) {
        case "ADD_USER":
            sessionStorage.token = action.token
            return {
                user: action.user,
            }
        case "LOGIN":
            action.rememberMe ? localStorage.token = action.token : sessionStorage.token = action.token
            return {
                user: action.user
            }
        case "LOGOUT":
            localStorage.token ? localStorage.removeItem('token') : sessionStorage.removeItem('token')
            return {
                user: ""
            }
        default:
            return state
    }
}