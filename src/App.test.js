import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorksGrid from './components/WorksGrid';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={WorksGrid} />
          <Route path="/about" component={About} />
          <Route path="/works" component={WorksGrid} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
