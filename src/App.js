import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {ScrollToTop} from "./components/ScrollToTop"
// import classes from "./App.module.sass";

import {Home} from "./pages/Home"
import {Case} from "./pages/Case"
import {Contacts} from "./pages/Contacts"
import {Projects} from "./pages/Projects"

import logo from './images/logo.svg';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        const AOS = require("aos");
        AOS.init({
            once: true,
        });
    }, [])

    return (
        <div className="bodyWrapper">
            <Router>
                <ScrollToTop />
                <Header logo={logo}/>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/case" component={Case} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/projects" component={Projects} />
                        {/*<Route path="/film/:id" component={Film} />*/}
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;