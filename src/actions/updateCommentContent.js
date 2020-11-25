export default function updateCommentContent(data) {
    return (dispatch) => {
        fetch(`http://localhost:3000/comments/${data.commentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
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