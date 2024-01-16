import * as stylex from "@stylexjs/stylex";
import inputLogo from '/input.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageSwitcher from '../Components/ImageSwitcher.jsx';
import Grid from '../Components/Grid.jsx'
import ChartComponent from '../Components/ChartComponent.jsx'
import AnimatedContainer from '../Components/Box.jsx'
import Side from '../Components/Side.jsx';
import { styles } from '../stylex.jsx';
import ColoredText from '../Components/ColoredText.jsx';



function MainPage() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const [isAnimated] = useState(true);

    const gridItems = [
        [{ label: '1' }, { label: '2' }],
        [{ label: '3' }, { label: 'Item 4' }, { isLink: true, children: <AnimatedContainer><Link to="/museum" {...stylex.props(styles.link,)}> Rijksmuseum </Link></AnimatedContainer> }],
        [{ label: 'Item 6' }, { label: ' 7' }, { label: ' 8' }, { label: 'Last 9' }],
        [{ isLink: true, to: '/about', label: 'About' }, { label: 'Item End' }],
    ];

    return (
        <>

            <div>

                <a href="https://www.hackyourfuture.net" target="_blank" rel="noreferrer">
                    <img src={inputLogo} {...stylex.props(styles.logo)} alt="logo" />
                </a>
                <Side />
                <button {...stylex.props(styles.button)} onClick={changeImage}>
                    JellyFish
                </button>

                <ImageSwitcher
                    currentImageIndex={currentImageIndex}
                    stylexProps={stylex.props(styles.logo, styles.logoFly, isAnimated && styles.combinedAnimation)}
                />

            </div>
            <h1 {...stylex.props(styles.heading)}> {'<HYF />'} </h1>
            <ChartComponent />
            {gridItems.map((items, index) => (
                <Grid key={index} items={items} />
            ))}
            <ColoredText text="react week 4 individual project" />

            <AnimatedContainer />
        </>
    );
}

export default MainPage;