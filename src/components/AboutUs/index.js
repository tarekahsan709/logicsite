import React from 'react';
import TeamMemberCard from "@site/src/components/TeamMemberCard";
import styles from './style.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from '@theme/Heading';

export default function AboutUs() {
    return (
        <section className={styles.aboutUs} id="about-us">
            <div className="container">
                <Heading as="h2">About Us</Heading>
                <p>
                    At LeaseLogic24, we are revolutionizing real estate management with cutting-edge solutions
                    designed to enhance every aspect of property management. Founded in 2024, we have consistently
                    led the way in simplifying complex processes, improving profitability for property owners,
                    and ensuring smooth operations for managers.
                </p>
                <p>
                    Our comprehensive platform integrates tools for efficient tenant interaction, streamlined
                    rent collection, precise lease documentation, and effective maintenance management. We
                    are committed to delivering a user-friendly interface equipped with advanced technological
                    features to support these functions.
                </p>
                <Heading as="h2">Leadership Team</Heading>
                <div className="row">
                    <TeamMemberCard
                        name="Md Rahim Abbas"
                        title="Chief Executive Officer"
                        imageUrl={useBaseUrl("/img/p1.jpeg")}
                    />
                    <TeamMemberCard
                        name="Md Mahbub Karim"
                        title="Chief Technology Officer"
                        imageUrl={useBaseUrl("/img/p2.jpeg")}
                    />
                    <TeamMemberCard
                        name="Sayed Khatib Ali"
                        title="Director of Customer Engagement"
                        imageUrl={useBaseUrl("/img/p3.jpeg")}
                    />
                </div>
            </div>
        </section>
    );
}

