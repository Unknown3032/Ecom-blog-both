export function FadeInWhenVisible({ children, initial = 'hidden', whileInView = "visible", viewport = { once: true }, transition = { duration: 0.3 }, exit = "hidden", variants = {
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