import React from "react";
import styles from "./style.module.css";
import SmoothScrollLink from '@site/src/components/SmoothScrollLink';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col--7">
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>
                                Welcome to <span className={styles.highlight}>LeaseLogic24</span>
                            </h1>
                            <h2 className={styles.heroSubtitle}>
                                Simplify Your Real Estate Management
                            </h2>
                            <p className={styles.heroDescription}>
                                Empower your property management with our <strong>24/7</strong> comprehensive platform.
                                Efficiently
                                lease, manage, and scale your real estate portfolio with LeaseLogic24.
                            </p>
                            <div className={styles.heroCta}>
                                <SmoothScrollLink
                                    className="button button--primary button--lg"
                                    to="/#price"
                                >
                                    Get Started
                                </SmoothScrollLink>
                                <SmoothScrollLink
                                    className="button button--secondary button--lg"
                                    to="/#features"
                                >
                                    Learn More
                                </SmoothScrollLink>
                            </div>
                        </div>
                    </div>
                    <div className="col col--5">
                        <div className={styles.heroImage}>
                            <img
                                src={useBaseUrl("/img/hm.svg")}
                                alt="LeaseLogic24 Hero"
                                className={styles.heroImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
