import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/main/UserProfile';
function App() {
  return (
    
      <div className="grid-container">
        <BrowserRouter>
        <header>
          <Header/>
        </header>
        <main >
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/userprofile" component={UserProfile}/>
          </Switch>
      
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
