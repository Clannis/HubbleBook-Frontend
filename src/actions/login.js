export default function login(user) {
    const rememberMe = user.rememberMe
    return (dispatch) => {
        fetch('http://hubblebook-api.herokuapp.com/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'LOGIN', user: response.user, token: response.token, rememberMe: rememberMe })
            } else {
                alert(`${response.errors}`)
            }
        })
    }
  }