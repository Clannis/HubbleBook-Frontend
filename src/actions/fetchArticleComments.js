export default function fetchArticleComments(article_id) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch(`https://hubblebook-api.herokuapp.com/articles/${article_id}/comments`)
        .then(response => response.json())
        .then(response => {
          dispatch({ type: 'SET_COMMENTS', comments: response})
          dispatch({ type: 'STOP_REQUESTING'})
        });
    };
  }