import {Component} from 'react';
import {Main} from "./components";
import {Navbar} from "./components";
import {Header} from "./components/Header/Header.component";
import {Helmet} from "react-helmet";

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div>
                    <Header />
                    <Navbar />
                    <Main />
                </div>
            </div>
        );
    }
}

export {Home};