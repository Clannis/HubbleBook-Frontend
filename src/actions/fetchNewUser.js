export default function fetchNewUser(newUser) {
    return (dispatch) => {
      dispatch({ type: 'START_REQUESTING' });
      fetch(`http://localhost:3000/users`,{
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
                localStorage.token = response.token
                dispatch({ type: 'STOP_REQUESTING'})
              } else {
                alert(response.errors)
              }
        });
    };
  }