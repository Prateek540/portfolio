import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const FormSubmit = (event) => {
    event.preventDefault();
    alert("We will get back to you shortly.");
  };
  return (
    <>
      <div id="Contact" className={styles.ContactContainer}>
        <div className={styles.ContactSection}>
          <h1 className={styles.ContactMe}>CONTACT ME</h1>
          <h3 className={styles.DetailMe}>
            Please fill your details to get in touch with me.
          </h3>
          <form onSubmit={FormSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your Name"
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Your Email"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Your Subject"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Your Message"
            />
            <button className={styles.button}>Submit</button>
          </form>
        </div>
        <div className={styles.FooterContainer}>
          <h3 className={styles.FooterData}>
            © Copyright Portfolio. All Rights Reserved Designed by Prateek
            Pathak
          </h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
