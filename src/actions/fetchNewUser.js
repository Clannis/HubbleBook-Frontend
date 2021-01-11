export default function fetchNewUser(newUser) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch(`http://hubblebook-api.herokuapp.com/users`,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then(response => response.json())
        .then(response => {
            if (!response.errors){
                console.log(response.user)
                dispatch({ type: 'ADD_USER', user: response.user })
                dispatch({ type: 'STOP_REQUESTING'})
              } else {
                alert(response.errors)
              }
        });
    };
  }