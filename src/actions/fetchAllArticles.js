export default function fetchAllArticles() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ARTICLES_REQUEST' });
      fetch("http://localhost:3000/articles")
        .then(response => response.json())
        .then(articles => dispatch({ type: 'ADD_ARTICLES', articles }));
    };
  }