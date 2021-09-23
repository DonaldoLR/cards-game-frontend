import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Navigation = () => {
	const location = useLocation();
	// const buttonText = location.pathname === "/players" && "Add Players";

	return (
		<nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<NavLink className='navbar-brand' to='/'>
					Machi-Koro
				</NavLink>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/'>
								Players
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/cards'>
								Cards
							</NavLink>
						</li>
					</ul>
				</div>
				{location.pathname === "/" && (
					<NavLink
						type='button'
						className='d-flex btn btn-outline-light'
						to='/newPlayer'
					>
						Add Players
					</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
