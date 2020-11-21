import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Login from './components/Login'
import Loading from './components/Loading'
import Footer from './components/Footer'
import MissionContainer from './containers/MissionContainer'
import About from './components/About'


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
                <Loading requesting={this.props.requesting} />
                <ArticlesContainer articles={this.props.articles} />
              </main>
            </Fragment>
          )
        }}/> 
        <Route exact path={'/search'} render={() => {
          return(
            <Fragment>
              <Navbar />
              <p>search</p>
            </Fragment>
          )
        }} />
        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <Loading requesting={this.props.requesting} />
              <ActiveArticle {...routerProps} activeArticle={this.props.activeArticle}/>
            </Fragment>
          )
        }} />
        <Route path={'/missions/:mission_name'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <Loading requesting={this.props.requesting} />
              <MissionContainer {...routerProps} articles={this.props.articles}/>
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
  return {articles: state.articles.articles, requesting: state.articles.requesting, activeArticle: state.articles.activeArticle}
}

export default connect(mapStateToProps)(App);
