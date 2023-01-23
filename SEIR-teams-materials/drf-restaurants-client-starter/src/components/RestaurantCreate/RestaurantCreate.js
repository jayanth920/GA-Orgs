import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import RestaurantForm from '../RestaurantForm/RestaurantForm';
import API_URL from '../../apiConfig';
const RestaurantCreate = ({ loggedIn }) => {
	const initialRestaurantData = {
		name: '',
		cuisine: '',
		photo: '',
	};
	const navigate = useNavigate();
	const [newRestaurant, setNewRestaurant] = useState(initialRestaurantData);
	const handleChange = (event) => {
		setNewRestaurant((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};
	const handleFileUpload = (event) => {
		setNewRestaurant((prevState) => {
			return { ...prevState, photo: event.target.files[0] };
		});
	};
	const createRestaurant = async (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		try {
			const response = await fetch(API_URL + 'restaurants/', {
				method: 'POST',
				body: data,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 201) {
				navigate('/restaurants');
			}
		} catch (error) {
			console.log(error);
		}
	};

	// If user is not logged in, redirect to the login page
	if (!loggedIn) {
		return <Navigate to='/login' />;
	}

	return (
		<div>
			<h2>Add a restaurant</h2>
			<RestaurantForm
				handleSubmit={createRestaurant}
				handleChange={handleChange}
				handleFileUpload={handleFileUpload}
				formData={newRestaurant}
			/>
		</div>
	);
};

export default RestaurantCreate;
