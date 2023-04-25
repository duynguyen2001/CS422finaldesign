import React from "react";
import styles from "./BlogPostChoice.module.css";

const BlogPostChoice = ({
    title,
    content,
    category,
    date,
    author,
    imglink,
}) => {
    return (
        <div className={styles.postContainer}>
            <img className={styles.backgroundShape2} alt={imglink} src={imglink}/>
            <div>
                <div className={styles.post} >
                    <b className={styles.categoryTaguiS}>
                        {category} | {date} | By {author}
                    </b>
                    <br />
                    <b className={styles.postTitleTagh5}>{title}</b>
                    <br />
                    <div className={styles.textTagp}>{content}</div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostChoice;
