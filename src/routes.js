import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Erro from './pages/error';
import Home from './pages/home';




const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            
                <Route exact path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;