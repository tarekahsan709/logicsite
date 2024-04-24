import React from 'react';
import styles from './style.module.css';

export default function TeamMemberCard({ name, title, imageUrl }) {
    return (
        <div className="col col--4">
            <div className={styles.card}>
                <img src={imageUrl} alt={`Profile of ${name}`} className={styles.profilePic}/>
                <div className={styles.info}>
                    <strong>{name}</strong>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}