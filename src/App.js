import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
