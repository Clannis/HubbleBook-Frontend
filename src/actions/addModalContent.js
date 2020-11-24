export default function addModalContent(data) {
    return (dispatch) => {
        dispatch({ type: 'ADD_CONTENT', content: data })
    }
}