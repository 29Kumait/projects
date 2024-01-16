import { useState } from 'react';
import * as stylex from "@stylexjs/stylex";
import { RocketIcon } from '@primer/octicons-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage.jsx';
import Navbar from './Components/Navbar.jsx';
import ProjectPage from './Pages/ProjectPage.jsx';
import MorePage from './Pages/MorePage.jsx';
import DarkModeToggle from './Components/DarkModeToggle';
import { styles, nav, darkModeStyles } from './stylex.jsx';
import MuseumPage from './Pages/MuseumPage.jsx';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const currentRootStyle = darkMode ? { ...styles.root, ...darkModeStyles.darkRoot } : styles.root;

    return (
        <Router basename="/">
            <div {...stylex.props(currentRootStyle)}>
                <div {...stylex.props(nav.navbar)}>
                    <button data-testid="menu-button" {...stylex.props(styles.button)} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <RocketIcon size={29} />
                    </button>
                    <Navbar data-testid="navbar" activeLink={activeLink} setActiveLink={setActiveLink} isMenuOpen={isMenuOpen} />
                    <DarkModeToggle data-testid="dark-mode-toggle" darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
                <Routes>
                    <Route path="/" element={<div data-testid="main-page"><MainPage /></div>} />
                    <Route path="/home" element={<div data-testid="main-page"><MainPage /></div>} />
                    <Route path="/projects" element={<div data-testid="project-page"><ProjectPage /></div>} />
                    <Route path="/more" element={<div data-testid="more-page"><MorePage /></div>} />
                    <Route path="/museum" element={<div data-testid="museum-page"><MuseumPage /></div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
