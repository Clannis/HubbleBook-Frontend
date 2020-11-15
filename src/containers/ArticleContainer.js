import { Component } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from '../actions/fetchAllArticles'
import Article from '../components/Article'

class ArticleContainer extends Component {

    componentDidMount() {
        this.props.fetchAllArticles()
      }

    renderArticles = () => {
        if (this.props.articles.length > 0) {
            return this.props.articles.map((article) => <Article article={article} />)
        }
    }

    render() {
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

function mapDispatchToProps(dispatch){
    return { fetchAllArticles: () => dispatch(fetchAllArticles()) }
}

export default connect(null, mapDispatchToProps)(ArticleContainer)