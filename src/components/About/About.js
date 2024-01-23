import React from "react";
import styles from "./About.module.css";
import img from "../../images/About.jpg";

const About = () => {
  const handleRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div id="About" className={styles.AboutContainer}>
        <div className={styles.AboutSection}>
          <h1 className={styles.AboutMe}>ABOUT ME</h1>
          <h3 className={styles.DetailMe}>
            Hi my name is Prateek Pathak and I am a fullstack web developer from
            Lucknow. My key skills are HTML, CSS, JavaScript, Core Java,
            ReactJs, NodeJs, ExpressJs, MongoDB, Mongoose, Postman, Git/GitHub
            etc. I have completed my B.Tech CSE from Amity University Lucknow
            and my schooling from Lucknow Public School and Colleges.
          </h3>
          <h3 className={styles.DetailMe}>My Details are listed below.</h3>
          <img
            onContextMenu={handleRightClick}
            className={styles.Profile}
            src={img}
            alt="profile"
          />
          <p className={styles.DetailMe}>Name : Prateek Pathak</p>
          <p className={styles.DetailMe}>Profile: Fullstack Developer</p>
          <p className={styles.DetailMe}>Email: prateekpathak97@gmail.com</p>
          <p className={styles.DetailMe}>Phone: +91-8765925155</p>
          <p className={styles.DetailMe}>GitHub Profile: Prateek540</p>
        </div>
      </div>
    </>
  );
};

export default About;
