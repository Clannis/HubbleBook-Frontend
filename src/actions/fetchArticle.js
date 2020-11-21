export default function fetchArticle(article_id) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch(`http://localhost:3000/articles/${article_id}`)
        .then(response => response.json())
        .then(article => {
          dispatch({ type: 'ADD_ACTIVE_ARTICLE', article })
          dispatch({ type: 'STOP_REQUESTING'})
        });
    };
  }