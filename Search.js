import React, {useState, useRef} from 'react';
import './App.css';


function Search() {
	const api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
	const key = '&api-key=DmMzP5k8jOxi8gpUxJ5AOu7IZu2ENpTk';
	const [searchResult, setSearchResult] = useState(null);
	
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
//
	return (
		<div className="SearchWrapper">
			<div className="SearchInput">
				<input type="search" defaultValue="Search for a movie" ref={searchEl} className="SearchField"/>
				<button onClick={() => search()} className="SearchButton">Search</button>
			</div>
			<div className="SearchResults">
				{searchResult && searchResult.map((review, i) => 
				 		<div key={i} className="movieTitles">{review.display_title}</div>
				 	)}
			</div>
		</div>
	);
}

export default Search;