import { Component } from 'react'

class Login extends Component {
    render() {
        return(
            <div class="container h-100">
                <div class="row justify-content-center align-self-center text-center">
                    <form className="col-6">
                        <img className="mb-4 rounded" src="https://cdn.dribbble.com/users/1199444/screenshots/6546398/hubble_space_telescope.png" alt="" width="100" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
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