export default function addNewComment(data) {
    let userToken = ""
    if (localStorage.token) {
        userToken = localStorage.token
    } else {
        userToken = sessionStorage.token
    }
    return (dispatch) => {
        fetch(`https://hubblebook-api.herokuapp.com/articles/${data.article_id}/comments`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken
            },
            body: JSON.stringify({content: data.content})
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            dispatch({ type: 'ADD_COMMENT', content: response.content, id: response.id, user: response.user, article: response.article })
        })
    }
  }