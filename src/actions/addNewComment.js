export default function addNewComment(data) {
    return (dispatch) => {
        fetch(`http://localhost:3000/articles/${data.article_id}/comments`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({content: data.content})
        })
        .then(response => response.json())
        .then(response => {
            dispatch({ type: 'ADD_COMMENT', comment: response.content, user: response.user, article: response.article })
        })
    }
  }