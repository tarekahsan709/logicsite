import React from "react";
import styles from "./style.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col--6">
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>
                                Welcome to <span className={styles.highlight}>LeaseLogic24</span>
                            </h1>
                            <h2 className={styles.heroSubtitle}>
                                Simplify Your Real Estate Management
                            </h2>
                            <p className={styles.heroDescription}>
                                Empower your property management with our 24/7 comprehensive platform. Efficiently
                                lease, manage, and scale your real estate portfolio with LeaseLogic24.
                            </p>
                            <div className={styles.heroCta}>
                                <Link
                                    className="button button--primary button--lg"
                                    to="/docs/getting-started/introduction"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/features"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.heroImage}>
                            <img
                                src={useBaseUrl("/img/leaseLogicArt.webp")}
                                alt="LeaseLogic24 Hero"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

