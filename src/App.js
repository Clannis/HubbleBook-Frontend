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
                <Jumbotron header={"Welcome To The Universe"} body={"As it stands now, this application has been generated for the purposes of having a home base for all Hubble Telescope related articles published by NASA."}/>
                <Loading requesting={this.props.requesting} />
                <ArticlesContainer />
              </main>
            </Fragment>
          )
        }}/> 
        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <Loading requesting={this.props.requesting} />
              <ActiveArticle {...routerProps} />
            </Fragment>
          )
        }} />
        <Route path={'/missions/:mission_name'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <Loading requesting={this.props.requesting} />
              <MissionContainer {...routerProps} />
            </Fragment>
          )
        }} />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {requesting: state.requesting}
}

export default connect(mapStateToProps)(App);
