import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutUs from '@site/src/components/AboutUs';
import Hero from "@site/src/components/Hero";
import Highlights from "@site/src/components/Highlights";
import ContactForm from "@site/src/components/ContactUs";
import Pricing from "@site/src/components/Pricing";

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Explore
                    </Link>
                </div>
            </div>
        </header>
    );
}

function HomeOld() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagLine}>
            <Hero/>
            <main>
                <Highlights
                    highlights={[
                        {
                            title: 'OHIP Card Lookup',
                            text: (
                                <p>
                                    Quickly validate OHIP cards and automatically populate patient information in new
                                    claims.
                                </p>
                            ),
                            link: (
                                <div className={styles.indexGithubLinks}>
                                    <Link
                                        to="/docs/features/hcv"
                                        title="Health Card Validation Documentation"
                                    >
                                        Learn more >
                                    </Link>
                                </div>
                            ),
                            img: (
                                <img className={styles.squareImage} src={'img/leaseLogicArt.webp'}/>
                            ),
                        },
                        {
                            title: 'Organized List of Billing Codes',
                            text: (
                                <p>
                                    Easily select billing codes from your specialty with our curated menus.
                                </p>
                            ),
                            link: (
                                <Link
                                    to="/docs/features/quick-copy"
                                    title="Curated Billing Coedes"
                                >
                                    Lean more >
                                </Link>
                            ),
                            img: (
                                <img className={styles.squareImage} src={'img/leaseLogicArt.webp'}/>
                            ),
                        },
                        {
                            title: 'Recommended Premium Codes',
                            text: (
                                <p>
                                    Intelligent billing suggestions derived from our database.
                                </p>
                            ),
                            link: (
                                <a
                                    href="/docs/features/favourites"
                                    title="Pre-set Favourite codes"
                                >
                                    Learn more >
                                </a>
                            ),
                            img: (
                                <img className={styles.squareImage} src={'img/leaseLogicArt.webp'}/>
                            ),
                        },
                        {
                            title: 'Physician Billing Number Database',
                            text: (
                                <p>
                                    Lookup a referring physician's billing number in our extensive catalog.
                                </p>
                            ),
                            link: (
                                <a
                                    href="/docs/features/adding-referring-physician"
                                    title="Referring Physician Billing Numbers"
                                >
                                    Learn more >
                                </a>
                            ),
                            img: (
                                <img className={styles.squareImage} src={'img/leaseLogicArt.webp'}/>
                            ),
                        }
                    ]}
                />
                <HomepageFeatures/>
                <Pricing/>
                <AboutUs/>
                <ContactForm/>
            </main>
        </Layout>
    );
}
