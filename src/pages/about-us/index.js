import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function AboutUs() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagLine}>
            <p>This is the about us page</p>
        </Layout>
    );
}
