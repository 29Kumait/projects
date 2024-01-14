import { motion } from 'framer-motion';
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    container: {
        padding: 20,
        backgroundColor: '#171f2b',
        borderRadius: 8,

    },
});

const AnimatedContainer = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: { opacity: 1, x: 0 },
        transition: { duration: 2 }
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
