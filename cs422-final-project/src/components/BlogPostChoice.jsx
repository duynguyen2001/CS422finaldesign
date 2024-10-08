import React from "react";
import styles from "./BlogPostChoice.module.css";

const BlogPostChoice = ({
    title,
    content,
    category,
    date,
    author,
    imglink,
    onPostContainerClick
}) => {
    return (
        <div style={{alignContent:"left", justifyContent:"left"}}className={styles.postContainer} onClick={onPostContainerClick}>
            <img className={styles.image} alt={imglink} src={imglink} />
            <div className={styles.post}>
                <b className={styles.categoryTaguiS}>
                    {category} | {date} | By {author}
                </b>
                <br />
                <b className={styles.postTitleTagh5}>{title}</b>
                <br />
                <b className={styles.textTagp}>
                    <text>{content}</text>
                </b>
            </div>
        </div>
    );
};

export default BlogPostChoice;
