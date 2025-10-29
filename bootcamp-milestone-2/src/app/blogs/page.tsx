import { blogs } from "../blogData";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogs.module.css";

export default function BlogsPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.header}>Blogs</h1>
            <div className={styles.blogList}>
                {blogs.map((blog) => (
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
                            <div className={styles.blogDescription}>
                                {blog.content}
                            </div>
                            <Link
                                href={`/blogs/${blog.id}`}
                                className={styles.readMore}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
