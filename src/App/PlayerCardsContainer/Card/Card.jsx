import React from "react";

const Card = ({
	cardInfo: { name, design_image, build_cost, description },
}) => {
	return (
		<div className='card' style={{ width: "18rem" }}>
			<img src={design_image} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{description}</p>
			</div>
		</div>
	);
};

export default Card;
