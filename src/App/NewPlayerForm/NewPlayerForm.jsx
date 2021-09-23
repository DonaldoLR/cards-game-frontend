import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const NewPlayerForm = () => {
	const initialFormData = {
		name: "",
		avatar_image: "",
	};

	const history = useHistory();

	const [formData, setFormData] = useState(initialFormData);
	const [serverErrors, setServerErrors] = useState([]);

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
				if (data.errors) {
					setServerErrors(data.errors);
				} else {
					setFormData(initialFormData);
					history.push("/");
				}
			});
	};
	const displayErrors = () => {
		return serverErrors.map((error, idx) => (
			<div key={`${idx} - ${error}`} className='alert alert-danger'>
				{error}
			</div>
		));
	};
	return (
		<div className='container mt-5'>
			<form onSubmit={handleSubmit} className='row g-0'>
				{displayErrors()}
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
