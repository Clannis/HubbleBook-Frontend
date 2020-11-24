import { Component, createRef } from 'react'
import { connect } from 'react-redux'
import fetchNewUser from '../actions/fetchNewUser'
import Navbar from '../containers/Navbar'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            openEye: true,
            closedEye: false
        }
        this.username = createRef()
        this.password = createRef()
        this.passwordConfirmation = createRef()
    }
    

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const username = this.state.username
        const email = this.state.email
        const password = this.state.password
        const passwordConfirmation = this.state.passwordConfirmation
        if (password === passwordConfirmation){
          const newUser = {username: username, password: password, email: email}
          this.props.fetchNewUser(newUser)
        } else {
            alert("passwords dont match")
        }
    }

    handleClick = () => {
        if (this.password.current.type === "password") {
            this.password.current.type = "text"
            this.passwordConfirmation.current.type = "text"
            console.log(this.state)
            this.setState({
                openEye: !this.state.openEye,
                closedEye: !this.state.closedEye
            })
        } else {
            this.password.current.type = "password"
            this.passwordConfirmation.current.type = "password"
            console.log(this.state)
            this.setState({
                openEye: !this.state.openEye,
                closedEye: !this.state.closedEye
            })
        }
    }

    componentDidMount() {
        this.username.current.focus();
    }

    render() {
        return(
            <>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-self-center text-center">
                    <form className="col-6 my-auto" onSubmit={this.handleSubmit}>
                        <img className="mb-4 rounded" src="https://cdn.dribbble.com/users/1199444/screenshots/6546398/hubble_space_telescope.png" alt="" width="100" height="100"/>
                        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                        <input type="text" id="inputUsername" ref={this.username}name="username" className="form-control" placeholder="Username" required="" autoFocus="" onChange={this.handleChange}/>
                        <input type="email" id="inputEmail" name="email" className="form-control my-2" placeholder="Email address" required="" autoFocus="" onChange={this.handleChange}/>
                        <div className="input-group" id="show_hide_password">
                            <input type="password" id="inputPassword" ref={this.password} name="password" className="form-control" placeholder="Password" required="" onChange={this.handleChange}/>
                            <div onClick={this.handleClick} className="input-group-append" style={{cursor: "pointer"}}>
                                <span className="input-group-text" id="basic-addon2">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-eye-fill ${this.state.openEye ? "d-block": "d-none"}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path fillRule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-eye-slash-fill ${this.state.closedEye ? "d-block": "d-none"}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"/>
                                        <path fillRule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="input-group mt-2" id="show_hide_password">
                            <input type="password" id="inputPasswordConfirmation" ref={this.passwordConfirmation} name="passwordConfirmation" className="form-control" placeholder="Confirm Password" required="" onChange={this.handleChange}/>
                            <div onClick={this.handleClick} className="input-group-append" style={{cursor: "pointer"}}>
                                <span className="input-group-text " id="basic-addon2">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-eye-fill ${this.state.openEye ? "d-block": "d-none"}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path fillRule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-eye-slash-fill ${this.state.closedEye ? "d-block": "d-none"}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"/>
                                        <path fillRule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <br/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    </form>
                </div>
                {/* <div class="row h-100 justify-content-center align-items-center text-center">
                    <p>Or Signup With ...</p>
                </div> */}
            </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewUser: (newUser) => dispatch(fetchNewUser(newUser))
    }
}

export default connect(null, mapDispatchToProps)(Signup)