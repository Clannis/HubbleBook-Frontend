import { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <>
                <nav class="site-header fixed-top py-1 bg-dark">
                    <div class="container d-flex flex-column flex-md-row justify-content-between">
                        <a class="py-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                        </a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>
                    </div>
                </nav>

                <div class="position-relative overflow-hidden text-center bg-dark">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal">Welcome to the Universe</h1>
                        <p class="lead font-weight-normal">AAs it stands now, this application has been generated for the purposes of having a home base for all Hubble Telescope related articles published by NASA.</p>
                        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div class="product-device box-shadow d-none d-md-block"></div>
                    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>

                <div class="container-fluid">
                    <div className="row">
                        <div class="col-lg-3 col-md-6 bg-dark text-center text-white">
                            <div class="my-3 py-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 bg-light text-center">
                            <div class="my-3 p-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>
                    
                        <div class="col-lg-3 col-md-6 bg-light text-center">
                            <div class="my-3 p-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 bg-primary text-center text-white">
                            <div class="my-3 py-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="container py-5">
                    <div class="row">
                        <div class="col-12 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                        <small class="d-block mb-3 text-muted">© 2017-2018</small>
                        </div>
                        <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Cool stuff</a></li>
                            <li><a class="text-muted" href="#">Random feature</a></li>
                            <li><a class="text-muted" href="#">Team feature</a></li>
                            <li><a class="text-muted" href="#">Stuff for developers</a></li>
                            <li><a class="text-muted" href="#">Another one</a></li>
                            <li><a class="text-muted" href="#">Last time</a></li>
                        </ul>
                        </div>
                        <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                        </div>
                        <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Business</a></li>
                            <li><a class="text-muted" href="#">Education</a></li>
                            <li><a class="text-muted" href="#">Government</a></li>
                            <li><a class="text-muted" href="#">Gaming</a></li>
                        </ul>
                        </div>
                        <div class="col-6 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Team</a></li>
                            <li><a class="text-muted" href="#">Locations</a></li>
                            <li><a class="text-muted" href="#">Privacy</a></li>
                            <li><a class="text-muted" href="#">Terms</a></li>
                        </ul>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Welcome