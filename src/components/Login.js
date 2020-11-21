import { Component } from 'react'

class Login extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        rememberMe: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, email, password, rememberMe } = this.state
        const body = {username: username, password: password, email: email}
        // fetch 
        .then(response => {
            if (!response.errors){
              console.log(response)
              // do something
            } else {
              alert(response.errors.message)
            }
          })
    }

    render() {
        return(
            <div class="container h-100">
                <div class="row justify-content-center align-self-center text-center">
                    <form className="col-6" onSubmit={this.handleSubmit}>
                        <img className="mb-4 rounded" src="https://cdn.dribbble.com/users/1199444/screenshots/6546398/hubble_space_telescope.png" alt="" width="100" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <input type="text" id="inputUsername" name="username" className="form-control" placeholder="Username" required="" autoFocus="" onChange={this.handleChange}/>
                        <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email Address" required="" autoFocus="" onChange={this.handleChange}/>
                        <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required="" onChange={this.handleChange}/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" name="rememberMe" value="remember-me" onChange={this.handleChange}/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
                {/* <div class="row h-100 justify-content-center align-items-center text-center">
                    <p>Or login With ...</p>
                </div> */}
            </div>
        )
    }
}

export default Login