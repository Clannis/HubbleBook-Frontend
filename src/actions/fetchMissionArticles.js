export default function fetchMissionArticles(mission_name) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch(`http://hubblebook-api.herokuapp.com/missions/${mission_name}`)
        .then(response => response.json())
        .then(articles => {
          dispatch({ type: 'ADD_ARTICLES', articles })
          dispatch({ type: 'STOP_REQUESTING'})
        });
    };
  }