import React, { useEffect } from "react";
import BlogPostChoice from "./BlogPostChoice";
import { networkingData, careerAdviceJSONData, skillsData } from "./FakePostData.js";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
function BlogPosts({ topic, onPostContainerClick,jsonData, setJsonData }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);

  useEffect(() => {
    if (topic === "Networking") {
      setJsonData(networkingData);
    } else if (topic === "Career Advice") {
      setJsonData(shuffleArray(careerAdviceJSONData));
    } else if (topic === "Skills") {
      setJsonData(shuffleArray(skillsData));
    } else {
      setJsonData(shuffleArray([...networkingData, ...careerAdviceJSONData, ...skillsData]));
    }
  }, [topic]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jsonData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        content: "left",
      }}
    >
      {currentPosts.map((post, index) => (
        <BlogPostChoice
          key={index}
          title={post.title}
          content={post.content}
          category={post.category}
          date={post.date}
          author={post.author}
          imglink={post.imglink}
          onPostContainerClick={onPostContainerClick}
          data={post}
        />
      ))}
      {jsonData.length > postsPerPage && (
        <div className="pagination">
          {[...Array(Math.ceil(jsonData.length / postsPerPage)).keys()].map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber + 1)}
                className={
                  currentPage === pageNumber + 1 ? "active" : undefined
                }
                style={{backgroundColor: "#4525f2",
                color: "white",
              marginTop: "10px",}}
              >
                {pageNumber + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default BlogPosts;
