import './styles.css';

const SearchBar = (props) => {
    return (<input 
                className='search-box' 
                type='search' 
                placeholder='Search..' 
                onChange={props.onChangeHandler}/>);
}

export default SearchBar;