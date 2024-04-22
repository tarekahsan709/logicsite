import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './style.module.css';

const FeatureList = [
    {
        title: 'Tenant Management',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Streamline your leasing process with intuitive tenant management tools. Handle applications, payments, and maintenance requests effortlessly.
            </>
        ),
    },
    {
        title: 'Landlord Portal',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Gain comprehensive insights into your properties' performance. Our landlord portal offers real-time data on financials, tenant status, and more.
            </>
        ),
    },
    {
        title: 'Market Insights',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Stay ahead of the curve with advanced analytics on market trends. LeaseLogic24 provides you with detailed reports on rental rates and market demands.
            </>
        ),
    },
    {
        title: 'Vehicle Management',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Manage parking spaces and related amenities with ease. Our vehicle management system integrates seamlessly into your overall property management strategy.
            </>
        ),
    },
    {
        title: 'Online Payments',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Facilitate secure and prompt rent and fee payments online. LeaseLogic24 simplifies transactions, making it easier for tenants and landlords alike.
            </>
        ),
    },
    {
        title: 'Maintenance Coordination',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Coordinate repair and maintenance tasks efficiently. Our platform ensures that tenant requests are managed quickly and effectively.
            </>
        ),
    }
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
    <section className={styles.features}>
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
