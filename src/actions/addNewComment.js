export default function addNewComment(data) {
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            dispatch({ type: 'ADD_COMMENT', comment: response.content, user: response.user, article: response.article })
        })
    }
  }