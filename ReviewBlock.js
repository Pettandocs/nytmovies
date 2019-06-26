import React, {useState, useEffect} from 'react';
import './App.css';

function LatestReviewBlock() {
	const api = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?&order=by-date';
	const key = '&api-key=DmMzP5k8jOxi8gpUxJ5AOu7IZu2ENpTk';
	const [json, setJson] = useState(null);
	const [movieDetailsOpen, setMovieDetailsOpen] = useState(null);

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
		 	<div className="LatestPublishDate">Latest review published: {json && json[0].publication_date}</div>
		 	{json && json.slice(0,10).map((review, i) => 
		 		<div key={i} className="LatestDetailsWrapper">
			 		<div onClick={() => setMovieDetailsOpen(i)} key={i} className="MovieTitles" style={movieDetailsOpen === i ? {"fontWeight": "bold"}:{"fontWeight": ""}}>
			 			{review.display_title}
			 		</div>
			 		<div style={movieDetailsOpen === i ? {display: "block"}:{display: "none"}} className="LatestMovieInfo">
				 		<div className="Headline">{review.headline}</div>
				 		<a href={review.link.url}>{review.link.suggested_link_text}</a>
				 		<div className="Info">Published: {review.publication_date}</div>
					 </div>
				</div>
		 	)}
		</div>

	);
}

export default LatestReviewBlock;