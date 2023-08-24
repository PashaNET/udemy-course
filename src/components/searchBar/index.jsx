import { Component } from "react";
import './styles.css';

class SearchBar extends Component {
    render() {
        return <input 
                    className='search-box' 
                    type='search' 
                    placeholder='Search..' 
                    onChange={this.props.onChangeHandler}/>
    }
}

export default SearchBar;