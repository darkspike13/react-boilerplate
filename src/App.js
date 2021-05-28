import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Clock from './components/Clock/Clock';

const App = () => (
    <Router>
        <Switch>
            <Route path="*">
                <Home />
            </Route>
        </Switch>
        <footer />
    </Router>
);

const Home = () => (
    <>
        <h2>Work in Progress</h2>
        <Clock />
    </>
);

export default App;
