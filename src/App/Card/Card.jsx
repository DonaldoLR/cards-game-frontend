import React from "react";

const Card = ({
	card: { id, name, design_image, build_cost, description },
}) => {
	return (
		<div
			className='card border-dark mb-3 col-sm-12 col-md-6 mx-auto'
			style={{ width: "18rem" }}
		>
			<img
				src={design_image}
				className='card-img-top'
				alt={`${name} - Card Design`}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{description}</p>
				<p>Build Cost: {build_cost}</p>
			</div>
			<div className='card-footer'>
				<small className='text-muted'>Build Cost: {build_cost}</small>
			</div>
		</div>
	);
};

export default Card;
