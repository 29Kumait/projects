import * as stylex from '@stylexjs/stylex';
import { Link } from 'react-router-dom';
import { gridStyle, styles } from '../stylex.jsx';
import FallbackComponent from './FallbackComponent';


function Grid({ items }) {
    return (
        <div {...stylex.props(gridStyle.container)}>
            {items.length === 0 ? <FallbackComponent /> : items.map((item, index) => {
                if (item.isLink) {
                    return (
                        <div key={index} {...stylex.props(gridStyle.item)}>
                            <Link to={item.to} {...stylex.props(styles.link)}>
                                {item.label}
                            </Link>
                            <br />
                            {item.children}
                        </div>
                    );
                } else {
                    return (
                        <button key={index} {...stylex.props(gridStyle.item)} disabled>
                            {item.label}
                        </button>
                    );
                }
            })}
        </div>
    )
}

Grid.defaultProps = {
    items: [],
};

export default Grid;

/*
import * as stylex from '@stylexjs/stylex';
import { gridStyle } from '../stylex.jsx';

function Grid({ items }) {
    return (
        <div {...stylex.props(gridStyle.container)}>
            {items.map((item, index) => (
                <button key={index} {...stylex.props(gridStyle.item)} disabled>
                    {item}
                </button>
            ))}
        </div>
    )
}

Grid.defaultProps = {
    items: [], // default to an empty array
};

export default Grid;
*/














//
// import  { useState } from 'react';
//
// export function AddGridIteam() {
//     const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
//
//     const addItem = () => {
//         setItems([...items, `Item ${items.length + 1}`]);
//     };
//
//     return (
//         <div className={stylex(gridStyles.container)}>
//             {items.map((item, index) => (
//                 <button key={index} className={stylex(gridStyles.item)}>
//                     {item}
//                 </button>
//             ))}
//             <button onClick={addItem}>Add item</button>
//         </div>
//     );
// }