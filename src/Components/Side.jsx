import { useState, useRef } from 'react';
import * as stylex from "@stylexjs/stylex";
import { styles } from '../stylex.jsx';
import useOutsideClick from '../hooks/useOutsideClick';
import ColoredText from './ColoredText';
import IframeComponent from "./IframeComponent.jsx";


const stylesSide = stylex.create({
    sidebar: {
        position: 'fixed',
        top: 0,
        left: 0,
        color: ' #a972ff',
        width: '57%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.88)',
        transition: 'left 0.3s ease-in-out',
        zIndex: 2000,
    },

    h1: {
        textAlign: 'center',
        alignItems: 'center',
        // marginTop: '40%',
        // marginBottom: '30%',
    },

})


const Side = () => {
    const [showSide, setShowSide] = useState(false);
    const sideRef = useRef(null);

    const closeSidebar = () => setShowSide(false);
    useOutsideClick(sideRef, closeSidebar);

    return (
        <>
            <button  {...stylex.props(styles.button)} onClick={() => setShowSide(true)}>Leftward</button>
            {showSide && (

                <div ref={sideRef} {...stylex.props(stylesSide.sidebar)}>
                    <IframeComponent url="https://29kumait.github.io/codespaces/"/>
                    <h1 {...stylex.props(stylesSide.h1)}>CLICK</h1>
                    <ColoredText text={'Outside Of The Box to close'}/>
                </div>
            )}
        </>
    );
};

export default Side;



