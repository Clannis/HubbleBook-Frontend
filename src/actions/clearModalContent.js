export default function clearModalContent() {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_CONTENT' })
    }
}