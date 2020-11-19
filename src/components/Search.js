import { Component } from "react"

class Search extends Component {

    state = {
        search: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return (
            <form className="form-inline mt-2mt-md-0">
                <input className="form-control mr-sm-2" type="text" name="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.search}/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default Search