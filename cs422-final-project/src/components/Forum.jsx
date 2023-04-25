import { FunctionComponent, useState, useCallback } from "react";
import styles from "./Forum.module.css";
// import Header from "./Header";
import BlogPosts from "./BlogPosts";
import HeaderComponent from "./HeaderComponent";
const Forum = () => {
    const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
    const [topic, setTopic] = useState("All");

    const onPostContainerClick = useCallback(() => {
        // Please sync "Blog Detail" to the project
    }, []);

    const openSignInPopup = useCallback(() => {
        setSignInPopupOpen(true);
    }, []);

    const closeSignInPopup = useCallback(() => {
        setSignInPopupOpen(false);
    }, []);

    return (
        <div className={styles.blog}>
            <div className={styles.blogContainer}>
                {/* <HeaderComponent /> */}
                <BlogPosts
                    topic={topic}
                    onPostContainerClick={onPostContainerClick}
                />
            </div>
        </div>
    );
};

export default Forum;
