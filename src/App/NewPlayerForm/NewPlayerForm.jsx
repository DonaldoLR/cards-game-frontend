import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const NewPlayerForm = () => {
	const initialFormData = {
		name: "",
		avatar_image: "",
	};

	const history = useHistory();

	const [formData, setFormData] = useState(initialFormData);
	// useEffect(() => {
	// 	fetch("http://localhost:3000/cards")
	// 		.then((res) => res.json())
	// 		.then(setAvailableCards)
	// 		.catch((err) => console.log(err));
	// }, []);
	const handleChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;

		setFormData({
			...formData,
			[key]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				setFormData(initialFormData);
				history.push("/");
			})
			.catch((err) => console.log(err));
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Player Name:
				</label>
				<input
					type='text'
					className='form-control'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='avatar_image' className='form-label'>
					Avatar Image:
				</label>
				<input
					type='text'
					className='form-control'
					id='avatar_image'
					name='avatar_image'
					value={formData.avatar_image}
					onChange={handleChange}
				/>
			</div>
			{/* {availableCards && displayAvailableCards()} */}
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};

export default NewPlayerForm;
