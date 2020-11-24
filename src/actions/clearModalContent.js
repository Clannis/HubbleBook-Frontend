export default function clearModalContent() {
    return (dispatch) => {
        dispatch({ type: 'ClEAR_CONTENT' })
    }
}