import { Component } from "react";
import Card from "../card";
import './styles.css';

class List extends Component {
    render() {
        return (
            <div className='card-list'>
                {
                    this.props.list.map((monster) => {
                        // paint the searching part into the yellow color 
                        return  <Card item={monster} key={monster.id}/>
                    })
                }   
            </div>
        )
    }
}

export default List;