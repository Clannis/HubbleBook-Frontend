import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from './actions/fetchAllArticles'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'


class App extends Component {

  componentDidMount() {
    this.props.fetchAllArticles()
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => {
          <Fragment>
            <Navbar />
            <main role="main">
              <Jumbotron/>
              <ArticlesContainer articles={this.props.articles} />
            </main>
          </Fragment>
        }}/> 
        <Route path={'/:article_id'} render={(routerProps) => <ActiveArticle {...routerProps} articles={this.props.articles}/>}/>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchAllArticles: () => dispatch(fetchAllArticles()) }
}

const mapStateToProps = (state) => {
  return {articles: state.articles, requesting: state.requesting}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
