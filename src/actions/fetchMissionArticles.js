export default function fetchMissionArticles(mission_name) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ARTICLES_REQUEST' });
      fetch(`http://localhost:3000/missions/${mission_name}`)
        .then(response => response.json())
        .then(articles => dispatch({ type: 'ADD_ARTICLES', articles }));
    };
  }