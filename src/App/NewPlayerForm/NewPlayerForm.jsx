import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const NewPlayerForm = () => {
	const initialFormData = {
		name: "",
		avatar_image: "",
	};

	const history = useHistory();

	const [formData, setFormData] = useState(initialFormData);
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
		fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
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
		<div className='container'>
			<form onSubmit={handleSubmit} className='row g-0'>
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
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewPlayerForm;
