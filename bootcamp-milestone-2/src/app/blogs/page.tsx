import { blogs } from "../blogData";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogs.module.css";
import BlogPreview from "../../components/blogPreview";

export default function BlogsPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.header}>Blogs</h1>
            <div className={styles.blogList}>
                {blogs.map((blog) => (
                    <BlogPreview key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
