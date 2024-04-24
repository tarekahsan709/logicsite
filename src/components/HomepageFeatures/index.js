import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './style.module.css';

const FeatureList = [
    {
        title: 'Comprehensive Tenant Management',
        Svg: require('@site/static/img/tm.svg').default,
        description: (
            <>
                Optimize your leasing process with tools designed for handling applications, payments, and maintenance
                requests effortlessly. Perfect for landlords looking to streamline their operations and improve tenant
                satisfaction.
            </>
        ),
    },
    {
        title: 'Dynamic Landlord Dashboard',
        Svg: require('@site/static/img/ll.svg').default,
        description: (
            <>
                Monitor your property's performance with our intuitive dashboard. Gain instant access to tenant
                details, financials, and operational metrics, empowering you to make data-driven decisions.
            </>
        ),
    },
    {
        title: 'Customizable Rent Lease Creation',
        Svg: require('@site/static/img/lease.svg').default,
        description: (
            <>
                Tailor your rent agreements using customizable templates to meet specific needs. Enhance efficiency
                with automated lease generation, ensuring legal compliance and saving time.
            </>
        ),
    },
    {
        title: 'Efficient Maintenance Coordination',
        Svg: require('@site/static/img/maintanance.svg').default,
        description: (
            <>
                Address tenant maintenance requests swiftly with our organized system. Ensure quick resolutions to
                maintenance issues, maintaining property condition and tenant happiness.
            </>
        ),
    }
];


function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features} id="features">
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
