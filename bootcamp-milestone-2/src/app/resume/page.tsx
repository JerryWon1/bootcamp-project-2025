import styles from "./resume.module.css";

export default function ResumePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>Resume</div>

            <section className={styles.section}>
                <div className={styles.sectionTitle}>Education</div>
                <div className={styles.eduDegree}>
                    Bachelor of Science in Computer Science
                </div>
                <div className={styles.eduSchool}>
                    California Polytechnic State University, San Luis Obispo{" "}
                    <br />
                    <em>Expected Graduation June 2028</em>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionTitle}>Experience</div>
                <div className={styles.expTitle}>Hack4Impact Developer</div>
                <div className={styles.expOrg}>
                    California Polytechnic State University, San Luis Obispo
                    &mdash; September 2025 - Present
                </div>
                <ul className={styles.expList}>
                    <li>
                        Developed and maintained web applications for local
                        non-profits.
                    </li>
                    <li>
                        Collaborated with a team of developers to implement new
                        features and fix bugs.
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionTitle}>Coursework</div>
                <div className={styles.courseList}>
                    <span className={styles.courseItem}>CSC 101</span>
                    <span className={styles.courseItem}>CSC 202</span>
                    <span className={styles.courseItem}>CSC 203</span>
                    <span className={styles.courseItem}>CSC 248</span>
                    <span className={styles.courseItem}>CSC 349</span>
                    <span className={styles.courseItem}>CSC 357</span>
                    <span className={styles.courseItem}>CSC 365</span>
                    <span className={styles.courseItem}>CSC 445</span>
                    <span className={styles.courseItem}>CPE 123</span>
                    <span className={styles.courseItem}>CPE 225</span>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionTitle}>Projects</div>
                {/* Add projects here */}
                <em>Coming soon!</em>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionTitle}>Skills</div>
                <div className={styles.skillsGrid}>
                    <div>
                        <div className={styles.skillsTitle}>
                            Programming Languages
                        </div>
                        <div className={styles.skillList}>
                            Python, Java, C++, JavaScript
                        </div>
                    </div>
                    <div>
                        <div className={styles.skillsTitle}>
                            Web Development
                        </div>
                        <div className={styles.skillList}>HTML, CSS, React</div>
                        <div className={styles.skillsTitle}>Tools</div>
                        <div className={styles.skillList}>
                            Git, VS Code, Jupyter Notebook
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
