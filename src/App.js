import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home';

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

export default App;
