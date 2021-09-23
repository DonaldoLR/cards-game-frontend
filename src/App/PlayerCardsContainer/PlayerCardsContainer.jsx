import React, { useEffect, useState } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import Card from "../Card/Card";

const PlayerCardsContainer = () => {
	const { id } = useParams();
	const [player, setPlayer] = useState(null);
	const history = useHistory();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				if (data["error"]) {
					history.replace("/404");
				} else {
					setPlayer(data);
				}
			});
	}, [id, history]);

	const displayCards = () => {
		return player.cards.map((card) => (
			<Card key={`${card.id} - ${card.name}`} card={card} />
		));
	};
	return (
		<div className='grid mt-5 mx-5'>
			<div className='row align-items-center'>
				<div className='col '>
					{player && (
						<div className='card mx-auto' style={{ width: "18rem" }}>
							<img
								src={player.avatar_image}
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>{player.name}</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<NavLink to={`${player.id}/edit`} className='btn btn-primary'>
									Edit Profile
								</NavLink>
							</div>
						</div>
					)}
				</div>
				<div className='col row g-0'>{player && displayCards()}</div>
			</div>
		</div>
	);
};

export default PlayerCardsContainer;
