import { Component } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from './actions/fetchAllArticles'
import ArticlesContainer from './containers/ArticleContainer'
import Title from './components/Title'

class App extends Component {

  componentDidMount() {
    this.props.fetchAllArticles()
  }

  render() {
    return (
      <main>
        <Title />
        <ArticlesContainer articles={this.props.articles} />
      </main>
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
