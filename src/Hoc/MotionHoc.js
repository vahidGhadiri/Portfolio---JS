import {motion} from "framer-motion";

const MotionHoc = (Component) => {
    return function HOC() {
        return (
            <motion.div
                initial={{y: 500}}
                animate={{y: 0, transition: {duration: 1, type: "spring"}}}
                exit={{y: -500, transition: {duration: 1, type: "spring", ease: "easeInOut"}}}
            >
                <Component/>
            </motion.div>
        )
    }
}

export default MotionHoc