import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    blue: {
        color: '#2997ff',
    },
    red: {
        color: '#ff5733',
    },
    yellow: {
        color: 'rgb(255,224,69)',
    },
    green: {
        color: 'rgb(0,217,89)',
    },
    blueSky: {
        color: 'rgb(0,102,204)',
    },
    colored: {
        color: '#969faf',
    },
    brandLight: {
        color: 'rgb(0, 245, 255)',
    },
    brandDark: {
        color: 'rgb(0, 191, 255)',
    },
    brandDarker: {
        color: 'rgb(0, 155, 255)',
    },
    foregroundHighlight: {
        color: 'rgb(102, 253, 255)',
    },
    foregroundHighlightHigh: {
        color: 'rgb(0, 255, 179)',
    },
    customBlockInfoText: {
        color: 'rgb(217, 224, 255)',
    },
    customBlockDangerText: {
        color: 'rgb(255, 85, 119)',
    },

});

// const text = ``;
const ColoredText = ({ text = "" }) => {
    const words = text.split(' ');

    const colorStyles = [
        styles.blue,
        styles.red,
        styles.yellow,
        styles.green,
        styles.blueSky,
        styles.colored,
        styles.brandLight,
        styles.brandDark,
        styles.brandDarker,
        styles.foregroundHighlight,
        styles.foregroundHighlightHigh,
        styles.customBlockInfoText,
        styles.customBlockDangerText
    ];
    return (
        <p>
            {words.map((word, index) => (
                <span key={index} {...stylex.props(colorStyles[index % colorStyles.length])}>
                    {word + (index < words.length - 1 ? ' ' : '')}
                </span>
            ))}
        </p>
    );
};

export default ColoredText;