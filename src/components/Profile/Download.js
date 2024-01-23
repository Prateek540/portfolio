import React from "react";
import styles from "./Download.module.css";

const Download = () => {
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + "Prateek_Pathak.pdf";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Prateek_Pathak.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleDownload} className={styles.button}>
      Download Resume
    </button>
  );
};

export default Download;
