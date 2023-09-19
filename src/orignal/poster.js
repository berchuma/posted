import React from "react";

import styles from "./opster.module.css";


const Postr = () => {
  return (
    <section className={styles.container} id="expri">
      <div className={styles.content}>
        <h1 className={styles.title}>selam </h1>
        <p className={styles.description}>
        Our shoope is this. Everything is available; simply place your purchase.
         We will be grateful to have your business; thank you. 
        </p>
        
      </div>
      <img
        src='https://uploads-ssl.webflow.com/64f95a226e01da60abcda20f/6501a0a5994dc19d15c96c0f_lala.png'
        alt="Hero"
        className={styles.heroImgA}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Postr;
