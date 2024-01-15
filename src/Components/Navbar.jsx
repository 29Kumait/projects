// Navbar.jsx
import { Link } from 'react-router-dom';
import * as stylex from "@stylexjs/stylex";
import { nav } from '../stylex';

const Navbar = ({ activeLink, setActiveLink, isMenuOpen }) => {
    const navItems = ["home", "projects", "more"].map((item) => (
        <Link
            key={item}
            to={`/${item}`}
            {...stylex.props(nav.navItem, activeLink === item && nav.activeNavItem)}
            onClick={() => setActiveLink(item)}
        >
            {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
    ));

    return (
        <div style={{ display: isMenuOpen ? 'block' : 'none' }}>
            {navItems}
        </div>
    );
};

export default Navbar;