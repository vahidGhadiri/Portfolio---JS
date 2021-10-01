import {motion} from "framer-motion";
import MainLayout from "../Layout/Main.layout";

const ComponentWithAnimation = (Component) => {
    return function HOC() {
        return (
            <>
                <motion.div initial={{y: 1000}} animate={{y: 0, transition: {duration: 1, type: "spring"}}}
                            exit={{y: -1000, transition: {duration: 1, type: "spring", ease: "easeInOut"}}}>
                    <MainLayout>
                        <Component/>
                    </MainLayout>
                </motion.div>
            </>

        )
    }
}

export default ComponentWithAnimation