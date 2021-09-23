import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
const EditPlayerForm = () => {
	const initialFormData = {
		name: "Loading...",
		avatar_image: "Loading...",
	};

	const history = useHistory();
	const { id } = useParams();

	const [formData, setFormData] = useState(initialFormData);
	const [serverErrors, setServerErrors] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`)
			.then((res) => res.json())
			.then(setFormData)
			.catch((err) => console.log(err));
	}, [id]);

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
		fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`, {
			method: "PATCH",
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
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();

		fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then(() => {
				history.push("/");
			})
			.catch((err) => console.log(err));
	};
	const displayErrors = () => {
		return serverErrors.map((error, idx) => (
			<div key={`${idx} - ${error}`} className='alert alert-danger'>
				{error}
			</div>
		));
	};
	return (
		<div className='container'>
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
				<button type='submit' className='btn btn-primary col-2 me-3'>
					Save Changes
				</button>
				<button className='btn btn-danger col-2' onClick={handleDelete}>
					Delete Player
				</button>
			</form>
		</div>
	);
};

export default EditPlayerForm;
