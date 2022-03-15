import React, {Component} from 'react';
import {Button} from "./components/Button/Button.component";
import {Card} from "./components/Card/Card.component";
import {Header} from "./components/Header/Header.component";
import {getCourses} from "../../api/api";
import './dashboard.css'
import {Helmet} from "react-helmet";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            category:'Shoes',
            currentPage: 1,
            cardsPerPage: 10
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        this.getList('')
    }

    async getList(query){
        this.setState({currentPage:1})
        let courseList
        courseList = await getCourses(`?search=${query}`)
        this.setState({list:courseList.data})
    }

    render() {
        const {list, currentPage, cardsPerPage} = this.state;

        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = list.slice(indexOfFirstCard, indexOfLastCard);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / cardsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <>
                <Helmet>
                    <title>Dashboard page</title>
                </Helmet>
                <div className='dashboard'>
                    <Header />
                    <div className='navbar'>
                        <h2>Unlimited Access to Over 15,000 Courses</h2>
                        <div className='items'>
                            <Button title="Shoes" id="Shoes" style="styleButton" onClick={()=>{this.setState({category:'Shoes'})
                                this.getList('Shoes')
                            }} />
                            <Button title="Garden" id="Garden" style="styleButton" onClick={()=>{this.setState({category:'Garden'})
                                this.getList('Garden')
                            }} />
                            <Button title="Beauty" id="Beauty" style="styleButton" onClick={()=>{this.setState({category:'Beauty'})
                                this.getList('Beauty')
                            }} />
                            <Button title="Health" id="Health" style="styleButton" onClick={()=>{this.setState({category:'Health'})
                                this.getList('Health')
                            }} />
                            <Button title="Baby" id="Baby" style="styleButton" onClick={()=>{this.setState({category:'Baby'})
                                this.getList('Baby')
                            }} />
                            <Button title="Toys" id="Toys" style="styleButton" onClick={()=>{this.setState({category:'Toys'})
                                this.getList('Toys')
                            }} />
                            <Button title="Tools" id="Tools" style="styleButton" onClick={()=>{this.setState({category:'Tools'})
                                this.getList('Tools')
                            }} />
                            <Button title="Home" id="Home" style="styleButton" onClick={()=>{this.setState({category:'Home'})
                                this.getList('Home')
                            }} />
                        </div>
                    </div>
                    <div className="mainList">
                        {currentCards.map((item,index)=>{
                            return(
                                <>
                                    <Card key={index} courseImage={item.courseImage} category={item.category}
                                          title={item.title} companyLogo={item.companyLogo} createdAt={item.createdAt}
                                          price={item.price} teacher={item.teacher} position={item.position} />
                                </>
                            )
                        })}
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export {Dashboard};