export default function deleteComment(id) {
    let userToken = ""
    if (localStorage.token) {
        userToken = localStorage.token
    } else {
        userToken = sessionStorage.token
    }
    return (dispatch) => {
        fetch(`http://localhost:3000/comments/${id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.id) {
                dispatch({ type: 'REMOVE_COMMENT', id: response.id})
            } else {
                dispatch({ type: 'ADD_ERROR', message: response.message })
            }
        })
    }
  }