import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </Router>,
    document.getElementById('root')
);