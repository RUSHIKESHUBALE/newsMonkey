import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress : 10
  }

  // newsapikey = process.env.REACT_APP_NEWS_API_KEY;
  newsapikey = "1019fcf4b20742c49de94004dc50e1c7"

  //This is the function to set the progress 
  setProgress = (progressCame)=>{
    this.setState({progress : progressCame})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar title='News Monkey' />
          <LoadingBar height = {3.5}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <div className="container">
            <Routes>
              <Route path="/" element={<><News setProgress = {this.setProgress} key="gen" newsapikey = {this.newsapikey} category="general" headingTitle="Top headlines from TechCrunch right now" />
                <News setProgress = {this.setProgress} key="business" newsapikey = {this.newsapikey} category="business" headingTitle="Top business headlines from TechCrunch right now" totalNews="4" /></>} />
              <Route path="/sportent" element={<><News setProgress = {this.setProgress} key="Sports" newsapikey = {this.newsapikey} category="sports" headingTitle="Top Sports headlines from TechCrunch right now" totalNews="4" />
                <News setProgress = {this.setProgress} key="entertainment" newsapikey = {this.newsapikey} category="entertainment" headingTitle="Top entertainment headlines from TechCrunch right now" totalNews="4" /></>} />
              <Route path="/sciencetech" element={<><News setProgress = {this.setProgress} key="science" newsapikey = {this.newsapikey} category="science" headingTitle="Top science headlines from TechCrunch right now" totalNews="4" />
                <News setProgress = {this.setProgress} key="technology" newsapikey = {this.newsapikey} category="technology" headingTitle="Top technology headlines from TechCrunch right now" totalNews="4" /></>} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}


//c40a245a-b8e8-430a-8944-288b694824e9 News API key 
//1019fcf4b20742c49de94004dc50e1c7 News API key 