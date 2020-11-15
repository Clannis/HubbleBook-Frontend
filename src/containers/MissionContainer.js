import { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import fetchMissionArticles from '../actions/fetchMissionArticles'

class MissionContainer extends Component {
    
    componentDidMount() {
        console.log(this.props.match.params.mission_name)
        this.props.fetchMissionArticles(this.props.match.params.mission_name)
    }

    renderArticles = () => {
        if (this.props.articles[0].mission === this.props.match.params.mission_name) {
            return this.props.articles.map((article) => <Article article={article} />)
        }
    }

    render() {
        console.log(this.props.articles)
        return(
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        {this.renderArticles()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return { fetchMissionArticles: (mission_name) => dispatch(fetchMissionArticles(mission_name)) }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MissionContainer)