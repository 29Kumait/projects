import * as stylex from "@stylexjs/stylex";
import { additionalStyles } from '../stylex.jsx';
import ArtworkDisplay from '../Components/ArtworkDisplay.jsx';
import ArtSearch from '../Components/ArtSearch.jsx';
import Ticker from '../Components/Ticker.jsx';


export default function MuseumPage() {
    return (
        <div {...stylex.props(additionalStyles.museumContainer)}>
            <h1>Museum</h1>
            <ArtSearch />
            <ArtworkDisplay />
            <Ticker />
        </div>

    );
}
