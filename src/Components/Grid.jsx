import {useContext} from "react";
import * as stylex from '@stylexjs/stylex';
import {Link} from 'react-router-dom';
import {gridStyle, styles} from '../stylex.jsx';
import FallbackComponent from './FallbackComponent';
import AnimatedContainer from './Box.jsx'
import {StarIcon, StarFillIcon} from '@primer/octicons-react';
import {TheContext} from './Context.jsx';

export const GridImage = ({src, alt}) => (
    <img src={src} alt={alt} style={{maxWidth: '100%'}}/>
);

export const GridText = ({children}) => (
    <AnimatedContainer>
        <p>{children}</p>
    </AnimatedContainer>
);

export const GridLabel = ({children}) => (
    <div>
        {children}
    </div>
);

function Grid({items, showIcons = false, onItemClick}) {
    const {Contexts} = useContext(TheContext);

    return (
        <div {...stylex.props(gridStyle.container)}>
            {items.length === 0 ? <FallbackComponent/> : items.map((item, index) => {
                const isSelected = Contexts.includes(item.label);
                const icon = isSelected ? <StarFillIcon/> : <StarIcon/>;

                // Only display icon if showIcons is true
                const displayIcon = showIcons ? icon : null;

                const handleClick = () => {
                    if (typeof onItemClick === 'function') {
                        onItemClick(item.label);
                    }
                };

                if (item.label === '') {
                    return <div key={index}/>;
                } else if (item.isLink) {
                    return (
                        <div key={index} {...stylex.props(gridStyle.item)} onClick={handleClick}>
                            {displayIcon}
                            <Link to={item.to} {...stylex.props(styles.link)}>
                                {item.label}
                            </Link>
                            <br/>
                            {item.children}
                        </div>
                    );
                } else {
                    return (
                        <button key={index} {...stylex.props(gridStyle.item)} onClick={handleClick}>
                            {displayIcon}
                            {item.label}
                        </button>
                    );
                }
            })}
        </div>
    );
}


Grid.defaultProps = {
    items: [],
};


// Export as sub-components
Grid.Image = GridImage;
Grid.Text = GridText;
Grid.Label = GridLabel;
export default Grid;
