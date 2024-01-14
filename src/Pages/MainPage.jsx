import * as stylex from "@stylexjs/stylex";
import inputLogo from '/input.svg';
import ImageSwitcher from '../Components/ImageSwitcher.jsx';
import Grid from '../Components/Grid.jsx'
import ChartComponent from '../Components/ChartComponent.jsx'
import AnimatedContainer from '../Components/Box.jsx'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../stylex.jsx';

function MainPage() {
    const [isAnimated] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    return (
        <>
            <AnimatedContainer />
            <div>

                <a href="https://www.hackyourfuture.net" target="_blank" rel="noreferrer">
                    <img src={inputLogo} {...stylex.props(styles.logo)} alt="logo" />
                </a>
                <button {...stylex.props(styles.button)} onClick={changeImage}>
                    JellyFish
                </button>
                <ImageSwitcher
                    currentImageIndex={currentImageIndex}
                    stylexProps={stylex.props(styles.logo, styles.logoFly, isAnimated && styles.combinedAnimation)}
                />
            </div>

            <h1 {...stylex.props(styles.heading)}> {'< HYF/>'} </h1>
            <AnimatedContainer />


            <div>
                <ChartComponent />
            </div>
            <AnimatedContainer />
            <Grid items={['Item 1', 'Item 2', 'Item 3', {
                isLink: true,
                to: 'https://29kumait.github.io/codespaces/',
                label: 'Assignment',
                children: <Link to="/museum" {...stylex.props(styles.link)}>Go to Museum </Link>
            },
            ]} />

            <div>
                <AnimatedContainer />
            </div>
        </>
    );
}

export default MainPage;