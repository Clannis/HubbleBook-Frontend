import { Component } from 'react'
import { connect } from 'react-redux'
import ArticleCard from '../components/ArticleCard'
import fetchMissionArticles from '../actions/fetchMissionArticles'

class MissionContainer extends Component {
    
    componentDidMount() {
        this.props.fetchMissionArticles(this.props.match.params.mission_name)
    }

    componentDidUpdate() {
        if (this.props.articles[0].mission !== this.props.match.params.mission_name) {
            this.props.fetchMissionArticles(this.props.match.params.mission_name)
        }
    }

    renderArticles = () => {
        if (this.props.articles[0].mission === this.props.match.params.mission_name) {
            return this.props.articles.map((article) => <ArticleCard article={article} />)
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