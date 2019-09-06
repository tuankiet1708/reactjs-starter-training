import React from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import Home from './views/Home';
import Login from './views/Login';
import Search from './views/Search';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
);
const store = createStore(reducers, enhancer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login" render={props => <Login {...props}/>} />
            <Route exact path="/search" name="Search" render={props => <Search {...props}/>} />
            <Route path="/" name="Home"
              render={props => <Home {...props}/>}
            />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
