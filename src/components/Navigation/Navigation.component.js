import {Component} from 'react';
import {Link} from 'react-router-dom';
import {DEFAULT_PROPS, PROP_TYPES} from './Navigation.config';

class Navigation extends Component {

    isExternalURL = url => {
        try {
            return new URL(url).origin !== window.location.origin;
        } catch (e) {
            return false;
        }
    }

    render() {
        const {links, title} = this.props;
        const {navClass = '', titleClass = ''} = this.props.className;

        return (
            <>
                {title && <h2 className={titleClass}>{title}</h2>}
                {
                    !!links.length && (
                        <nav>
                            <ul className={navClass}>
                                {
                                    links.map(link => (
                                        <li key={link.label} className={link.isActive ? 'uk-active' : ''}>
                                            {
                                                this.isExternalURL(link.path) ? (
                                                    <a href={link.path} target="_blank">{link.label}</a>
                                                ) : (
                                                    <Link to={link.path}>{link.label}</Link>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    )
                }
            </>
        );
    }
}

Navigation.defaultProps = DEFAULT_PROPS;
Navigation.propTypes = PROP_TYPES;

export {Navigation};
