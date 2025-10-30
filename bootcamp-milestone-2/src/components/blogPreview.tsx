import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./blogPreview.module.css";
import type { Blog } from "../app/blogData";

export default function BlogPreview({ blog }: { blog: Blog }) {
    return (
        <div key={blog.id} className={styles.blogCard}>
            <Image
                src={blog.image}
                alt={blog.title}
                width={100}
                height={70}
                className={styles.blogImage}
            />
            <div className={styles.blogInfo}>
                <div className={styles.blogTitle}>{blog.title}</div>
                <div className={styles.blogDate}>{blog.date}</div>
                <div className={styles.blogDescription}>{blog.content}</div>
                <Link href={`/blogs/${blog.id}`} className={styles.readMore}>
                    Read More
                </Link>
            </div>
        </div>
    );
}
