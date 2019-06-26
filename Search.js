import React, {useState, useRef} from 'react';
import './App.css';


function Search() {
	const api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
	const key = '&api-key=DmMzP5k8jOxi8gpUxJ5AOu7IZu2ENpTk';
	const [searchResult, setSearchResult] = useState(null);
	const [movieDetailsOpen, setMovieDetailsOpen] = useState(null);
	
	const searchEl = useRef(null);

	async function searchJson(searchPhrase: string) {

		const data = fetch(api+searchPhrase+key).then(response => response.json())
     	.then(result => {return result});

     	const jsonData = await data;
     	return jsonData.results;
	}
	const search = () => {
		const searchPhrase = searchEl.current.value;
		searchJson(searchPhrase).then(result => setSearchResult(result));
	}

	return (
		<div className="SearchWrapper">
			<div className="SearchInput">
				<input type="search" defaultValue="Search for a movie" ref={searchEl} className="SearchField"/>
				<button onClick={() => search()} className="SearchButton">Search</button>
			</div>
			<div className="SearchResults">
				{searchResult && searchResult.map((review, i) => 
					<div key={i} className="MovieDetailsWrapper">
				 		<div  onClick={() => setMovieDetailsOpen(i)} className="SearchedMovieTitles" style={movieDetailsOpen === i ? {"fontWeight": "bold"}:{"fontWeight": ""}}>
				 		{review.display_title}
				 		</div>
				 		<div style={movieDetailsOpen === i ? {display: "block"}:{display: "none"}} className="MovieInfo">
					 		<div className="Headline">{review.headline}</div>
					 		<div className="Info">{review.summary_short}</div>
					 		<a href={review.link.url}>{review.link.suggested_link_text}</a>
					 		<div className="Info">Published: {review.publication_date}</div>
				 		</div>
				 	</div>
				 	)}
			</div>
		</div>
	);
}

export default Search;