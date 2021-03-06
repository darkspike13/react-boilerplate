import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => (
    <Router>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        <footer />
    </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

export default App;
