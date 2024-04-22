import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>
              Property Management Solutions <br />
              <span className="highlight">for Owners</span>
            </h1>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="/docs/getting-started/introduction"
            >
              Getting started
            </Link>
            <p className="padding-top--md">
              Available on <strong>amd64</strong>, <strong>arm64</strong>,{" "}
              <strong>armhf</strong>, and <strong>i386</strong> architectures
            </p>
          </div>
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl("/img/leaseLogicArt.webp")}
              alt="Gotenberg Hero Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
