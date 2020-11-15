const About = () => {
    return(
        <div className="container">
            <div className="row my-3 pg-3 rouded shadow-lg bg-light">
                <div className="col-lg-8 mx-auto text-center">
                    <img src={process.env.PUBLIC_URL + '/james_dodds.jpeg'} className="bd-placeholder-img rounded-circle" width="140" height="140" alt="James Dodds"/>
                    <h2>James Dodds</h2>
                    <h4>(Creator)</h4>
                    <p>Prospective Software Engineer curently working as a Water Treatment Operator. <strong>Previous Experience includes:</strong></p>
                    <ul className="list-unstyled">
                        <li>Project Manager</li>
                        <li>GIS Technician</li>
                        <li>Reservoir Caretaker</li>
                        <li>Distribution/Collection Operator</li>
                        <li>Heavy Equipment Operator</li>
                    </ul>
                    <p><a class="btn btn-secondary" href="https://github.com/Clannis" role="button">View GitHub Profile »</a></p>
                </div>
            </div>
            <div className="row my-3 pg-3 rouded shadow-lg bg-light">
                <div className="col-lg-8 mx-auto text-center">
                    <p>This web app was created for my final portfolio project as part of the Flatiron School Part-Time Online Software Engineering Curriculum.</p>
                </div>
            </div>
        </div>
    )
}

export default About