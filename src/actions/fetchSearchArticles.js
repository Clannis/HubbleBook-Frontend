export default function fetchSearchArticles(search) {
    return (dispatch) => {
      dispatch({ type: 'START_SEARCH' })
      fetch('http://localhost:3000/search', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search: search}),
      })
      .then(response => response.json())
      .then(results => {
        if (results.message) {
          dispatch({ type: 'ADD_ERROR', results })
        } else {
          dispatch({ type: 'ADD_RESULTS', results })
        }
      })
    };
  }

  