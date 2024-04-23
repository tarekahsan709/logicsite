import React from "react";
import styles from "./style.module.css";

export default function AboutUs() {
    return (
        <section className={styles.aboutUs}>
            <div className="container">
                <div className="row">
                    <h2>About LeaseLogic24</h2>
                    <p>
                        At LeaseLogic24, we are committed to revolutionizing the property management industry by
                        providing
                        innovative, user-friendly solutions that streamline the day-to-day operations of property
                        managers
                        and
                        landlords. Founded in [Year], we have consistently focused on delivering high-quality services
                        that
                        incorporate the latest technological advancements.
                    </p>
                    <p>
                        Our mission is to empower real estate professionals to achieve excellence in property management
                        through
                        our comprehensive suite of tools that facilitate tenant management, financial tracking,
                        maintenance
                        coordination, and market analysis. With a dedicated team of experts in real estate, technology,
                        and
                        customer service, LeaseLogic24 is your trusted partner in property management.
                    </p>
                    <h3>Meet Our Team</h3>
                    <ul>
                        <li><strong>John Doe</strong> - CEO & Founder</li>
                        <li><strong>Jane Smith</strong> - CTO & Co-Founder</li>
                        <li><strong>Emily Johnson</strong> - Head of Customer Success</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

