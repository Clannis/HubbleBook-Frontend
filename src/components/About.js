const About = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    <h2>James Dodds</h2>
                    <p>Prospective Software Engineer curently working as a Water Treatment Operator. <strong>Previous Experience includes:</strong></p>
                    <ul className="list-unstyled">
                        <li>Project Manager</li>
                        <li>GIS Technician</li>
                        <li>Reservoir Caretaker</li>
                        <li>Distribution/Collection Operator</li>
                        <li>Heavy Equipment Operator</li>
                    </ul>
                    <p><a class="btn btn-secondary" href="https://github.com/Clannis" role="button">View Portfolio »</a></p>
                </div>
            </div>
        </div>
    )
}

export default About