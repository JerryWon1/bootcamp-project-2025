import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <h1 className={styles.title}>Jerry's Personal Website</h1>
            <nav>
                <ul className={styles.navbarList}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link href="/about">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
