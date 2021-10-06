import Layout from "../Layout/Layout.component";
import {motion} from "framer-motion"

const ComponentWithLayOut = (Component) => {
    return function HOC() {
        return (
            <>
                <Layout>
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {duration: .5, delay: .3, ease: "easeInOut"}}}>
                        <Component/>
                    </motion.div>
                </Layout>
            </>

        )
    }
}

export default ComponentWithLayOut