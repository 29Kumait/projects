import { useState, useRef } from 'react';
import * as stylex from "@stylexjs/stylex";
import { styles } from '../stylex.jsx';
import useOutsideClick from '../hooks/useOutsideClick';
import ColoredText from './ColoredText';
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
    }
})
const Side = () => {
    const [showSide, setShowSide] = useState(false);
    const sideRef = useRef(null);

    const closeSidebar = () => setShowSide(false);
    useOutsideClick(sideRef, closeSidebar);

    return (
        <>
            <button  {...stylex.props(styles.button)} onClick={() => setShowSide(true)}>README</button>
            {showSide && (
                <div ref={sideRef} {...stylex.props(stylesSide.sidebar)}>
                    <h2>README.md</h2>
                </div>
            )}
        </>
    );
};

export default Side;



