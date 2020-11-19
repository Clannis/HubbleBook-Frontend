export default function fetchSearchArticles(search) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ARTICLES_REQUEST' },{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search: search}),
      });
      fetch(`http://localhost:3000/articles/search`)
        .then(response => response.json())
        .then(articles => dispatch({ type: 'SEARCH_ARTICLES', articles }));
    };
  }