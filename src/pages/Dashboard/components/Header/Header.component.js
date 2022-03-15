import {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from 'assets/images/logo.svg';
import {Navigation, Search} from 'components';
import {PATHS} from 'configs/routes.config';
import {LINKS} from './Header.config';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                    <Link className="uk-navbar-item uk-logo" to={PATHS.HOME}>
                        <figure>
                            <img src={logo} alt="Article Logo"/>
                            <span style={{marginLeft:'1rem'}}>Diprella</span>
                        </figure>
                    </Link>
                </div>

                <div className="uk-navbar-center">
                    <Search/>
                </div>
            </header>
        );
    }
}

export {Header};
