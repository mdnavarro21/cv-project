import React, { Component } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import Overview from './components/Overview';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Overview />
        <Footer />        
      </div>

    )
  }
}

export default App;
