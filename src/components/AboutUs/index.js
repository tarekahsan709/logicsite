import React from 'react';
import TeamMemberCard from "@site/src/components/TeamMemberCard";
import styles from './style.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function AboutUs() {
    return (
        <section className={styles.aboutUs} id="about-us">
            <div className="container">
                <h3>About Us</h3>
                <p>
                    At LeaseLogic24, we are revolutionizing real estate management with cutting-edge solutions
                    designed to enhance every aspect of property management. Founded in [Year], we have consistently
                    led the way in simplifying complex processes, improving profitability for property owners,
                    and ensuring smooth operations for managers.
                </p>
                <p>
                    Our comprehensive platform integrates tools for efficient tenant interaction, streamlined
                    rent collection, precise lease documentation, and effective maintenance management. We
                    are committed to delivering a user-friendly interface equipped with advanced technological
                    features to support these functions.
                </p>
                <h3>Leadership Team</h3>
                <div className="row">
                    <TeamMemberCard
                        name="Md Rahim Abbas"
                        title="Chief Executive Officer"
                        imageUrl={useBaseUrl("/img/profile.jpeg")}
                    />
                    <TeamMemberCard
                        name="Md Mahbub Karim"
                        title="Chief Technology Officer"
                        imageUrl={useBaseUrl("/img/profile.jpeg")}
                    />
                    <TeamMemberCard
                        name="Sayed Khatib Ali"
                        title="Director of Customer Engagement"
                        imageUrl={useBaseUrl("/img/profile.jpeg")}
                    />
                </div>
            </div>
        </section>
    );
}

