import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Login from './components/Login'
import Footer from './components/Footer'
import MissionContainer from './containers/MissionContainer'
import About from './components/About'
import SearchCategoryContainer from './containers/SearchCategoryContainer'


class App extends Component {

  

  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => <Login/> } />
        <Route exact path="/articles" render={() => {
          return(
            <Fragment>
              <Navbar />
              <main role="main">
                <Jumbotron header={"Welcome To The Universe"} body={"As it stands now, this application has been generated for the purposes of having a home base for all Hubble Telescope related articles published by NASA."} href="/about"/>
                <ArticlesContainer articles={this.props.articles} requesting={this.props.requesting}/>
              </main>
            </Fragment>
          )
        }}/> 
        <Route exact path={'/search'} render={() => {
          return(
            <Fragment>
              <Navbar />
              <SearchCategoryContainer search={this.props.search} requesting={this.props.requesting}/>
            </Fragment>
          )
        }} />
        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <ActiveArticle {...routerProps} activeArticle={this.props.activeArticle} requesting={this.props.requesting}/>
            </Fragment>
          )
        }} />
        <Route path={'/missions/:mission_name'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <MissionContainer {...routerProps} articles={this.props.articles} requesting={this.props.requesting}/>
            </Fragment>
          )
        }} />
        <Route path={'/about'} render={() => {
          return(
            <Fragment>
              <Navbar />
              <About />
            </Fragment>
          )
        }} />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles, 
    requesting: state.requesting, 
    activeArticle: state.articles.activeArticle,
    error: state.error,
    search: state.search
  }
}

export default connect(mapStateToProps)(App);
