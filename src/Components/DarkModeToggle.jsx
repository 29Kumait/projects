import * as stylex from "@stylexjs/stylex";
import { styles, darkModeStyles } from '../stylex.jsx';


const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    return (
        <button {...stylex.props(styles.button, darkModeStyles)}
            onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '♠︎♣︎' : '♡♢'}
        </button>
    );
};

export default DarkModeToggle;