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
                    <button {...stylex.props(styles.button)} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <RocketIcon size={29} />
                    </button>
                    <Navbar activeLink={activeLink} setActiveLink={setActiveLink} isMenuOpen={isMenuOpen} />
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

                </div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/home" element={<MainPage />} />
                    <Route
                        path="/projects"
                        element={
                            <ProjectPage />
                        } />
                    <Route
                        path="/more"
                        element={
                            <MorePage />
                        }
                    />
                    <Route
                        path="/museum"
                        element={

                            <MuseumPage />

                        }
                    />

                </Routes>

            </div>
        </Router>

    );
}

export default App;


// // import UilReact from '@iconscout/react-unicons/icons/uil-react';
// {/*<UilReact size="29" color="#61DAFB" />*/}
