import React, {useState, useEffect} from 'react';
import './App.css';

function ReviewBlock() {
	const api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=';
	const key = 'DmMzP5k8jOxi8gpUxJ5AOu7IZu2ENpTk';
	const [json, setJson] = useState(null);

	async function getJson() {
		const data = fetch(api+key).then(response => response.json())
     	.then(result => {return result});

     	const jsonData = await data;
     	return jsonData.results;
	}
	
	 useEffect(() => {
    	getJson().then(result => setJson(result));
    }, []);

	 console.log(json);
	return (
		<div className="ReviewBlock">
		 	<h3 >Latest reviews</h3>
		 	{json && json.map((review, i) => 
		 		<div key={i} className="movieTitles">{review.display_title}</div>
		 	)}
		</div>

	);
}

export default ReviewBlock;
