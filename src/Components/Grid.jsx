import * as stylex from '@stylexjs/stylex';
import { Link } from 'react-router-dom';
import { gridStyle, styles } from '../stylex.jsx';
import FallbackComponent from './FallbackComponent';
import AnimatedContainer from './Box.jsx'


export const GridImage = ({ src, alt }) => (
    <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
);

export const GridText = ({ children }) => (
    <AnimatedContainer>
        <p>{children}</p>
    </AnimatedContainer>
);

export const GridLabel = ({ children }) => (
    <div>
        {children}
    </div>
);
function Grid({ items }) {
    return (
        <div {...stylex.props(gridStyle.container)}>
            {items.length === 0 ? <FallbackComponent /> : items.map((item, index) => {
                if (item.label === '') {
                    return <div key={index} />;
                } else if (item.isLink) {
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




// Export as sub-components
Grid.Image = GridImage;
Grid.Text = GridText;
Grid.Label = GridLabel;
export default Grid;
