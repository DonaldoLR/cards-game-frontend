import React, { useEffect, useState } from "react";
import Player from "./Player/Player";

const PlayerContainer = () => {
	const [players, setPlayers] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASE_URL}/users`)
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
		<div className='container'>
			<div className='row g-0 mt-5 mx-5'>{players && displayPlayers()}</div>
		</div>
	);
};

export default PlayerContainer;
