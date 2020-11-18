import { Component } from "react"

class Search extends Component {
    render(){
        return (
            <form className="form-inline mt-2mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default Search