import styles from "./home.module.css";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.greeting}>
                Welcome to Jerry's Personal Website!
            </div>
            <div className={styles.subHeader}>Second Year CS Student</div>
            <div className={styles.introText}>
                Hi, I'm Jerry! This site showcases my blogs, resume, and contact
                info. <br />I love working on computer science projects, writing
                about whatever, and sharing what I learn.
            </div>
            <div className={styles.quickLinks}>
                <Link href="/blogs" className={styles.linkButton}>
                    View Blogs
                </Link>
                <Link href="/resume" className={styles.linkButton}>
                    See Resume
                </Link>
                <Link href="/about" className={styles.linkButton}>
                    Contact Me
                </Link>
            </div>
        </div>
    );
}
