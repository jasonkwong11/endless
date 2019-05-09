import React from 'react';
import photo from './photo-couch.jpg';

const Main = () => <div className="container row" style = {{height:"100vh", color: "white"}}>
	<div className="main col-12">
		<div className="row">
			New Games and Accessories
		</div>
		<div className="row col-4">
			<h1>Monthly packages. Excitement delivered daily.</h1>
		</div>
		<div className="row col-3">
			<p>What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.</p>
		</div>
		<div className="row col-4">
			<button className="start"><strong>GET STARTED</strong></button>
		</div>
	</div>
</div>

export default Main