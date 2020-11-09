import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from './actions/fetchAllArticles'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './components/Navbar'

class App extends Component {

  componentDidMount() {
    this.props.fetchAllArticles()
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <main role="main" className="container">
          <ArticlesContainer articles={this.props.articles} />
        </main>
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
