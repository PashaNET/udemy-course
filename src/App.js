import { useEffect, useState } from 'react';

import List from './components/list';
import SearchBar from './components/searchBar';
import './App.css';

const App = (props) => {
	const [searchString, setSearchString] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				setMonsters(users);
			});
	}, []);

	useEffect(() => {
		const filtered = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchString);
		});

		setFilteredMonsters(filtered);
	}, [monsters, searchString]);

	const searchInputHandler = ({ target: { value }}) => {
		setSearchString(value.toLowerCase());
	}

	return (
		<div className="App">
			<SearchBar onChangeHandler={searchInputHandler}/> 
			<List list={filteredMonsters} />
		</div>)
}
export default App;

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			name: 'Pavlo',
// 			monsters: [],
// 			initialMonsters: []
// 		}
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(response => response.json())
// 			.then(users => {
// 				this.setState({
// 					monsters: users,
// 					initialMonsters: users
// 				});
// 			});
// 	}

// 	searchInputHandler({target: { value }}) {
// 		let inputValue = value.toLowerCase(),
// 			monstersToShow = this.state.initialMonsters;

// 		if(inputValue !== '') {
// 			monstersToShow = this.state.initialMonsters.filter((monster) => {
// 				return monster.name.toLowerCase().includes(inputValue);
// 			});
// 		}

// 		this.setState({monsters: monstersToShow});
// 	}

// 	//check the TS
// 	render() {
// 		return (<div className="App">
// 					<SearchBar onChangeHandler={this.searchInputHandler.bind(this)}/> 
// 					<List list={this.state.monsters} />
// 				</div>);
// 	}
// }

// export default App;
