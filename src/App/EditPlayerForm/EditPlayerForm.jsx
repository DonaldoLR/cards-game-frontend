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
	useEffect(() => {
		fetch(`http://localhost:3000/users/${id}`)
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
		fetch(`http://localhost:3000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				history.push("/");
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (e) => {
		e.stopPropagation();

		fetch(`http://localhost:3000/users/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
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
