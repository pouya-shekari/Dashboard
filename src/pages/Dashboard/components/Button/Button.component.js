import {Component} from 'react';
import './button.css'

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, onClick , title , style} = this.props
        return (
            <>
                <button className={style} title="Shoes" onClick={onClick} id={id}>
                    {title}
                </button>
            </>
        );
    }
}

export {Button};