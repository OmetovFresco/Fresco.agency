import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Header} from "./components/layout/Header"
import {Footer} from "./components/layout/Footer"
import {ScrollToTop} from "./components/ScrollToTop"
// import classes from "./App.module.sass";

// import {Home} from "./pages/Home"
// import {Contacts} from "./pages/Contacts"
// import {About} from "./pages/About"
// import {NotFound} from "./pages/NotFound"
// import {Film} from "./pages/Film"

import logo from './images/logo.svg';

function App() {

  return (
      <>
        <Router>
          <ScrollToTop />
          <Header logo={logo}/>
          <main>
            <Switch>
              {/*<Route exact path="/" component={Home} />*/}
              {/*<Route exact path="/:page" component={Home} />*/}
              {/*<Route path="/about" component={About} />*/}
              {/*<Route path="/contacts" component={Contacts} />*/}
              {/*<Route path="/film/:id" component={Film} />*/}
              {/*<Route component={NotFound}/>*/}
            </Switch>
          </main>
          <Footer/>
        </Router>
      </>
  );
}

export default App;