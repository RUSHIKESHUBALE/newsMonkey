import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import News from './Components/News'
// import NewsItem from './Components/NewsItem'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar title='News Monkey' />
        <div className="container">
          <News headingTitle = "Top headlines from TechCrunch right now" totalNews = "12"/>
          {/* <News headingTitle = "Politics headlines below"/>
          <News headingTitle = "Entertainment headlines below"/> */}
        </div>
      </>
    );
  }
}


//c40a245a-b8e8-430a-8944-288b694824e9 News API key 
//1019fcf4b20742c49de94004dc50e1c7 News API key 