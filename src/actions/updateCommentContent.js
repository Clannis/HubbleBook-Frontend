export default function updateCommentContent(data) {
    let userToken = ""
    if (localStorage.token) {
        userToken = localStorage.token
    } else {
        userToken = sessionStorage.token
    }
    return (dispatch) => {
        fetch(`https://hubblebook-api.herokuapp.com/comments/${data.commentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken
            },
            body: JSON.stringify({content: data.content})
        })
        .then(response => response.json())
        .then(response => {
            if (!response.message) {
                dispatch({ type: 'UPDATE_COMMENT', content: response.content, commentId: response.id, article: response.article, user: response.user })
            } else {
                dispatch({ type: 'ADD_ERROR', message: response.message})
            }
        })
    }
  }