export default function fetchSearchArticles(search) {
    return (dispatch) => {
      dispatch({ type: 'START_SEARCH_ARTICLES_REQUEST' })
      fetch('http://localhost:3000/articles/search', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search: search}),
      })
      .then(response => response.json())
      .then(articles => {
        if (articles.message) {
          console.log(articles)
          dispatch({ type: 'ADD_ERROR', articles })
        } else {
          dispatch({ type: 'SEARCH_ARTICLES', articles })
        }
      })
    };
  }

  