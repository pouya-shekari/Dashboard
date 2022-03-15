import {Component} from 'react';
import style from './search.css';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="uk-margin">
                    <form className="uk-search uk-search-default">
                        <span className='uk-search-icon'></span>
                        <input className="uk-search-input" type="search" placeholder="Search" />
                    </form>
                </div>
            </div>
        );
    }
}

export {Search};
