import { Component } from 'react'
import { connect } from 'react-redux'
import Jumbotron from './Jumbotron'

class ActiveArticle extends Component {

    render() {
        let article = this.props.articles.filter(article => article.news_id === this.props.match.params.article_id)[0]
        console.log(this.props.articles)
        console.log(this.props.match.params.article_id)
        return(
            <div>
                <Jumbotron header={article.name} body={article.abstract} href={article.url}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ActiveArticle)