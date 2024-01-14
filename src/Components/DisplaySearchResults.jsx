import * as stylex from "@stylexjs/stylex";
import { searchResultStyles } from '../stylex.jsx';

export const DisplaySearchResults = ({ artObjects, onClose }) => {
    if (artObjects.length === 0 || !artObjects[0].webImage) {
        return <div>No image found</div>;
    }

    const artPieceUrl = artObjects[0].webImage.url;

    return (
        <div {...stylex.props(searchResultStyles.artPieceDisplay)} onClick={onClose}>
            <img src={artPieceUrl} alt="Art" {...stylex.props(searchResultStyles.artPieceImg)} loading="lazy" />
        </div>
    );
};


