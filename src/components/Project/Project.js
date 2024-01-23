import React from "react";
import styles from "./Project.module.css";
import Project1 from "../../images/project1.jpg";
import Project2 from "../../images/project2.jpg";
import Project3 from "../../images/project3.jpg";
import Project4 from "../../images/project4.jpg";
import Project5 from "../../images/project5.jpg";
import Project6 from "../../images/project6.jpg";

const Project = () => {
  const handleRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div id="Project" className={styles.ProjectContainer}>
        <h1 className={styles.ProjectHeading}>PROJECTS</h1>
        <div className={styles.ProjectSection}>
          <div className={styles.Project}>
            <img
              onContextMenu={handleRightClick}
              className={styles.ProjectPic}
              src={Project1}
              alt="Project1"
            />
            <h3 className={styles.ProjectName}>Social App</h3>
            <p className={styles.ProjectDetails}>
              A social media app created using mern stack.
            </p>
          </div>
          <div className={styles.Project}>
            <img
              onContextMenu={handleRightClick}
              className={styles.ProjectPic}
              src={Project2}
              alt="Project2"
            />
            <h3 className={styles.ProjectName}>E-Commerce App</h3>
            <p className={styles.ProjectDetails}>
              A E-Commerce app created using react and redux.
            </p>
          </div>
          <div className={styles.Project}>
            <img
              onContextMenu={handleRightClick}
              className={styles.ProjectPic}
              src={Project6}
              alt="Project6"
            />
            <h3 className={styles.ProjectName}>Video App</h3>
            <p className={styles.ProjectDetails}>
              A youtube clone app created using mern stack.
            </p>
          </div>
          <div className={styles.Project}>
            <img
              onContextMenu={handleRightClick}
              className={styles.ProjectPic}
              src={Project3}
              alt="Project3"
            />
            <h3 className={styles.ProjectName}>Spotify Clone App</h3>
            <p className={styles.ProjectDetails}>
              A spotify clone app created using react and hosted on github
              pages.
            </p>
          </div>
          <div className={styles.Project}>
            <img
              onContextMenu={handleRightClick}
              className={styles.ProjectPic}
              src={Project4}
              alt="Project4"
            />
            <h3 className={styles.ProjectName}>Blog App</h3>
            <p className={styles.ProjectDetails}>
              A blog app created using mern stack.
            </p>
          </div>
          <div className={styles.Project}>
            <img
              onContextMenu={handleRightClick}
              className={styles.ProjectPic}
              src={Project5}
              alt="Project5"
            />
            <h3 className={styles.ProjectName}>Tic-Tac-Toe App</h3>
            <p className={styles.ProjectDetails}>
              A tic-tac-toe gaming app created using react.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
