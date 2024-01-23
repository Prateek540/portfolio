import React from "react";
import styles from "./Profile.module.css";
import img from "../../images/Profile.jpg";
import Download from "./Download";

const Profile = () => {
  const handleRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div id="Profile" className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <div className={styles.details}>
            <h1>
              Hi, I am <span className={styles.name}>Prateek Pathak</span>
            </h1>
            <h3>I am a full stack web developer.</h3>
            <Download />
          </div>
        </div>
        <div className={styles.flexItem}>
          <div className={styles.profileImage}>
            <img
              onContextMenu={handleRightClick}
              src={img}
              className={styles.image}
              alt="Prateek"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
