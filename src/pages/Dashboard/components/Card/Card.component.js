import React, {Component} from 'react';
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {courseImage, category , title , companyLogo , createdAt , price , teacher , position} = this.props
        return (
            <div className='card'>
                <div className="card-left-side">
                    <img className='image' src={courseImage} alt=""/>
                    <div style={{marginLeft:'2rem' , padding:'1rem'}}>
                        <div style={{color:'#58af9b' , fontSize:'0.8rem' , marginBottom:'0.6rem'}}>{category}</div>
                        <div style={{color:'black' , fontWeight:'600' , marginBottom:'0.6rem'}}>{title}</div>
                        <div style={{color:'gray' , fontSize:'0.8rem'}}>{createdAt}</div>
                    </div>
                </div>
                <div className="card-right-side">
                    <div style={{display:'flex' , alignItems:'center' , flexWrap:'wrap'}}>
                        <img className='googleImage' src={companyLogo} alt=""/>
                        <div style={{marginLeft:'2rem' , padding:'1rem'}}>
                            <div style={{color:'black' , marginBottom:'0.6rem'}}>{teacher}</div>
                            <div style={{color:'gray' , fontSize:'0.8rem'}}>{position}</div>
                        </div>
                    </div>
                    <div style={{color:'#58af9b'}}>{price}</div>
                </div>

            </div>
        );
    }
}

export {Card};