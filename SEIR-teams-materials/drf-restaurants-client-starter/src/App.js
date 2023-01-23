import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import RestaurantCreate from './components/RestaurantCreate/RestaurantCreate';
import './App.css';
import API_URL from './apiConfig';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const [userInfo, setUserInfo] = useState(null);
	const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token);
		getUserInfo();
		console.log(localStorage.getItem('token'));
		setLoggedIn(true);
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			const data = await response.json();
			console.log(data);
			if (data.detail === 'Invalid token.') {
				setUserInfo(null);
				setLoggedIn(false);
				return;
			} else {
				setUserInfo(data);
				setLoggedIn(true);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		console.log(localStorage.getItem('token'));
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				alert('You have been logged out!');
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (loggedIn) {
			getUserInfo();
		}
	}, []);

	return (
		<>
			<Navigation
				loggedIn={loggedIn}
				handleLogout={handleLogout}
				userInfo={userInfo}
			/>
			<main>
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/login'
							element={<Login handleSetLoggedIn={handleSetLoggedIn} />}
						/>
						<Route path='/signup' element={<Signup />} />
						<Route
							path='/restaurants/new'
							element={<RestaurantCreate loggedIn={loggedIn} />}
						/>
						<Route
							path='/restaurants'
							element={<Restaurants loggedIn={loggedIn} />}
						/>
						<Route
							path='/restaurants/:id'
							element={
								<RestaurantDetail userInfo={userInfo} loggedIn={loggedIn} />
							}
						/>
					</Routes>
				</Container>
			</main>
		</>
	);
}

export default App;
