export default function requestingReducer(state = false, action) {
    switch (action.type) {
        case "START_REQUESTING":
            return true
        case "STOP_REQUESTING":
            return false
        default:
            return state
    }
}