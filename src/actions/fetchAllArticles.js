export default function fetchAllArticles() {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch("http://hubblebook-api.herokuapp.com/articles")
        .then(response => response.json())
        .then(articles => {
          dispatch({ type: 'ADD_ARTICLES', articles })
          dispatch({ type: 'STOP_REQUESTING'})
      });
    };
  }