import { motion } from 'framer-motion';
import * as stylex from "@stylexjs/stylex";

// Define styles at the root level
const styles = stylex.create({
    container: {
        padding: 20,
        backgroundColor: '#171f2b',
        borderRadius: 8,
        // other styles...
    },
});

const AnimatedContainer = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={stylex(styles.container)}
        >
        </motion.div>
    );
};

export default AnimatedContainer;
