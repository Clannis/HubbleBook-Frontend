export default function fetchArticleComments(article_id) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch(`http://localhost:3000/articles/${article_id}/comments`)
        .then(response => response.json())
        .then(response => {
            console.log("comments: ", response)
          dispatch({ type: 'SET_COMMENTS', comments: response})
          dispatch({ type: 'STOP_REQUESTING'})
        });
    };
  }