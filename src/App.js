import React, {Component} from 'react';
import Layout from "./components/Layout";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./components/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route exact path='/' component={Home}/>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
