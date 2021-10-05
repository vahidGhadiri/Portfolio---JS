import {motion} from "framer-motion";
import Layout from "../Layout/Layout.component";

const ComponentWithAnimation = (Component) => {
    return function HOC() {
        return (
            <>
                {/*<motion.div initial={{y: 1000}} animate={{y: 0, transition: {duration: 1, type: "spring"}}}*/}
                {/*            exit={{y: -1000, transition: {duration: 1, type: "spring", ease: "easeInOut"}}}>*/}
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .8}}}
                            exit={{opacity: 0, transition: {duration: .8}}}>
                    <Layout>
                        <Component/>
                    </Layout>
                </motion.div>
            </>

        )
    }
}

export default ComponentWithAnimation