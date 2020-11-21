export default function fetchSearchArticles(search) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING'})
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
          dispatch({ type: 'STOP_REQUESTING'})
        } else {
          dispatch({ type: 'ADD_RESULTS', results })
          dispatch({ type: 'STOP_REQUESTING'})
        }
      })
    };
  }

  