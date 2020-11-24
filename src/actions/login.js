export default function login(user) {
    return (dispatch) => {
        fetch('http://localhost:3000/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(response => {
            dispatch({ type: 'LOGIN', user: response.user.id, token: response.token })
        })
    }
  }