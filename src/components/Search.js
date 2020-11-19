import { Component } from "react"
import { connect } from 'react-redux'
import fetchSearchArticles from '../actions/fetchSearchArticles'

class Search extends Component {

    state = {
        search: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchSearchArticles(event.target.search.value)
    }

    render(){
        return (
            <form className="form-inline mt-2mt-md-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" name="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.search}/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { fetchSearchArticles: (search) => dispatch(fetchSearchArticles(search)) }
}

export default connect(null, mapDispatchToProps)(Search)