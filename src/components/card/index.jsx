import { Component } from "react";
import './styles.css';

const Card = (props) => {

    const {id, name, email} = props.item;
    return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}?set=2&size=180x180`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
    )
}

export default Card;