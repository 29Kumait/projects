import { useState, useEffect, useRef } from 'react';
import * as stylex from "@stylexjs/stylex";
import { artworkDisplayStyles } from '../stylex'; // Adjust the import path as needed

const apiKey = "eXVjKRhm";
const objectNumber = "RP-T-1969-898";

const fetchArtworkImage = async () => {
    try {
        const url = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}/tiles?key=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("An error occurred:", error);
        return null;
    }
};

export default function ArtworkDisplay({ objectNumber }) {
    const [tilesData, setTilesData] = useState(null);
    const portraitContainerRef = useRef();

    useEffect(() => {
        fetchArtworkImage().then(data => {
            if (data) setTilesData(data.levels[4]);
        });
    }, []);


    useEffect(() => {
        const portraitContainer = portraitContainerRef.current;
        if (portraitContainer) {
            const scale = Math.min(
                window.innerWidth / portraitContainer.offsetWidth,
                window.innerHeight / portraitContainer.offsetHeight
            );
            portraitContainer.style.transform = `scale(${scale})`;
            portraitContainer.style.transformOrigin = 'top left';
        }
    }, [tilesData]);


    if (!tilesData) return <div>Loading...</div>;

    return (
        <div ref={portraitContainerRef} {...stylex.props(artworkDisplayStyles.portraitContainer)}
            style={{ width: `${tilesData.width}px`, height: `${tilesData.height}px` }}>
            {tilesData.tiles.map((tile, index) => (
                <img key={index}
                    src={tile.url}
                    alt="Artwork tile"
                    {...stylex.props(artworkDisplayStyles.tileImage)}
                    style={{ left: `${tile.x * 256}px`, top: `${tile.y * 256}px` }}
                />
            ))}
        </div>
    );
}
