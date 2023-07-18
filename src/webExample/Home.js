import React from 'react'
// import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
	const [item, setitem] = useState([])

	useEffect(() => {
		axios.get("")
			.then(res => {
				console.log(res.data)
				setitem(res.data)
			})
			.catch((error) => console.log(error));
	}, []);


	// const [items, setItems] = useState([])

	// useEffect(() => {
	// 	axios.get("https://restcountries.com/v3.1/all")
	// 		.then(res => setItems(res.data))
	// 		.catch((error) => console.log(error));
	// }, []);

	return (
		<div>

			<div className='HomePage'>
				<div className="container">

					<h1>Search country</h1>
					<div className='search'>
						<form id="form" className="form">
							<button type="submit" className="search-btn">
								<i className="fa fa-search" aria-hidden="true"></i>
							</button>
							<input type="text" id="search" placeholder="Search for any country..." autocomplete="off" autofocus />
							<button type="submit" className='search-btn'>Go</button>
						</form>

					</div>

					<div id="heading" className="heading"></div>

					<div id="countries" className="countries"></div>

				</div>
			</div>

			<div className='Datastore'>
				<div className="container">
					<div className='GridItem'>
						{/* <Card>
						<Card.Body>
							<Card.Title>Name:{item.Name}</Card.Title>
						</Card.Body> */}

						<div className="item item1">
							<div className="vault-items-container">
								<div className="vault-item password-item" tabindex="0">
									<div className="vault-item-thumbnail">
										<i className="fa fa-amazon" aria-hidden="true"></i>
									</div>
									<div className="vault-item-info">
										<h3>Name : </h3>
										<h4>Id :</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item item2">
							<div className="vault-items-container">
								<div className="vault-item password-item" tabindex="0">
									<div className="vault-item-thumbnail">
										<i className="fa fa-amazon" aria-hidden="true"></i>
									</div>
									<div className="vault-item-info">
										<h3>Name : </h3>
										<h4>Id :</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item item3">
							<div className="vault-items-container">
								<div className="vault-item password-item" tabindex="0">
									<div className="vault-item-thumbnail">
										<i className="fa fa-amazon" aria-hidden="true"></i>
									</div>
									<div className="vault-item-info">
										<h3>Name : </h3>
										<h4>Id :</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item item4">
							<div className="vault-items-container">
								<div className="vault-item password-item" tabindex="0">
									<div className="vault-item-thumbnail">
										<i className="fa fa-amazon" aria-hidden="true"></i>
									</div>
									<div className="vault-item-info">
										<h3>Name : </h3>
										<h4>Id :</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item item5">
							<div className="vault-items-container">
								<div className="vault-item password-item" tabindex="0">
									<div className="vault-item-thumbnail">
										<i className="fa fa-amazon" aria-hidden="true"></i>
									</div>
									<div className="vault-item-info">
										<h3>Name : </h3>
										<h4>Id :</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item item6">
							<div className="vault-items-container">
								<div className="vault-item password-item" tabindex="0">
									<div className="vault-item-thumbnail">
										<i className="fa fa-amazon" aria-hidden="true"></i>
									</div>
									<div className="vault-item-info">
										<h3>Name : </h3>
										<h4>Id :</h4>
									</div>
								</div>
							</div>
						</div>
						{/* <Card.Body className="list-group-flush">

							<Card.Item>NativeName: {item.nativeName}</Card.Item>
							<Card.Item>tId : {item.tid}</Card.Item>
							</Card.Body>
					</Card> */}
					</div>
				</div>
				{/* <header>Header</header>
				<div className="sm-box small_box1">Small box 2 </div>
				<div className="sm-box small_box2">Small box 1</div>
				<div className="sm-box small_box3">Small box 3</div>
				<aside>Sidebar</aside>
				<article>Main Content
				</article> */}
				{/* <footer>Footer</footer> */}
				{/* <div>
				<div className='container'>
					<div className="row">
						{item.map((post) => {
							const { id, title, body } = post;
							return (
								<div className="col-6 col-md-4">
									<div className='card' key={id}>
										<h2>{title}</h2>
										<p>{body}</p>
									</div>
								</div>
							)
						})}

					</div>
				</div> */}

				{/* <div className='row'>
						{item.map((post) => {
							const { id, title, body } = post;
							return (
								<div className='col-md-4'>
									<div className='card' key={id}>
										<h2>{title.slice(0, 9)}</h2>
										<p>{body}</p>
									</div>
								</div>
							)
						})}
					</div> */}
			</div>
		</div>


	)
}

export default Home
