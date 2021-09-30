import './App.css';
import About from './component/About/About';
import Notfound from './component/Notfound/Notfound';
import Features from './component/Features/Features';
import Friends from './component/Friends/Friends';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './component/Header/Header';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
    
       <BrowserRouter>
       <Header></Header>
         <Switch>
            <Route path="/about">
               <About></About>
            </Route>
            <Route path="/features">
               <Features></Features>
            </Route>
           
            <Route path="/friends">
               <Friends></Friends>
            </Route>
            <Route exact path="/friend/:friendId">
               <FriendDetail></FriendDetail>
            </Route>
            <Route exact path="/">
               <About></About>
            </Route>
            <Route path="*">
               <Notfound></Notfound>
            </Route>

         </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;

















/* <BrowserRouter>
        <Switch>
          <Route path="/About">
             <About></About>
          </Route>
          <Route path="/Features">
             <Features></Features>
          </Route>
          <Route path="/Friends">
             <Friends></Friends>
          </Route>
          <Route path="/Notfound">
             <Notfound></Notfound>
          </Route>
          <Route exact path="/">
             <About></About>
          </Route>
          <Route>
             <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter> */