import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
const CardsContainer = () => {
	const [cards, setCards] = useState(null);
	useEffect(() => {
		fetch("http://localhost:3000/cards")
			.then((res) => res.json())
			.then(setCards);
	}, []);
	const displayCards = () => {
		return cards.map((card) => (
			<Card key={`${card.id} - ${card.name}`} card={card} />
		));
	};
	return (
		<div className='container'>
			<div className='row g-0 mt-5 mx-5'>{cards && displayCards()}</div>
		</div>
	);
};

export default CardsContainer;
