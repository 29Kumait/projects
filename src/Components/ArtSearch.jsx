import { useState } from 'react';
import { DisplaySearchResults } from './DisplaySearchResults';
import * as stylex from "@stylexjs/stylex";
import { additionalStyles, styles } from '../stylex';
const apiKey = "eXVjKRhm";

const fetchArtSearch = async (query) => {
    try {
        const url = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&q=${query}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching art search results:", error);
        return null;
    }
};



export default function ArtSearch() {
    const [query, setQuery] = useState('');
    const [artObjects, setArtObjects] = useState(null); // State to store art objects

    const handleSearch = async () => {
        const data = await fetchArtSearch(query);
        if (data) {
            setArtObjects(data.artObjects); // Update the state with the fetched art objects
        }
    };

    // Function to close the search results
    const handleClose = () => {
        setArtObjects(null); // Clear the art objects to hide the results
    };

    return (
        <div {...stylex.props(additionalStyles.searchInput)}>
            <input {...stylex.props(additionalStyles.se)} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search portraits" />
            <button {...stylex.props(styles.button)} onClick={handleSearch}>Search</button>
            {artObjects && <DisplaySearchResults artObjects={artObjects} onClose={handleClose} />}
        </div>
    );
}