import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./pages/Counter";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/counter" component={Counter} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
