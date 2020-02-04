import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class Main extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Contact' component={Contact} />
                    <Route exact path='/Projects' component={Projects} />
                    <Route exact path='/Resume' component={Resume} />
                </Switch>
            </Router>




        )
    }
}


export default Main;