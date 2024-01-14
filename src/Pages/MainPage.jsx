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
                <Link to="/museum">Go to Museum </Link>
            </div>
            <h1 {...stylex.props(styles.heading)}> {'< HYF '} </h1>
            <h2 {...stylex.props(styles.heading)}>{'  className={45} />'}</h2>

            <div>
                <ChartComponent />
            </div>

            <Grid items={[
                { isLink: true, to: 'https://29kumait.github.io/codespaces/', label: 'Assignment' },
                'Item 1', 'Item 2', 'Item 3']} />

            <div>
                <AnimatedContainer />
            </div>
        </>
    );
}

export default MainPage;