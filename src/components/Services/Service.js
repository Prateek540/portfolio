import React from "react";
import styles from "./Service.module.css";
import { SiWebtrees } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { MdGraphicEq } from "react-icons/md";
import { FaDigitalOcean } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <div id="Services" className={styles.ServiceContainer}>
        <h1 className={styles.ServiceHeading}>SERVICES</h1>
        <div className={styles.ServiceSection}>
          <div className={styles.Service}>
            <SiWebtrees className={styles.ServiceIcon} />
            <h3 className={styles.ServiceName}>WEB DESIGN</h3>
            <p className={styles.ServiceDetails}>
              Planning, conceptualizing, and implementing the plan for designing
              a website in a way that is functional and offers a good user
              experience.
            </p>
          </div>
          <div className={styles.Service}>
            <CgWebsite className={styles.ServiceIcon} />
            <h3 className={styles.ServiceName}>WEB DEVELOPMENT</h3>
            <p className={styles.ServiceDetails}>
              Web development, refers to the tasks associated with creating,
              building, and maintaining websites and web applications that run
              online on a browser.
            </p>
          </div>
          <div className={styles.Service}>
            <MdOutlinePhotoCameraBack className={styles.ServiceIcon} />
            <h3 className={styles.ServiceName}>PHOTOGRAPHY</h3>
            <p className={styles.ServiceDetails}>
              Photography is the art of creating images by recording light,
              either electronically by means of an sensor, or chemically by
              means of a light-sensitive material such as photographic film.
            </p>
          </div>
          <div className={styles.Service}>
            <DiResponsive className={styles.ServiceIcon} />
            <h3 className={styles.ServiceName}>RESPONSIVE DESIGN</h3>
            <p className={styles.ServiceDetails}>
              Responsive web design is about creating web pages that look good
              on all devices! A responsive web design will automatically adjust
              for different screen sizes and viewports.
            </p>
          </div>
          <div className={styles.Service}>
            <MdGraphicEq className={styles.ServiceIcon} />
            <h3 className={styles.ServiceName}>GRAPHIC DESIGN</h3>
            <p className={styles.ServiceDetails}>
              Graphic design is a form of communication that uses colours,
              shapes, images, and words to create visual content that surrounds
              us in many forms.
            </p>
          </div>
          <div className={styles.Service}>
            <FaDigitalOcean className={styles.ServiceIcon} />
            <h3 className={styles.ServiceName}>DIGITAL MARKETING</h3>
            <p className={styles.ServiceDetails}>
              Digital marketing is the use of digital channels to market
              products. Also known as online marketing, digital marketing
              promotes brands and connects them to potential customers via the
              internet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
