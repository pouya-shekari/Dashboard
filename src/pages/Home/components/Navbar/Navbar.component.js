import {Component} from 'react';
import {Navigation} from "../../../../components";
import {PATHS} from "../../../../configs/routes.config";
import './navbar.css'

const LINKS = [
    {
        label: 'Development',
        path: PATHS.HOME,
    }, {
        label: 'Design',
        path: PATHS.HOME,
    }, {
        label: 'Marketing',
        path: PATHS.HOME,
    }, {
        label: 'Business',
        path: PATHS.HOME,
    }, {
        label: 'Personal Development',
        path: PATHS.HOME,
    }, {
        label: 'Language',
        path: PATHS.HOME,
    }, {
        label: 'Lifestyle',
        path: PATHS.HOME,
    }, {
        label: 'Arts',
        path: PATHS.HOME,
    },{
        label: 'Development',
        path: PATHS.HOME,
    },{
        label: 'Development',
        path: PATHS.HOME,
    }, {
        label: 'Business',
        path: PATHS.HOME,
    }
]

class Navbar extends Component {
    render() {
        return (
            <div className='navbarHome'>
                <Navigation className={{navClass: 'uk-navbar-nav'}} links={LINKS}/>
            </div>
        );
    }
}

export {Navbar};