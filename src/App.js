import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import EditView from './views/EditView';
import AddView from './views/AddView';

function App() {
    return ( 
        <div className = "App">
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/add" component={AddView}/>
                        <Route path="/edit/:id" component={EditView}/>
                        <Route path="/" component={HomeView}/>
                    </Switch>
                </div>
            </Router>
        </div> 
    ); 
}

export default App;