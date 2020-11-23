import { Component } from 'react'
import { connect } from 'react-redux'
import ArticleCard from '../components/ArticleCard'
import fetchMissionArticles from '../actions/fetchMissionArticles'
import LoadingContainer from './LoadingContainer'

class MissionContainer extends Component {
    
    componentDidMount() {
        this.props.fetchMissionArticles(this.props.match.params.mission_name)
    }

    componentDidUpdate() {
        if (this.props.articles[0].mission && this.props.articles[0].mission !== this.props.match.params.mission_name) {
            this.props.fetchMissionArticles(this.props.match.params.mission_name)
        }
    }

    renderArticles = () => {
        if (this.props.articles[0] && this.props.articles[0].mission === this.props.match.params.mission_name) {
            return this.props.articles.map((article) => {
                return  <div className="col-md-4" key={article.news_id}>
                            <ArticleCard article={article} />
                        </div>
            })
        }
    }

    render() {
        if (this.props.requesting) {
            return (
                <LoadingContainer/>
            )
        } else {
            return(
                <div className="album py-5" style={{maxHeight: "88vh", overflowY: "scroll"}}>
                    <div className="container">
                        <div className="row">
                            {this.renderArticles()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles.articles,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return { fetchMissionArticles: (mission_name) => dispatch(fetchMissionArticles(mission_name)) }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MissionContainer)