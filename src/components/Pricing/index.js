import styles from "./style.module.css";

export default function Pricing() {
    return (
        <div className={styles.pricingContainer} id="price">
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.panel}>
                        <div className={styles.pricingtable}>
                            <div className={styles.pricingplan}>
                                <img src="/img/basicplan.svg" alt="Basic Plan" height={75} className={styles.pricingimg}/>
                                <h2 className={styles.pricingheader}>Basic Plan</h2>
                                <h4 className={styles.pricingsubheader}>Ideal for Small Properties</h4>
                                <ul className={styles.pricingfeatures}>
                                    <li className={styles.pricingfeaturesitem}>Centralized property and renter information.</li>
                                    <li className={styles.pricingfeaturesitem}>Customizable rent lease templates.</li>
                                    <li className={styles.pricingfeaturesitem}>Basic payment tracking and reporting.</li>
                                    <li className={styles.pricingfeaturesitem}>Standard document generation.</li>
                                </ul>
                                <span className={styles.pricingprice}>2000 BDT/month</span>
                            </div>
                            <div className={styles.pricingplan}>
                                <img src="/img/premimumplan.svg" alt="Premium Plan" height={75} className={styles.pricingimg}/>
                                <h2 className={styles.pricingheader}>Premium Plan</h2>
                                <h4 className={styles.pricingsubheader}>Perfect for Large Enterprises</h4>
                                <ul className={styles.pricingfeatures}>
                                    <li className={styles.pricingfeaturesitem}>All features in Basic plus:</li>
                                    <li className={styles.pricingfeaturesitem}>Advanced rent tracking with alerts for overdue payments.</li>
                                    <li className={styles.pricingfeaturesitem}>Auto-generation of communication documents.</li>
                                    <li className={styles.pricingfeaturesitem}>Enhanced collaboration tools for teams.</li>
                                </ul>
                                <span className={styles.pricingprice}>3500 BDT/month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
