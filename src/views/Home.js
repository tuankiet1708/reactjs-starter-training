import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import updateWelcomeString from '../actions/updateWelcomeString';

function Home({welcomeString, updateWelcomeString}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/views/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <h4>
            <span>{welcomeString}</span><br/>
            <button onClick={() => updateWelcomeString("Have a nice day!")}>Change Welcome String</button>
        </h4>
        
      </header>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
        welcomeString: state.welcome
    }
}

const mapDispatchToProps = {
    updateWelcomeString
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);