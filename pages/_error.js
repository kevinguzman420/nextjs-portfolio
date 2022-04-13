import Layout from "../components/Layout";

const _error = () => {
    return (
        <Layout footer={false}>
            <p className="text-center">Could not load your page</p>
        </Layout>
    )
}

export default _error;
