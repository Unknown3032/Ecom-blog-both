import { motion } from "framer-motion";


export function FadeInWhenVisible({ children, initial = { opacity: 0.5, scale: 0.7 }, whileInView = "visible", viewport = { once: false, }, transition = { duration: 0.3 }, exit = "hidden", variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
} }) {
    return (
        <motion.div
            initial={initial}
            // animate="visible"
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            variants={variants}
            exit={exit}
        >
            {children}
        </motion.div>
    );
}