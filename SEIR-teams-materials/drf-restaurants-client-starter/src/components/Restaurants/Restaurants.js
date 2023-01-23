import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import API_URL from '../../apiConfig';

const Restaurants = ({ loggedIn }) => {
	const [restaurants, setRestaurants] = useState([]);

	const getRestaurantsIndex = async () => {
		try {
			const response = await fetch(API_URL + 'restaurants/');
			const data = await response.json();
			console.log(data);
			setRestaurants(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getRestaurantsIndex();
	}, []);

	if (!restaurants.length) {
		return null;
	}

	return (
		<Container>
			<h1>Restaurants</h1>
			{loggedIn && (
				<Link to='/restaurants/new'>
					<Button className='mb-4'>Add a restaurant</Button>
				</Link>
			)}

			<Row xs={1} s={2} md={3}>
				{restaurants.map((restaurant) => {
					return (
						<Col key={restaurant.id} className='mb-4'>
							<Link
								to={`/restaurants/${restaurant.id}`}
								style={{ color: 'black', textDecoration: 'none' }}>
								<Card>
									<Card.Img variant='top' src={restaurant.photo} />
									<Card.Body>
										<Card.Title>{restaurant.name}</Card.Title>
										<Card.Text>
											Number of reviews: {restaurant.reviews.length}
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Restaurants;
