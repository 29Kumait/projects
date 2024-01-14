// LinkItem.jsx
import * as stylex from '@stylexjs/stylex';
import { Link } from 'react-router-dom';
import { gridStyle } from '../stylex.jsx';

function LinkItem({ to, children }) {
    return (
        <Link to={to} {...stylex.props(gridStyle.item)}>
            {children}
        </Link>
    );
}

export default LinkItem;