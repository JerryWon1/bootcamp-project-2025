"use client";
import { blogs } from "../../blogData";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogPost.module.css";

export default function BlogPage() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <div style={{ textAlign: "center", padding: "3rem" }}>
                Blog post not found.
            </div>
        );
    }

    return (
        <main className={styles.blogCard}>
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogDate}>{blog.date}</p>
            <div className={styles.blogImageWrapper}>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={320}
                    height={220}
                    style={{ borderRadius: "10px" }}
                />
            </div>
            <p className={styles.blogContent}>{blog.content}</p>
            <div className={styles.backContainer}>
                <Link href="/blogs" className={styles.backToBlogs}>
                    Back to Blogs
                </Link>
            </div>
        </main>
    );
}
