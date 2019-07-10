import React, {Component} from 'react';
import logo from "../media/logo.svg";
import '../styles/App.css';

export class Home extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    John's Android Studio Tutorials
                </p>
                <p>
                    Site is currently being built </p>
                <p>
                    Check back later for updates
                </p>
                <p>
                    Requests can be sent to </p>
                <p>
                    johns.as.tutorials@gmail.com
                </p>
                <a
                    className="App-link"
                    href="https://www.youtube.com/c/JohnsAndroidStudioTutorialsvideos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    John's Android Studio Tutorials
                </a>
            </header>
        );
    }
}

export default Home;
