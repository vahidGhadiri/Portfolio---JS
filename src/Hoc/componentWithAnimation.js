import Layout from "../Layout/Layout.component";

const ComponentWithLayOut = (Component) => {
    return function HOC() {
        return (
            <>
                <Layout>
                    <Component/>
                </Layout>
            </>

        )
    }
}

export default ComponentWithLayOut