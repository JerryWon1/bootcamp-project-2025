import styles from "./contact.module.css";

export default function ContactMePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>Contact Me</div>
            <div className={styles.infoText}>
                Feel free to reach out about projects, tutoring, or anything
                tech-related!
                <br />
                You can contact me using the info below:
            </div>
            <div className={styles.buttonRow}>
                <a
                    href="mailto:jwon1750@gmail.com"
                    className={styles.emailLink}
                >
                    jwon1750@gmail.com
                </a>
            </div>
            <div className={styles.socialList}>
                <a
                    href="https://www.linkedin.com/in/jerrywon1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/JerryWon1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}
