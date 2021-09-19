import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardsContainer from "./CardsContainer/CardsContainer";
import EditPlayerForm from "./EditPlayerForm/EditPlayerForm";
import NewPlayerForm from "./NewPlayerForm/NewPlayerForm";
import NoMatch from "./NoMatch/NoMatch";
import PlayerCardsContainer from "./PlayerCardsContainer/PlayerCardsContainer";
import PlayerContainer from "./PlayerContainer/PlayerContainer";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<PlayerContainer />
				</Route>
				<Route exact path='/users/:id'>
					<PlayerCardsContainer />
				</Route>
				<Route exact path='/newPlayer'>
					<NewPlayerForm />
				</Route>
				<Route exact path='/users/:id/edit'>
					<EditPlayerForm />
				</Route>
				<Route exact path='/cards'>
					<CardsContainer />
				</Route>
				<Route path='*'>
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
