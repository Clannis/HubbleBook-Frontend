import { Link } from "react-router-dom"

const LoginSignupNav = (props) => {
    console.log(props.login)
    return props.login ?
     (
        <nav class="site-header fixed-top py-1 bg-light">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <Link to={"/"} ><button class="py-2 d-none btn btn-primary d-md-inline-block">Welcome</button></Link>
                <Link to={"/Signup"} ><button class="py-2 d-none btn btn-primary d-md-inline-block">Sign Up</button></Link>
            </div>
        </nav>
    ) :
     (
        <nav class="site-header fixed-top py-1 bg-light">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <Link to={"/"} ><button class="py-2 d-none btn btn-primary d-md-inline-block">Welcome</button></Link>
                <Link to={"/Login"} ><button class="py-2 d-none btn btn-primary d-md-inline-block">Log In</button></Link>
            </div>
        </nav>
    )
}

export default LoginSignupNav