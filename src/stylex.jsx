import * as stylex from "@stylexjs/stylex";

// import {ExpandableSection, InfiniteScrollComponent, MyPage} from "./Components/Page.jsx";
// Keyframes for logo-spin
const logoSpin = stylex.keyframes({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
});
const fadeIn = stylex.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});

// Styles
export const styles = stylex.create({
    root: {
        margin: '0 auto',
        padding: '0',
        width: '100%',
        maxWidth: '100vw',
        textAlign: 'center',
        fontFamily: ' "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;',
        lineHeight: 1.5,
        fontWeight: 400,
        color: '#33445788',
        backgroundColor: '#3E3E3E57',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    },

    logo: {
        height: '19em',
        padding: '1.5em',
        willChange: 'filter',
        transition: 'filter 300ms',
        ':hover': {
            filter: 'drop-shadow(0 0 2em #646cffaa)',
        },
    },
    logoAnimation: {
        animation: `${logoSpin} infinite 20s linear`,
    },

    combinedAnimation: {
        animationName: `${logoSpin}, ${fadeIn}`,
        animationDuration: '29s, 2s',  // Corresponding to spin and fadeIn durations
        animationIterationCount: 'infinite, infinite', // Spin is infinite, fadeIn  infinite
        animationTimingFunction: 'linear, ease-out', // Timing functions for each animation
    },
    logoFly: {
        height: '13em',
        padding: '1.5em',
        ':hover': {
            filter: 'drop-shadow(0 0 2em #61dafbaa)',
        },
    },
    link: {
        fontWeight: 500,
        color: '#33445788',
        textDecoration: 'inherit',
        ':hover': {
            color: 'rbg(106,115,123)',
        },
    },
    heading: {
        fontSize: '3.2em',
        lineHeight: 1.1,
    },
    button: {
        borderRadius: 8,
        border: '1px solid #eee',
        padding: '10px 20px',
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: '#bdbdbd',
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        outline: 'none',
        color: '#4a86c7',
        ':hover': {
            borderColor: '#4b51b7',
            transform: 'scale(1.1)',
        },
        ':active': {
            transform: 'scale(0.9)',
        },
        ':focus, :focus-visible': {
            outline: '4px auto -webkit-focus-ring-color',
        },
        // Media query for prefers-color-scheme: light
        '@media (prefers-color-scheme: light)': {
            backgroundColor: '#FFFFFF33',
        },
    },


});


const commonStyles = {
    padding: '1rem',
    color: 'rgba(255, 255, 255, .8)',
};

export const nav = stylex.create({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        backgroundColor: '#33445788',
        ...commonStyles,
        '@media (max-width: 600px)': {
            flexDirection: 'column',
        },
    },

    navItem: {
        position: 'relative', // For the underline effect
        margin: '0 1rem',
        textDecoration: 'none',
        transition: 'color 0.3s',
        ...commonStyles,
        ':hover': {
            color: '#3E3E3E57',
        },
        ':hover::after': { // Animated underline effect
            width: '100%',
        },
        '::after': { // Underline effect base style
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 0,
            height: '2px',
            backgroundColor: '#4B97B7CF',
            transition: 'width 0.3s',
        },
    },
    activeNavItem: {
        fontWeight: 'bold',
        '::after': { // Ensure the underline is visible for active item
            width: '100%',
        },
    },
});



// Dark Mode Styles - should ONLY contain color changes
export const darkModeStyles = stylex.create({
    darkRoot: {
        color: '#FFFFFFCF',
        backgroundColor: '#050F1AE8',
        // Do NOT: include any layout-related styles here
    },
});



const breakpoint = "768px";
export const gridStyle = stylex.create({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        // Use the breakpoint variable to change the grid layout
        [`@media (max-width: ${breakpoint})`]: {
            gridTemplateColumns: "repeat(1, 1fr)",
        },

    },
    item: {
        height: 300,
        backgroundColor: '#54C3EF9E',
    },

});


export const chartStyles = stylex.create({
    chartContainer: {
        width: 'auto',
        height: 'auto',
        margin: '20px auto',
        padding: '10px',
        backgroundColor: '#33445788',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
});


export const searchResultStyles = stylex.create({
    artPieceDisplay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
    },
    artPieceImg: {
        maxWidth: "90%",
        maxHeight: "90%",
    },

});




export const additionalStyles = stylex.create({
    museumContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: 'cover',
        maxHeight: '100vh',
        maxWidth: '100%',
    },
    searchInput: {
        zIndex: 1000,
        position: "relative",
    },
    tickerContainer: {
        width: "80%",
        maxWidth: "100wv",
        overflow: "hidden",
    },

});


export const artworkDisplayStyles = stylex.create({
    portraitContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100vw',
        maxHeight: '80vh',
        overflow: 'hidden',
        position: 'relative',
        transform: 'scale(0.3)',
        transformOrigin: 'bottom right',
    },

    tileImage: {
        position: 'absolute',
        width: '256px',
        height: '256px',
    },
});



