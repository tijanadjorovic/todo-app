import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from '../components/header'
import TaskList from '../containters/TaskList/TaskList';
import Login from '../containters/Login/Login';



const fetchStateFromLocalStorage = () => {
    const userString = window.localStorage.getItem('user');

    if(!userString) {
        const initialState = {isAuthenticated: false};
        return initialState;
    } else {
        const initialState = JSON.parse(userString);
        return initialState;
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        const initialState = fetchStateFromLocalStorage();
        this.state = initialState
        this.authenticate = this.authenticate.bind(this);
        this.signout = this.signout.bind(this);
    }

    authenticate() {
        const user = {isAuthenticated: true};

        window.localStorage.setItem('user', JSON.stringify(user))

        this.setState(user)
    }

    signout() {
        window.localStorage.removeItem('user')
        this.setState({isAuthenticated: false})
    }

    render() {
        const fakeAuth = this.state;

        return (
            <Router>
                <div>
                    <Header redirectToReferrer={fakeAuth.isAuthenticated} handleSignOut={this.signout}/>
                    <Switch>
                        <PrivateRoute 
                            exact path="/" 
                            component={TaskList} 
                            isAuthenticated={this.state.isAuthenticated}/>
                        <Route exact path="/login" 
                            render={props => 
                            <Login handleLogin={this.authenticate} 
                            redirectToReferrer={fakeAuth.isAuthenticated}/>} />
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )}
        />
    );
}

const NoMatch = (props) => {
    return (
        <h1>404 - Page not found</h1>
    )
}

export default App;