import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Example from './components/Example';
import Header from './Header';
import Index from './components/Index';
import Posts from './components/Posts';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/example" component={Example} />
          <Route path="/posts/:id" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
