const LoginSignupNav = (props) => {
    console.log(props.login)
    return props.login ?
     (
        <nav class="site-header fixed-top py-1 bg-light">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2 d-none btn btn-primary d-md-inline-block" href="#">Welcome</a>
                <a class="py-2 d-none btn btn-primary d-md-inline-block" href="#">Signup</a>
            </div>
        </nav>
    ) :
     (
        <nav class="site-header fixed-top py-1 bg-light">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2 d-none btn btn-primary d-md-inline-block" href="#">Welcome</a>
                <a class="py-2 d-none btn btn-primary d-md-inline-block" href="#">Login</a>
            </div>
        </nav>
    )
}

export default LoginSignupNav