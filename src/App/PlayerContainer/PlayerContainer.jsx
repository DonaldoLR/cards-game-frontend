import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Player from "./Player/Player";

const PlayerContainer = () => {
	const [players, setPlayers] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3000/users`)
			.then((res) => res.json())
			.then(setPlayers)
			.catch((error) => console.log(error));
	}, []);

	const displayPlayers = () => {
		return players.map((player) => (
			<Player
				key={`${player.id} - ${player.name}`}
				id={player.id}
				name={player.name}
				avatarImage={player.avatar_image}
			/>
		));
	};
	return (
		<div>
			{players && displayPlayers()}{" "}
			<div>
				<NavLink to='newPlayer' className='btn btn-primary'>
					Add a new player
				</NavLink>
			</div>
		</div>
	);
};

export default PlayerContainer;
